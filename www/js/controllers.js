angular.module('starter.controllers', [])

.controller('AboutMeCtrl', function($scope) {
  //personal info
  $scope.myname = "Brandon Marino";
  $scope.aboutme = "Hello there! My name is Brandon Marino and I'm a software engineer from Toronto, Ontario. I enjoy finding simple solutions to complex problems. I am always looking for new projects to work on.";
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
