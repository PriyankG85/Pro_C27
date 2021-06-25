class Pig
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.Pig=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.Pig);
        this.width=50;
        this.height=50;
    }

    display()
    {
        var pos=this.Pig.position;
        var angle=this.Pig.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();     
    }
}