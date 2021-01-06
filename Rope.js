class Rope{
    constructor(body1,body2,x,y){
        this.x = x;
        this.y = y;
        var options = {
            bodyA :body1,
            bodyB : body2,
            pointB : {x:this.x,y:this.y}
            
        }
        
       
        this.rope =Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){

        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.bodyB.position;
        
        strokeWeight(2);
        line(pos1.x,pos1.y,(pos2.x+this.x),(pos2.y+this.y))
    }
};