function monFruitsCollision(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            var len=calLength2(fruit.x[i],fruit.y[i],mon.x,mon.y);
            if(len<900){fruit.alive[i]=false
                if(fruit.fruitType[i]=="blue"){
                    data.score+=100;
                }else{
                    data.score+=200;
                }
            }
        }
    }
}