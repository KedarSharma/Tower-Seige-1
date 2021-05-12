class Box extends BaseClass {
    constructor(x,y,width,height,angle,color){
        super(x,y,width,height,angle,color,{friction : 1000});
        Matter.Body.setAngle(this.body, angle);
    }
}