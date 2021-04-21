var app = new Vue({
    el: '#root',
    data: {
        userNewTodo: '',
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],
    },
    methods: {
        addNewTodo() {
            if (this.userNewTodo.length > 0) {
                this.todos.push(this.userNewTodo)
                this.userNewTodo = '';
            }
        },

        deleteToDo(index) {
            this.todos.splice(index, 1)
        }
     }
})