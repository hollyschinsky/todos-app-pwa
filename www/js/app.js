// Set up some useful globals
window.isMaterial = !window.Framework7.prototype.device.ios;
window.isiOS = window.Framework7.prototype.device.ios;

window.store = {
  todos: todoStorage.fetch(),
  state: {
    selectedCategory: 'ALL',
    categories: todoStorage.categories,        
  },  
  changeCategory (category) {
    this.state.selectedCategory = category;
  },   
};

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init Page Components
Vue.component('page-tabs', {
  template: '#page-tabs',
  name: 'Tabs', 
  data () {
    return {
      isMounted: false    
    };
  },   
  computed: {
    isiOS () {
      return window.isiOS;
    },
    isMaterial () {
      return window.isMaterial;
    }
  }
});

Vue.component('page-pending', {
  template: '#page-pending',
  data () {
    return {
      title: 'Pending Items',      
      todos: window.store.todos,
      sharedState: window.store.state,
      store: window.store
    };
  },
  methods: {
    onItemDeleted (todo) {
      removeTodo(todo);
    },
    // Toggle completed status
    onToggle (todo, key) {
      // Only do the toggle if the checkbox is specifically clicked, not the whole item itself as it could also be sliding over to do a delete
      if (event.srcElement.classList.contains('icon-form-checkbox') || event.srcElement.classList.contains('label-checkbox')) {
        toggleTodo(key);        
      } 
      else event.preventDefault();
    },
    displayItem (todo) {
      return (!todo.completed) && (todo.category === this.sharedState.selectedCategory || this.sharedState.selectedCategory === 'ALL');
    }
  }
});

Vue.component('page-completed', {
  template: '#page-completed',
  name: 'Completed',
  data () {
    return {
      title: 'Completed Items',
      todos: window.store.todos,
      store: window.store,
      sharedState: window.store.state      
    };
  },
  methods: {
    onItemDeleted (todo) {
      removeTodo(todo);
    },
    // Toggle completed status
    onToggle (todo, key) {
      // Only do the toggle if the checkbox is specifically clicked, not the whole item itself as it could also be sliding over to do a delete
      if (event.srcElement.classList.contains('icon-form-checkbox') || event.srcElement.classList.contains('label-checkbox')) {      
        toggleTodo(key);        
      } 
      else event.preventDefault();
    },
    displayItem (todo) {
      return (todo.completed) && (todo.category === this.sharedState.selectedCategory || this.sharedState.selectedCategory === 'ALL');
    }
  }
});

Vue.component('todo-item', {
  template: '#todo-item',
  name: 'todo-item',
  data () {
    return {
      id: '',
      title: '',
      category: '',
      desc: '',
      highlight: false,
      urgent: false,
      item: ''
    }
  },
  methods: {
    addNewTodo () {
      this.item = { 
        id: Math.floor(Math.random() * 10000),
        title: this.title,
        category: this.category.length > 0 ? this.category.toUpperCase() : 'NO CATEGORY',
        desc: this.desc,
        highlight: this.highlight,
        urgent: this.urgent,
        completed: false 
      };
      if (!this.title) {
        this.$f7.alert('Please enter a title for your todo.', 'Title Required');
      } else {
        addTodo(this.item);
        this.$f7.closeModal();
      }
      this.title = ''; this.category = ''; this.desc = ''; this.highlight = false; this.urgent = false;
    }    
  }
});

// Need to add this event or static text in pages will flash quickly
window.addEventListener("load", function(event) {
    myVue.isMounted = true;
});

// Init App
var myVue = new Vue({
  el: '#app',  
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    swipePanel: 'left',
    material: window.isMaterial,
    animateNavBackIcon: window.isiOS,
    pushState: true,
    pushStateNoAnimation: true    
  },
  data () {
    return {
      sharedState: window.store.state,
      categories: window.store.state.categories,
      item: '',
      isMounted: false       
    };
  },
  methods: {
    filterCategory (cat) {
      this.isActive = true;
      window.store.changeCategory(cat);
    },      
  },
  computed: {
    isiOS () {
      return window.isiOS;
    },
    isMaterial () {
      return window.isMaterial;
    }
  }
});
