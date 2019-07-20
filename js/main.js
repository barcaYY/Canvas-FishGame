/*创建全局变量*/
var can1=null;
var can2=null;
var ctx1=null;
var ctx2=null;
var canWidth=0;
var canHeight=0;
var bgpic=null;
var ane=null;
var fruit=null;
var mon=null;
var data=null;
var mx=0;
var my=0;

/*创建入口函数game*/
function game(){
    init();
    gameloop();
}

/*创建游戏对象并调用初始化方法*/
function init(){
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    canWidth=can1.width;
    canHeight=can1.height;
    bgpic=new Image();
    bgpic.src="src/background.jpg";
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    mon=new monObj();
    mon.init();
    can1.addEventListener('mousemove',handleMove,true);
    data=new dataObj();

}

/*循环绘制游戏中角色*/
function gameloop(){
    requestAnimFrame(gameloop);
    fruitMonitor();
    drawbackground();
    ane.draw();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);//清画布
    mon.draw();
    data.draw();
    monFruitsCollision();
}

/*当body元素加载成功后调用game函数*/
document.body.onload=game;

function handleMove(e){
    mx=e.offsetX;
    my=e.offsetY;
}
