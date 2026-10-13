let even = 0;
let odd = 0;
for(let i=1; i<=50; i++){
    if(i%2==0){
    even=even+i;
}
else{
    odd=odd+i;
}
}
console.log("even number:"+even);
console.log("odd number:"+odd);