bluewater.directive('bw-allow-edit', function() {
   return {
       link: function($scope, element, attrs) {
           attrs.$observe('caption', function(value) {
               element.find('figcaption').text(value)
           })
       }
   }
});
