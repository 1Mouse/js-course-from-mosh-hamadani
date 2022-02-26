const circle={
  radius:1,
  location:{
      x:5,
      y:7
  },
    isVisible: true,
    draw:function (x=circle.location.x,y=circle.location.y) {
        console.log(`${x}, ${y}`);
    }
};
console.log(circle,'\n');
circle.draw();
console.log("--------------------------------------");
// objects are dynamic by nature
delete circle.radius;
console.log(circle);

console.log("--------------------------------------");
circle.radius=99;
console.log(circle);
