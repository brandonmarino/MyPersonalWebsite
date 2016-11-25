angular.module('starter.controllers', [])
.controller('AboutMeCtrl', function($scope) {
  //personal info
  $scope.myname = "Brandon Marino";
  $scope.aboutme = "Hello there! My name is Brandon Marino and I'm a software engineer from Toronto, Ontario. I enjoy finding simple solutions to complex problems. I am always looking for new projects to work on.";
  $scope.myimage = "img/myprofileimage.png";

  $scope.goToGitHub = function(){
    window.open("http://www.github.com/brandonmarino");
  }
  $scope.goToFaceBook = function(){
    window.open("http://www.facebook.com/Brandon.Marino4");
  }
  $scope.goToLinkedIn = function(){
    window.open("http://www.linkedin.com/in/brandon-marino-1523a990");
  }
})

.controller('ContactInfoCtrl', function($scope) {
  $scope.goToGitHub = function(){
    window.open("http://www.github.com/brandonmarino");
  }
  $scope.goToFaceBook = function(){
    window.open("http://www.facebook.com/Brandon.Marino4");
  }
  $scope.goToLinkedIn = function(){
    window.open("http://www.linkedin.com/in/brandon-marino-1523a990");
  }
  $scope.contactinfo = "Brandon Marino <br> (416)-825-6522<br>brandon.a.marino@gmail.com";
})

.controller('PortfolioCtrl', function($scope) {
  $scope.projects=[];
  
  //unitap
  $scope.projects.push({
  "name":"UniTap",
  "image":"img/unitaponphone.jpg",
  "description":"Nullam a luctus ipsum. Nulla purus urna, ullamcorper vitae volutpat non, elementum sed urna. Vivamus commodo tincidunt venenatis. Nullam semper enim a sem accumsan ornare. Mauris hendrerit odio"
  });
  //clubhub
  $scope.projects.push({
  "name":"ClubHub",
  "image":"img/clubhubonphone.jpg",
  "description":"Nullam a luctus ipsum. Nulla purus urna, ullamcorper vitae volutpat non, elementum sed urna. Vivamus commodo tincidunt venenatis. Nullam semper enim a sem accumsan ornare. Mauris hendrerit odio"
  });
})

.controller('ExperienceCtrl', function($scope) {

})

.controller('SkillsCtrl', function($scope) {

});