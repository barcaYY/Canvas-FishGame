var fruitObj=function(){
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];
    this.alive=[];//是否为显示状态true/false
    //食物速度/类型/海葵下标
    this.speed=[];
    this.fruitType=[];
    this.aneNo=[];
}
fruitObj.prototype.num=50;
fruitObj.prototype.init=function(){
    this.orange.src='src/fruit.png';
    this.blue.src='src/blue.png';
    for(var i=0;i<this.num;i++){
        this.alive[i]=false; 
        this.x[i]=0;
        this.y[i]=0;
        this.fruitType[i]='';
        this.l[i]=0;
        this.speed[i]=Math.random()*0.017+0.003;
    }
}

fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            if(this.fruitType[i]=='blue'){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            if(this.l[i]<=14){
                var no=this.aneNo[i];
                this.x[i]=ane.headx[no];
                this.y[i]=ane.heady[no];
                this.l[i]+=this.speed[i]*18;
                ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
            }else{
                this.y[i]-=this.speed[i]*60;
                ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
            }
            if(this.y[i]<10){this.alive[i]=false}
        }
    }
}

function fruitMonitor(){ //监听画布中显示食物数量是否不足15
    var sum=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            sum++
        }else if(sum<15){
            sendFruit();
            return; 
        }
    }
}

function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return;
        }
    }
}

fruitObj.prototype.born=function(i){
    this.l[i]=0;
    this.alive[i]=true;
    this.fruitType[i]=Math.random()<0.9?'blue':'orange';
    this.aneNo[i]=Math.floor(Math.random()*ane.num);
}




