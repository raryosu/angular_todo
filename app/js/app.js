angular.module('TodoApp', [])
	.controller('TodoAppController', function() {
		var self = this;
		self.todos = [];

		// todo作成
		self.create = function() {
			self.todos.push({title: self.newTodo, done: false});
			self.newTodo = '';
		};

		// アーカイブ機能
		self.archive = function() {
			var currentTodo = self.todos;
			self.todos = [];
			angular.forEach(currentTodo, function(todo) {
				if(!todo.done) {
					self.todos.push(todo);
				}
			});
		};
	});

