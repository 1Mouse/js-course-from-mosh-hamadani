const circle={
    radius:1,
    draw(){
       console.log("drawing") ;
    }
};

let another=Object.assign({color:"red",class:"nice"},circle);
console.log(another);

another={...circle};  // spread operator
console.log(another);


