const video = {
    title: 'avengers end game',
    tags: ['action', 'adventure', 'thriller'],
    showTags(){
      this.tags.forEach(function(tag){// this --> object video
        console.log(this,tag); // this --> window object as this is a callback function "global"
      },this)// when this or video "object name" is added as another input to foreach then the
    }        // inner this will point to the object that to the object that called the function
};

video.showTags();
