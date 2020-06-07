const board = document.getElementById("board");
const context = board.getContext("2d");



const user1 ={
    x: 0,
    y: board.height/2 -50,
    width: 10,
    height: 100,
    score: 0,
    color: 'white'
}


const user2 ={
    x: board.width -10,
    y: board.height/2 -50,
    width: 10,
    height: 100,
    score: 0,
    color: 'white'
}

const ball ={
    x: board.width/2,
    y: board.height/2,
    radius: 10,
    color: 'white',
}

const net={
    x: board.width/2 -1,
    y: 0,
    width:2,
    height:10,
    color: 'white'
}


function drawRect(x,y,width,height,color){
    context.fillStyle = color ;
    context.fillRect(x,y,width,height);
}

function drawCircle(x,y,radius,color){
    context.fillStyle = color,
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}

function drawScore(score,x,y,color){
    context.fillStyle = color;
    context.font = "75px fantasy"
    context.fillText(score,x,y)
}


function drawNet(){
    for(let i = 0; i<=board.height;i+=15){
        drawRect(net.x,net.y+i,net.width,net.height,net.color);
    }
}


function render(){
    drawRect(0,0,600,400,'black');
    drawRect(user1.x,user1.y,user1.width,user1.height,user1.color);
    drawRect(user2.x,user2.y,user2.width,user2.height,user2.color);
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
    drawNet();
    drawScore(user1.score,(board.width/2 -90),65,'white');
    drawScore(user2.score,(board.width/2 +50),65,'white');
}


function game(){
    update();
    render();
}


render()