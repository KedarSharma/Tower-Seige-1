const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var state = "general";

var randomColor = [];

for(var a= 1;a<=30;a++){
    randomColor[a] = '#'+Math.floor(Math.random()*12770000).toString(16);
}

function setup(){

    canvas = createCanvas(1500,600);

    engine = Engine.create();
    world = engine.world;

    poly = new Polygon(200,200,50,50);

    //bottom row 1
    box1 = new Box(500,325,40,40,0,randomColor[1]);
    box2 = new Box(550,325,40,40,0,randomColor[2]);
    box3 = new Box(600,325,40,40,0,randomColor[3]);
    box4 = new Box(650,325,40,40,0,randomColor[4]);
    box5 = new Box(700,325,40,40,0,randomColor[5]);

    //bottom but 1 row 1
    box6 = new Box(525,285,40,40,0,randomColor[6]);
    box7 = new Box(575,285,40,40,0,randomColor[7]);
    box8 = new Box(625,285,40,40,0,randomColor[8]);
    box9 = new Box(675,285,40,40,0,randomColor[9]);

    //middle row 1
    box10 = new Box(550,245,40,40,0,randomColor[10]);
    box11 = new Box(600,245,40,40,0,randomColor[11]);
    box12 = new Box(650,245,40,40,0,randomColor[12]);
    
    //top but 1 row 1
    box13 = new Box(575,205,40,40,0,randomColor[13]);
    box14 = new Box(625,205,40,40,0,randomColor[14]);

    //top row 1
    box15 = new Box(600,165,40,40,0,randomColor[15]);

    //bottom row 2
    box16 = new Box(1100,225,40,40,0,randomColor[16]);
    box17 = new Box(1150,225,40,40,0,randomColor[17]);
    box18 = new Box(1200,225,40,40,0,randomColor[18]);
    box19 = new Box(1250,225,40,40,0,randomColor[19]);
    box20 = new Box(1300,225,40,40,0,randomColor[20]);

    //bottom but 1 row 2
    box21 = new Box(1125,185,40,40,0,randomColor[21]);
    box22 = new Box(1175,185,40,40,0,randomColor[22]);
    box23 = new Box(1225,185,40,40,0,randomColor[23]);
    box24 = new Box(1275,185,40,40,0,randomColor[24]);
    
    //middle row 2
    box25 = new Box(1150,145,40,40,0,randomColor[25]);
    box26 = new Box(1200,145,40,40,0,randomColor[26]);
    box27 = new Box(1250,145,40,40,0,randomColor[27]);
    
    //top but 1 row 2
    box28 = new Box(1175,105,40,40,0,randomColor[28]);
    box29 = new Box(1225,105,40,40,0,randomColor[29]);

    //top row 2
    box30 = new Box(1200,65,40,40,0,randomColor[30]);

    ground1 = new Ground(750,-5000,10000,10000);
    ground2 = new Ground(-5000,300,10000,1000);
    ground3 = new Ground(6500,300,10000,1000);
    ground4 = new Ground(750,5600,10000,10000);
    

    platform1 = new Ground(600,350,300,10);
    platform2 = new Ground(1200,250,300,10);
    platform3 = new Ground(100,450,100,10);

    sling1 = new Slingshot({x:100,y:350},poly.body);
}

function draw(){
    background("black");
    Engine.update(engine);

    if(state == "general"){
        stroke("red");
        strokeWeight(1);
        fill("red");
        textSize(70);
        text("TOWER SEIGE-1",450,70);

        textSize(40);
        fill("lime");
        stroke("lime");
        text("Your task is to make the two block pyramids fall using the little polygon kept on \nthe left side.",40,150);
        text("Drag your mouse and release it to shoot the polygon.",40,260);
        text("Press space and attempt at shooting again.",40,320);
        text("Enjoy and try to make the best use of flaws in the game. ;-)",40,380);

        textSize(50);
        fill("white");
        text("Press Enter key to play",420,500);

        stroke("blue");
        strokeWeight(4)
        line(430,80,1020,80);

        if(keyCode == 13){
            state = "play";
        }
    }

    if(state == "play"){
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        box16.display();
        box17.display();
        box18.display();
        box19.display();
        box20.display();
        box21.display();
        box22.display();
        box23.display();
        box24.display();
        box25.display();
        box26.display();
        box27.display();
        box28.display();
        box29.display();
        box30.display();

        ground1.display();
        ground2.display();
        ground3.display();
        ground4.display();

        platform1.display();
        platform2.display();
        platform3.display();

        poly.display();

        sling1.display();

        if(box1.body.position.y>425 &&
            box2.body.position.y>425 &&
            box3.body.position.y>425 &&
            box4.body.position.y>425 &&
            box5.body.position.y>425 &&
            box6.body.position.y>425 &&
            box7.body.position.y>425 &&
            box8.body.position.y>425 &&
            box9.body.position.y>425 &&
            box10.body.position.y>425 &&
            box11.body.position.y>425 &&
            box12.body.position.y>425 &&
            box13.body.position.y>425 &&
            box14.body.position.y>425 &&
            box15.body.position.y>425 &&
            box16.body.position.y>275 &&
            box17.body.position.y>275 &&
            box18.body.position.y>275 &&
            box19.body.position.y>275 &&
            box20.body.position.y>275 &&
            box21.body.position.y>275 &&
            box22.body.position.y>275 &&
            box23.body.position.y>275 &&
            box24.body.position.y>275 &&
            box25.body.position.y>275 &&
            box26.body.position.y>275 &&
            box27.body.position.y>275 &&
            box28.body.position.y>275 &&
            box29.body.position.y>275 &&
            box30.body.position.y>275){
             state = "win";
         }
    }

    if(state == "win"){
        background("black");
        textSize(100);
        text("YOU WIN!!!!!!!",400,300);
    }

}

function mouseDragged(){
    if(state == "play")
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    if(state == "play")
    sling1.fly();
}

function keyPressed(){
    if(keyCode == 32 && state == "play"){
        sling1.attach(poly.body);
    }
}