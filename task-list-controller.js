angular.module('taskManager').component('taskListController', {
	templateUrl: '/task-list-controller.html',
	controller: ['$scope', function($scope){
		this.currentSortAscending = false;
		this.currentSortProperty = null; 
		$scope.toggleSort = function(property){
			if(this.currentSortProperty == property)
				this.currentSortAscending = !this.currentSortAscending;
			else{
				this.currentSortProperty = property;
				this.currentSortAscending = false;
			}
		}

	}],
	bindings: {
		task: '='
	}
});
