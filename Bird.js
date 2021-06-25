class Bird
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.Bird=Bodies.rectangle(x,y,30,30,option);
        World.add(world,this.Bird);
        
        this.width=30;
        this.height=30;
    }

    display()
    {
        var pos=this.Bird.position;
        var angle=this.Bird.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();     
    }
}