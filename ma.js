class Mangoshooter{
    constructor(x,y){
        var options ={
      stiffness : 0.04,
            bodyA : x,
     pointB : y ,
     length : 10
        }
        this.bodyA = x 
        this.pointB = y 
        this.s = Constraint.create(options)
        World.add(world,this.s)
        
    }
    fly(){
      this.s.bodyA = null;
    }
    display(){
      if(this.s.bodyA){
      var pos =   this.bodyA.position
      var pos1 = this.pointB
      strokeWeight(2)
    line(pos.x,pos.y,pos1.x,pos1.y)
    }
  }

}