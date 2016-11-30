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
  $scope.goToResume = function(){
    window.open("pdf/Resume.pdf");
  }
  $scope.phonenumber = "(416)-825-6522";
  $scope.emailaddress = "brandon.a.marino@gmail.com"
})

.controller('PortfolioCtrl', function($scope) {
  $scope.projects=[];
  
  //unitap
  $scope.projects.push({
    "name":"UniTap",
    "image":"img/unitaponphone.jpg",
    "description":"An app that allows clients to enter public transit vehicles, private businesses, and other forms of secured locations using their android powered phone as opposed to a traditional tap-on card. Built using a mix of back-end Java and front-end XML in Android Studio utilizing Host-Card Based Emulation."
  });
  //clubhub
  $scope.projects.push({
    "name":"ClubHub",
    "image":"img/clubhubonphone.jpg",
    "description":"An app which allows users to connect with the clubs in their area regardless of where they currently live. This app was built using Angular.js and is cross compatible with Windows, iOS and Android."
  });
})

.controller('ExperienceCtrl', function($scope) {
  $scope.gotoExperience = function(link){
    if (link!="")
      window.open(link);
  }

  //jobs
  $scope.jobs=[];
  $scope.jobs.push({
    "company":"Deighton Associates Limited",
    "title":"Test Developer",
    "image":"img/deighton.png",
    "link":"http://deighton.com",
    "description":"Here, I developed Web Service and Automated UI tests for an in-development software project. The work involved collaboration with the developers of multiple projects to ensure the highest possible quality upon launch. This position allowed me to work in an agile environment with other driven individuals. C#, JavaScript and my knowledge of HTML were used extensively in this position."
    
  });
  //deighton

  $scope.events=[];
  $scope.events.push({
    "name":"Hack The Wall Hackathon",
    "date":"December 2016",
    "link":"http://carleton.ca/sce/2016/hack-the-wall-app-competition/",
    "image":"img/school_images/carleton.gif"
  });

  $scope.events.push({
    "name":"Vex Robotics 2012",
    "date":"February 2012",
    "link":"https://www.vexrobotics.com/wiki/Team_2560",
    "image":"img/school_images/RavenRoboticsLogo.jpg"
  });

  $scope.events.push({
    "name":"Vex Robotics 2011",
    "date":"February 2011",
    "link":"https://www.vexrobotics.com/wiki/Team_2560",
    "image":"img/school_images/RavenRoboticsLogo.jpg"
  });

  $scope.schools=[];
  $scope.schools.push({
    "degree":"Bachelor of Software Engineering",
    "name":"Carleton University",
    "grad":"December 2016",
    "image":"img/school_images/carleton.gif"
  });
})

.controller('SkillsCtrl', function($scope) {
  $scope.languages=[];
  
  $scope.languages.push({
    "name":"Java",
    "image":"img/skills_images/java.png",
    "percentage":100,
    "years":"7"
  });
  
  $scope.languages.push({
    "name":"JavaScript",
    "image":"img/skills_images/javascript.png",
    "percentage":60,
    "years":"3"
  });
  
  $scope.languages.push({
    "name":"HTML",
    "image":"img/skills_images/HTML5.png",
    "percentage":60,
    "years":"3"
  });
  
  $scope.languages.push({
    "name":"Angular.js",
    "image":"img/skills_images/angularjs.png",
    "percentage":20,
    "years":"1"
  });
  
  $scope.languages.push({
    "name":"C",
    "image":"img/skills_images/c.png",
    "percentage":80,
    "years":"4"
  });
  
  $scope.languages.push({
    "name":"C#",
    "image":"img/skills_images/csharp.png",
    "percentage":40,
    "years":"2"
  });

  $scope.languages.push({
    "name":"Python",
    "image":"img/skills_images/python.png",
    "percentage":40,
    "years":"2"
  });

  $scope.languages.push({
    "name":"Ruby on Rails",
    "image":"img/skills_images/rails.png",
    "percentage":20,
    "years":"1"
  });
  $scope.languages.push({
    "name":"Golang",
    "image":"img/skills_images/go.png",
    "percentage":20,
    "years":"1"
  });
  $scope.languages.push({
    "name":"C++",
    "image":"img/skills_images/cplusplus.png",
    "percentage":40,
    "years":"2"
  });
  $scope.languages.push({
    "name":"Prolog",
    "image":"img/skills_images/prolog.png",
    "percentage":20,
    "years":"1"
  });

  $scope.hosting="";
  $scope.hosting+="Docker, ";
  $scope.hosting+="Vagrant, ";
  $scope.hosting+="VMWare/VirtualBox, ";
  $scope.hosting+="AWS EC2, ";
  $scope.hosting+="Digital Ocean, ";
  $scope.hosting+="Azure Services, ";
  $scope.hosting+="ParseDB, ";
  $scope.hosting+="Heroku, ";
  $scope.hosting+="experience with domain registration";
  
  $scope.database="";
  $scope.database+="PostgreSQL, ";
  $scope.database+="SQLite, ";
  $scope.database+="Parse, ";
  $scope.database+="Oracle";

  $scope.versionControl="";
  $scope.versionControl+="Git, ";
  $scope.versionControl+="BitBucket, ";
  $scope.versionControl+="TFS";

  $scope.strats="";
  $scope.strats+="Recursion, ";
  $scope.strats+="Data Abstraction, ";
  $scope.strats+="Time Complexity Analysis, ";
  $scope.strats+="UML/Use Case/Sequence Diagrams";

  $scope.structs="";
  $scope.structs+="Linked Lists, ";
  $scope.structs+="Stacks, ";
  $scope.structs+="Queues, ";
  $scope.structs+="Graphs, ";
  $scope.structs+="Trees";
});