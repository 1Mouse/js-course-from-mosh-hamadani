const video = {
    title: 'avengers end game',
    tags: ['action', 'adventure', 'thriller'],
    showTags() {
        // if we have a method that doesn't take a "this" as input
        // we can change this using this trick
        const self=this;
        this.tags.forEach(function (tag) {// this --> object video
            console.log(self.title, tag); //self --> object video
        })
    }
};

video.showTags();

