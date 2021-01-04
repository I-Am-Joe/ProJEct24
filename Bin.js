class Bin{
    constructor(x,y) {
      this.x=x;
      this.y=y;
      this.binWidth = 200;
      this.binHeight = 100;
      this.wallThickness = 10;
      this.angle = 0;
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.binWidth,this.wallThickness,{isStatic:true});
      this.leftBody  = Bodies.rectangle(this.x-this.binWidth/2,this.y-this.binHeight/2,this.wallThickness,this.binHeight,{isStatic:true});
      Matter.Body.setAngle(this.leftBody,this.angle);

      this.rightBody  = Bodies.rectangle(this.x+this.binWidth/2,this.y-this.binHeight/2,this.wallThickness,this.binHeight,{isStatic:true});
      Matter.Body.setAngle(this.rightBody,-1*this.angle);
      World.add(world,this.bottomBody);
      World.add(world,this.leftBody);
      World.add(world,this.rightBody);

        
      }

      display(){
        var posBottom =this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight= this.rightBody.position;
        push();
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0, 0, this.wallThickness, this.binHeight);
        pop();

        push();
        translate(posRight.x, posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0, 0, this.wallThickness, this.binHeight);
        pop();

        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0, 0, this.binWidth, this.wallThickness);
        pop();
      }
        };