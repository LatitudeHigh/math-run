var penguin;
var hitLine = [];
var SHRIMP_URL = "https://cdn3.iconfinder.com/data/icons/food-72/192/.svg-18-512.png";
var shrimp;
var gameStarted = false;

function start(){
    instructions();
    mouseClickMethod(gameBackground);
}

function addShrimp() {
    shrimp = new WebImage(SHRIMP_URL);
    shrimp.setSize(20, 20);
    shrimp.setPosition(325, 350);
    add(shrimp);
}

function gameBackground(){
    if(gameStarted) return;
    gameStarted = true;
    removeAll();
    background();
    //this variable puts the words start and finish on the screen
      var txt = new Text("End", "15pt Arial");
    txt.setPosition(338, 35);
    txt.setColor(Color.purple);
    add(txt);
     var txt = new Text("Start", "15pt Arial");
    txt.setPosition(13, 385);
    txt.setColor(Color.purple);
    add(txt);
    
   //these rectangles are the obstacles the penguin is not allowed to touch
    var rect = new Rectangle(300, 7);
    rect.setPosition(0, 350);
    rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(100, 300);
     rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(0, 250);
    rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(100, 200);
    rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(0, 150);
    rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(100, 100);
    rect.setColor(Color.black);
    add(rect);
    
    
     var rect = new Rectangle(300, 7);
    rect.setPosition(0, 50);
    rect.setColor(Color.black);
    add(rect);
    
    
    
  //this creates the penguin  
    penguin = new WebImage("https://static.codehs.com/img/library/characters/penguin.png");
    penguin.setSize(25, 33);
    penguin.setPosition(20,361);
    add(penguin);
    keyDownMethod(keycontrol);

    addShrimp();
}

function detectWalls() {
     //covers 1st line from bottom. If it is touced penguin goes back to start
	if(penguin.getX() > 0 && penguin.getX() < 300 && penguin.getY() > 350 && penguin.getY() < 360){
    println("Cheater on 1st Line");
    penguin.setPosition(20, 360);
    
    hitLine.push(true);
	}
	//Covers second line from bottom. If touched, penguin goes back to start.
	if(penguin.getX() > 100 && penguin.getX() < getWidth() && penguin.getY() > 300 && penguin.getY() < 310){
    println("Cheated on 2nd Line");
    penguin.setPosition(20, 360);
    hitLine.push(true);
	}
	//Covers thrid line from bottom. If touched, penguin goes back to start. 
	if(penguin.getX() > 0 && penguin.getX() < 300 && penguin.getY() > 250 && penguin.getY() < 260 ){
    println("Cheated on the 3rd line");
    penguin.setPosition(20,360);
    hitLine.push(true);
	}
	//Covers fourth line from bottom. If touched, penguin goes back to start.
	if(penguin.getX() > 100 && penguin.getX() < getWidth() && penguin.getY() > 200 && penguin.getY() < 210){
    println("Cheated on the 4th line");
    penguin.setPosition(20,360);
    hitLine.push(true);
	}
	//Covers fifth line from bottom. If touched, penguin goes back to start.
	if(penguin.getX() > 0 && penguin.getX() < 300 && penguin.getY() > 150 && penguin.getY() < 160){
    println("Cheated on the 5th line");
    penguin.setPosition(20,360);
    hitLine.push(true);
	}
	//Covers sixth line from bottom. If touched, penguin goes back to start.
  if(penguin.getX() > 100 && penguin.getX() < getWidth() && penguin.getY() > 98 && penguin.getY() < 110){
	    println("Cheated on the 6th line");
	    penguin.setPosition(20,360);
	    hitLine.push(true);
	}
	//Covers seventh line from botton. If touched, penguin goes back to start.
    if(penguin.getX() > 0 && penguin.getX() < 300 && penguin.getY() > 50 && penguin.getY() < 60){
	    println("Cheated on the 7th line");
	    penguin.setPosition(20,360);
	    hitLine.push(true);
	}
	//Covers when penguin reaches the end. If touched, 
  if(penguin.getX() > 50 &&  penguin.getX() < getWidth() && penguin.getY() > 18 && penguin.getY() < 28){
    println("WINNER!!");
    println("Click screen to restart");
    penguin.setPosition(200,200);
    penguin.setSize(85,100);  
	}
	// Covers when the penguin goes outside of the game border. If touched, penguin goes back to start.
  if(penguin.getX() < 0 || penguin.getX() > getWidth() || penguin.getY() < 0 || penguin.getY() > getHeight()){
    penguin.setPosition(20,360);
    println("Went outside of game");
  }
}

function eatShrimp() {
    var obj = getElementAt(penguin.getX(), penguin.getY());
    if(obj != shrimp) {
        obj = getElementAt(penguin.getX() + penguin.getWidth(), penguin.getY());
    }
    if(obj != shrimp) {
        obj = getElementAt(penguin.getX() + penguin.getWidth(), penguin.getY() + penguin.getHeight());
    }
    if(obj != shrimp) {
        obj = getElementAt(penguin.getX(), penguin.getY() + penguin.getHeight());
    }
    if(obj == shrimp) {
        var dx = 300;
        var dy = -50;
        if(shrimp.getX() == 325) {
            dx = -300;
        }
        shrimp.move(dx, dy);
        doMath();
    }
}

function doMath() {
    var answer = Randomizer.nextInt(5, 12);
    var divisor = Randomizer.nextInt(5, 12);
    var dividend = answer * divisor;
    var response = parseInt(prompt("What is " + dividend + "/" + divisor + " ?"));
    while(response != answer) {
        response = parseInt(prompt("Try again: What is " + dividend + "/" + divisor + " ?"));
    }
}
  
 // this function makes the penguin move when the arrow keys are pressed  
function keycontrol(e){
    if (e.keyCode == Keyboard.LEFT){
        penguin.move (-5, 0);
    }
    if (e.keyCode == Keyboard.RIGHT){
        penguin.move (5, 0);
    }
    if (e.keyCode == Keyboard.UP){
        penguin.move (0, -5);
    }
    if (e.keyCode == Keyboard.DOWN){
        penguin.move (0, 5);
    }
    detectWalls();
    eatShrimp();
        
}   

function background() {
    var bg = new WebImage("https://cdna.artstation.com/p/assets/images/images/016/756/422/large/john-paul-07a.jpg?1553353246");
    bg.setSize(getWidth(), getHeight());
    add(bg);
}

//this function puts the game instructions on the screen
 
function instructions(){
    background();
    text();
}

function text(){
    var txt = new Text("The goal is to navigate the penguin through", "15pt Arial");
    txt.setPosition(7, 200);
    txt.setColor(Color.black);
    add(txt);
     var txt = new Text("the maze, without letting it touch the maze", "15pt Arial");
    txt.setPosition(7, 230);
    txt.setColor(Color.black);
    add(txt);
     var txt = new Text("walls. Click to Begin, then use the arrow", "15pt Arial");
    txt.setPosition(7, 260);
    txt.setColor(Color.black);
    add(txt);
     var txt = new Text("keys until you reach the white rectangle! ", "15pt Arial");
    txt.setPosition(7, 290);
    txt.setColor(Color.black);
    add(txt);
}
