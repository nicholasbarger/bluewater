function ItemController($scope) {
    
    $scope.showRemoveIcon = function(targetId) {
        $(targetId).show();
    };
    
    $scope.hideRemoveIcon = function(targetId) {
        $(targetId).hide();
    };
}