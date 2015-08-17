angular.module('TodoApp', [])
	.controller('TodoAppController', function() {
		var self = this;
		self.todos = [];

		// todo作成
		self.create = function() {
			self.todos.push({title: self.newTodo, done: false});
			self.newTodo = '';
		};
	});

