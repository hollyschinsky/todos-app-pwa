/* localStorage handling */
const STORAGE_KEY = 'pg-todos';
// Set up initial set of todos and categories if any saved in local storage
const todoStorage = {
  categories: [],
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    // Read and store the categories found from the todos in localStorage for the side menu list
    this.addCategories(todos); 
    return todos;
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
  addCategories (todos) {
    todos.filter((todo) => {
      if (this.categories.indexOf(todo.category.toUpperCase()) === -1) {
        this.categories.push(todo.category.toUpperCase());
      }
    });
  }
};

function updateTodo (todo, prevCat) {
  // Need to find the index of the object with the matching id and then update it
  // then use it again in the splice to trigger the deep update in the lists
  var todoIndex = store.todos.findIndex(function (item) { return item.id === todo.id; });
  if (todoIndex > -1) {
    store.todos[todoIndex] = todo;
    // Force the update in the list - need this line or the Vue.set command
    // https://vuejs.org/v2/guide/list.html#Caveats
    store.todos.splice(todoIndex, 1, todo);
    if (todo.category !== prevCat) {
      // Look for existence of the previous category and if not found in any others remove it
      var prevIndex = store.todos.findIndex(function (item) { return item.category === prevCat; });
      if (prevIndex === -1 && prevCat !== 'NO CATEGORY') {
        var catIndex = store.state.categories.indexOf(prevCat.toUpperCase());
        if (store.state.selectedCategory === prevCat) {
          window.store.changeCategory('ALL');
        }
        store.state.categories.splice(catIndex, 1);
      }
      // Look for existence of the new category and if not found add it to store
      if (store.state.categories.indexOf(todo.category.toUpperCase()) === -1) {
        store.state.categories.push(todo.category.toUpperCase());
      }
    }
    saveTodosToLocalStorage();
  }
}

function addTodo (todo) {
  store.todos.push(todo);
  store.todos.filter((todo) => {
    if (store.state.categories.indexOf(todo.category.toUpperCase()) === -1) {
      store.state.categories.push(todo.category.toUpperCase());
    }
  });
  saveTodosToLocalStorage();
}

function saveTodosToLocalStorage () {
  todoStorage.save(store.todos);
}

function removeTodo (todo) {
  var idx = store.todos.indexOf(todo);
  store.todos.splice(idx, 1);
  var elem = document.getElementById(todo.category);
  if (elem != null) {
    var catIndex = store.todos.indexOf(todo);
    store.state.categories.splice(catIndex, 1);
  }
  saveTodosToLocalStorage();
}

function toggleTodo (key) {
  store.todos[key].completed = !store.todos[key].completed;
  saveTodosToLocalStorage();
}
