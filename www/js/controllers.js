angular.module('starter.controllers', [])

.controller('AboutMeCtrl', function($scope) {
  //personal info
  $scope.myname = "Brandon Marino";
  $scope.aboutme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien vestibulum, efficitur turpis vitae, lacinia neque. Duis nec lacinia lorem, et vehicula ligula. Aenean ante tellus, consectetur non velit ac, tristique interdum turpis. Nam pellentesque laoreet erat, ut semper turpis mollis quis. Sed sollicitudin lacus enim. Nunc nunc turpis, tincidunt nec gravida egestas, lobortis eget orci. Pellentesque iaculis, lacus sit amet iaculis tempor, neque arcu condimentum libero, non ornare mi diam at magna. In fermentum nunc vitae commodo auctor. Morbi sagittis vestibulum massa, a accumsan sem vehicula a. Phasellus bibendum odio sapien, nec placerat tellus mattis non. Nunc sagittis arcu id dolor mollis consequat. Integer iaculis luctus tincidunt. Cras tristique elementum nisl sed mollis. Proin cursus iaculis sapien sed sollicitudin. Duis porttitor felis in eros pretium, in convallis lorem dignissim. Morbi vel turpis ut lacus mattis ornare. Proin scelerisque turpis vitae tincidunt vehicula. Aliquam fermentum tempus est. Vivamus magna metus, bibendum id rutrum et, sagittis vel dolor. Vestibulum bibendum felis eget ex rutrum tempus. Integer vel nunc quis dui eleifend dapibus. Donec vitae lacus ante. Maecenas faucibus, nisi ut facilisis tincidunt, turpis elit gravida massa, ut tempus metus magna sit amet mauris. Curabitur sed quam euismod, dapibus quam in, mattis justo. Etiam justo lacus, posuere quis neque nec, vulputate eleifend velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien vestibulum, efficitur turpis vitae, lacinia neque. Duis nec lacinia lorem, et vehicula ligula. Aenean ante tellus, consectetur non velit ac, tristique interdum turpis. Nam pellentesque laoreet erat, ut semper turpis mollis quis. Sed sollicitudin lacus enim. Nunc nunc turpis, tincidunt nec gravida egestas, lobortis eget orci. Pellentesque iaculis, lacus sit amet iaculis tempor, neque arcu condimentum libero, non ornare mi diam at magna. In fermentum nunc vitae commodo auctor. Morbi sagittis vestibulum massa, a accumsan sem vehicula a. Phasellus bibendum odio sapien, nec placerat tellus mattis non. Nunc sagittis arcu id dolor mollis consequat. Integer iaculis luctus tincidunt. Cras tristique elementum nisl sed mollis. Proin cursus iaculis sapien sed sollicitudin. Duis porttitor felis in eros pretium, in convallis lorem dignissim. Morbi vel turpis ut lacus mattis ornare. Proin scelerisque turpis vitae tincidunt vehicula. Aliquam fermentum tempus est. Vivamus magna metus, bibendum id rutrum et, sagittis vel dolor. Vestibulum bibendum felis eget ex rutrum tempus. Integer vel nunc quis dui eleifend dapibus. Donec vitae lacus ante. Maecenas faucibus, nisi ut facilisis tincidunt, turpis elit gravida massa, ut tempus metus magna sit amet mauris. Curabitur sed quam euismod, dapibus quam in, mattis justo. Etiam justo lacus, posuere quis neque nec, vulputate eleifend velit.";
  $scope.myimage = "img/myprofileimage.png";

  
})

.controller('PortfolioCtrl', function($scope) {
  //project descriptions
  $scope.unitapdescr= "Nullam a luctus ipsum. Nulla purus urna, ullamcorper vitae volutpat non, elementum sed urna. Vivamus commodo tincidunt venenatis. Nullam semper enim a sem accumsan ornare. Mauris hendrerit odio";
  $scope.clubhubdescr= "Nullam a luctus ipsum. Nulla purus urna, ullamcorper vitae volutpat non, elementum sed urna. Vivamus commodo tincidunt venenatis. Nullam semper enim a sem accumsan ornare. Mauris hendrerit odio";
  
  // project images
  $scope.unitapimage = "http://i1-news.softpedia-static.com/images/news2/Android-M-Developer-Preview-Screenshot-Tour-482648-3.jpg";
  $scope.clubhubimage = "http://i1-news.softpedia-static.com/images/news2/Android-M-Developer-Preview-Screenshot-Tour-482648-3.jpg";
  $scope.contactinfo = "Brandon Marino <br> (416)-825-6522<br>brandon.a.marino@gmail.com";
})

.controller('ResumeCtrl', function($scope) {
  
})

.controller('ContactInfoCtrl', function($scope) {
  
});
