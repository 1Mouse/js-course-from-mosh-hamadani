function playVideo(a,b){
    console.log(this);
}
playVideo(); //window

playVideo.call({name:"mo Salah"}); //object: {name:"mo Salah"}
playVideo.apply({name:"mo Salah"}); //object: {name:"mo Salah"}

// call, apply are the same except call takes after "object this"
// arguments as a rest operator
// but apply takes inputs as an array
playVideo.call({name:"mo Salah"},4,99); //object: {name:"mo Salah"}
playVideo.apply({name:"mo Salah"},[4,99]); //object: {name:"mo Salah"}

// bind just for the current call
playVideo.bind({name:"mo Salah"})(); //object: {name:"mo Salah"} and "()" to call the playVideo function
                                     // as unlike call and apply bind doesn't execute the function by default


console.log("---------------to store the binding----------");
playVideo(); //window


console.log("---------------calling the binded function----------");
// storing approach
const playVideoBinded=playVideo.bind({name:"mo Salah"});

playVideoBinded();