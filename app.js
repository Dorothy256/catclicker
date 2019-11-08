var $elem = $("#cuteCat");
var $score = $("#score");

$elem.click(function(e){
  var currScore = $score.text();
  $score.text(parseInt(currScore)+1);
  
});

$elem.on("mouseover", function(e){
  e.currentTarget.style.opacity = 0.9;
  e.currentTarget.style.border= "2px solid orangered";
});

$elem.on("mouseout", function(e){
  e.currentTarget.style.opacity = 1;
  e.currentTarget.style.border= "2px solid white";
});


var Cats = function(name, src){
  this.imgSrc = src;
  this.clicked = 0;
  this.name = name;
  
};

Cats.prototype.update = function(){
  this.clicked += 1;
};




