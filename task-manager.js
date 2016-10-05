angular.module('taskManager', []).controller('MainController', function(){
	$scope.tasks = [];
	$scope.showDone = false;
	$scope.sort = ['urgency', 'importance'];
	$scope.activeTask = null;

	this.createNew = function(){
		$scope.activeTask = {
			description: '',
			urgency: true,
			importance: true,
			done: false,
			created: new Date()
		};
		$scope.tasks.unshift($scope.activeTask);
	}
	this.setSort = function(sort){
		if (sort == 'urgency') $scope.sort = ['urgency', 'importance', 'created'];
		else if (sort == 'importance') $scope.sort = ['urgency', 'importance', 'created'];
	}
	this.toggleShowDone = function(){
		$scope.showDone = !$scope.showDone;
	}
	this.completeTask = function(task){
		task.done = true;
	}
});
