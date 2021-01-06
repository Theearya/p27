class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
};