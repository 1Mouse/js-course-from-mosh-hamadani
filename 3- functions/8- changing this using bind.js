const video = {
    title: 'avengers end game',
    tags: ['action', 'adventure', 'thriller'],
    showTags() {
        // if we have a method that doesn't take a "this" as input
        // we can change this bind
        const self = this;
        this.tags.forEach(function (tag) {// this --> object video
            console.log(this.tags, tag);
        }.bind(this));//this -> video as before we execute the callback global function "window"
                      // we bind it to the object of the method "showTags" scope "video"
    }
};

video.showTags();

