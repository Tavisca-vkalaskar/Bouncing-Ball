window.onload = function(){
    var buttonclick= document.getElementById('createBall');
    buttonclick.onclick=goBounce;
}


function classBall(x,y){
    this.x=x;
    this.y=y;
    this.dx= (Math.random() * 10);
    this.dy= (Math.random() * 10);
    this.div=undefined;

    this.init=function(){
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";  
    div.style.width = "50px";
    div.style.height = "50px";
      
    div.style.borderRadius ="50%";
    
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';  
    div.style.background = hue;
    document.body.appendChild(div);   
    this.div=div; 

    }

}


function goBounce(){
    var ballObject;
    var ballMoveObject;
    var max_x= window.innerWidth;
    var max_y=window.innerHeight;
    var x = (Math.random() * max_x);
    var y = (Math.random() * max_y);
    ballObject = new classBall(x,y);
    ballObject.init();
    ballMoveObject = new moveBall(x,y);

    window.setInterval(function() { ballMoveObject.move(ballObject) },20);
    
    
}

function moveBall()
{
    this.min_x = 0;
    this.max_x= window.innerWidth;
    this.min_y= 0;
    this.max_y=window.innerHeight;
    

    this.move=function(ball){

    ball.x = parseInt(ball.div.style.left);
    ball.y = parseInt(ball.div.style.top);    
    ball.x += ball.dx;
    ball.y += ball.dy;
    this.bounceBack(ball);
    ball.div.style.left = ball.x + "px";
    ball.div.style.top = ball.y + "px";
    
    }

    this.bounceBack=function(ball){

    this.max_x = window.innerWidth;
    this.max_y=window.innerHeight;
    if(ball.x > this.max_x || ball.x < this.min_x)
        ball.dx = -ball.dx;
    if(ball.y > this.max_y || ball.y < this.min_y)
        ball.dy = -ball.dy;
    }   
}