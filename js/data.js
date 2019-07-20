var dataObj=function(){
    this.score=0;
    this.double=1;
}
//dataObj.prototype.init=function(){}

dataObj.prototype.draw=function(){
    ctx1.save();
    ctx1.font="35px Boli";
    ctx1.fillStyle="#fff";
    ctx1.fillText("SCORE:"+this.score,550,350);
    ctx1.restore();
}

dataObj.prototype.addScore=function(){}