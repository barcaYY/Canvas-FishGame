var aneObj=function(){
    this.rootx=[]; //起点坐标x
    this.headx=[]; //终点坐标x
    this.heady=[]; //终点坐标y
    this.amp=[]; //摆动幅度
    this.alpha=0; //周期变化值-1 -0.99 0 0.99 1
}
aneObj.prototype.num=100;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+ Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canHeight-300+Math.random()*80;
        this.amp[i]=20+Math.random()*20;
    }
}
aneObj.prototype.draw=function(){
    ctx2.save();
    ctx2.strokeStyle='#3b154e';
    ctx2.lineWidth=20;
    ctx2.linecap='round';
    ctx2.globalAlpha=0.5;
    this.alpha+=0.001*36;
    var p=Math.sin(this.alpha);
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        this.headx[i]=this.rootx[i]+this.amp[i]*p;//重新计算终点x
        ctx2.moveTo(this.rootx[i],canHeight);//移动起点坐标
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);//绘制控制点和终点
        ctx2.stroke();
    }
    ctx2.restore();
}