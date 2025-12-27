let ball = document.getElementById('ball');
let container = document.getElementById('gameArea');

function shootBall() {
    let ballPositionX = Math.random() * (container.offsetWidth - 50);
    let ballPositionY = Math.random() * (container.offsetHeight - 50);

    //colocacion
    ball.style.left = ballPositionX + 'px';
    ball.style.bottom = ballPositionY + 'px';

    //tamanio de la porteria
    let goalWidthStart = container.offsetWidth * 0.20; 
    let goalWidthEnd = container.offsetWidth * 0.80;  
    let goalHeightBottom = container.offsetHeight * 0.5;                          
    let goalHeightTop = container.offsetHeight * 0.85; 

    if (
        //verificacion de la porteria
        ballPositionX >= goalWidthStart &&
        ballPositionX <= goalWidthEnd &&
        ballPositionY >= goalHeightBottom &&
        ballPositionY <= goalHeightTop
    ) {
        setTimeout(() => {
            alert('GOOOOOOOOOOOOOOL');
            //window.history.back();
        }, 250);
    } else {
        setTimeout(() => {
            alert('FUERAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        }, 250);
    }
}
