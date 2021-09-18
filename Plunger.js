class Plunger{
    constructor(x, y){
        var plunger_options = {
           
            isStatic:true
        }
        this.x = x
        this.y = y
        this.w = 100
        this.h = 150
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.y,plunger_options)
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        rectMode(CENTER)
        ellipseMode(RADIUS)
        rect(pos.x,pos.y,this.w,this.h-20)
        ellipse(pos.x,pos.y-this.h/2,10,10)
    }
    remove() {
        World.remove(world,this.body)
        
    }
}