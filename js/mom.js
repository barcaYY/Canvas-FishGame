var monObj=function(){
    this.bigEye=[];
    this.bigBody=[];
    this.bigTail=[];
    this.x;
    this.y;
    this.angle;
}

monObj.prototype.init=function(){
    for(var i=0;i<2;i++){
       this.bigEye[i]=new Image();
       this.bigEye[i].src=`src/bigEye${i}.png`;
    }
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src=`src/bigSwim${i}.png`;
    }
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src=`src/bigTail${i}.png`;
    }
    this.x=0;
    this.y=0;
    this.angle=0;
    console.log(this.bigTail);
    console.log(this.bigBody);
}

monObj.prototype.draw=function(){
    this.x=mx;
    this.y=my;
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigBody[0],0,0);
    ctx1.drawImage(this.bigTail[0],37,5);
    ctx1.drawImage(this.bigEye[0],15,21);

    ctx1.restore();
}
