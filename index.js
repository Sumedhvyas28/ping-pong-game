document.addEventListener('DOMContentLoaded',()=>{
    let table = document.getElementById('ping-pong-table')
    let ball = document.getElementById('ball') // target the ball element
    let paddle = document.getElementById('paddle'); //  target the paddle element

// starting point of ball wrt table
    let ballX= 50
    let ballY= 50


    // displacement 
    let dx=2 // displace by 2 for +x and -2 for -x
  
    let dy=2 // displace by 2 for +y and -2 for -y


    ball.style.left=`${ballX}px`
    ball.style.top=`${ballY}px`
    
    
    setInterval(function exec(){
        ballX+=dx;
        ballY+= dy
      
        
        ball.style.left=`${ballX}px`
        ball.style.top=`${ballY}px`

        // if(ballX >700 -20 || ballX <=0 ) dx*=-1;
        // if(ballY >400 -20 || ballY <=0 ) dy*=-1;


        if(ballX<paddle.offsetLeft+paddle.offsetWidth &&
            ballY > paddle.offsetTop && 
            ballY + ball.offsetHeight <paddle.offsetTop + paddle.offsetHeight
        ){
            dx*=-1;
        }

        if(ballX > table.offsetWidth-ball.offsetWidth || ballX <=0) dx*=-1;
        if(ballY > table.offsetHeight-ball.offsetHeight || ballY <=0) dy*=-1;

    },1)

    let paddleY=0;
    let dPy=5;


    document.addEventListener('keydown',(event)=>{
        event.preventDefault();
        if(event.keyCode==38 && paddleY >0){
            // up  arrow    
            paddleY+=(-1)*dPy;   
               
                

        }else if(event.keyCode==40 && paddleY < table.offsetHeight-paddle.offsetHeight-10){
            //down arrow
            paddleY+=dPy;
            
        }
        paddle.style.top=`${paddleY}px`
    })
})  
