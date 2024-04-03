let froyo = [];



froyo = prompt("please enter froyo flavors separated with commas NO SPACES");
let flavorarray = froyo.split(",");;
let i = 0;
let vanilla = 0;
let strawberry = 0;
let coffee = 0;
while(i < flavorarray.length){
    if(flavorarray[i]== 'vanilla'){
        vanilla++;
    }
    else if(flavorarray[i]=='strawberry'){
        strawberry++;
    }
    else if(flavorarray[i]=='coffee'){
        coffee++;
    }
    i++;
}
console.table(flavorarray);
console.log('you have ordered', vanilla, 'vanilla froyos', ',', strawberry , " strawberry froyos ", ', and' , coffee , ' coffee froyos');

