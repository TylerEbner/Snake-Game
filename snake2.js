function Snake() {
  this.x = 0; //sets the default x
  this.y = 0; //sets the default y
  this.xspeed = 1; //sets the initial direction when starting
  this.yspeed = 0; //sets the initial direction when starting
  this.total = 0;
  this.tail= [];
  
  this.dir = function(x,y) { //This moves the snake
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      fRate++;
      pewPewSound.setVolume(1.0);
      pewPewSound.play();
      document.getElementById('yourScore').innerHTML = this.total;
      return true;
    }
    else {
      return false;
    }
  }
  

  
  this.show = function() {
    fill(20,203,223); //This is our snake color
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl); //This is the snake shape
  }
  
  this.death = function() {
    if ((this.tail.length === 0) && (this.x < 0) || (this.x > w - scl) || (this.y > 580) || (this.y < 0)) { //If the tail is 0 and you touch the wall
    document.getElementById('yourScore').innerHTML = "Touched Wall. x";
      this.total = 0;
      this.tail = [];
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y); //if the distance between the head and its tail...
       if ((d < 1) || (this.x < 0 || this.x > w -scl || this.y < 0 || this.y > h - scl)) { //Is less than 1 px or x and y is greater or less than the canvas...
        this.total = 0; //clear the total
        this.tail = []; //clear the array
        document.getElementById('yourScore').innerHTML = "U Suck";
        noLoop(); //stop the draw function
        
      }
   }
 }
   this.update = function () {
    for (var i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i + 1]; //Add one to the tail of the snake
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y); //Make the next box, follow the
    }
    this.x = this.x + this.xspeed * scl; //Moves snake by 20
    this.y = this.y + this.yspeed * scl; //Moves snake by 20
//  this.x = constrain(this.x, 0, width - scl); //If the current x postion is touching the width , then stop.
//  this.y = constrain(this.y, 0, height - scl); //If the current y postion is touching the height , then stop.
  }


}