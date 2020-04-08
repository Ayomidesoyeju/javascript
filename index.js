var data=[
    {
        principal:2500,
        time:1.8
    },{
        principal:1000,
        time:5
    },{
        principal:3000 ,
        time: 1
    },{
        principal: 2000,
        time:3
    }
];

let interestData=[];

function interestCalculator( array){
    
    for(let i=0; i< array.length; ++i){
        let rate;
        let object={};
        if(array[i].principal >=2500 && (array[i].time > 1 && array[i].time < 3)){
            rate = 3;
        }else if(array[i].principal >=2500 && (array[i].time >= 3)){
            rate=4;
        }else if(array[i].principal <2500 || (array[i].time <= 1)){
            rate=2;
        }else{
            rate=1;
        }
        let interest = (array[i].principal * array[i].time * rate) /100;
        object.principal = array[i].principal;
        object.time = array[i].time;
        object.rate = rate;
        object.interest = interest;
        interestData.push(object);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);