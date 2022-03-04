const video = {
    title: 'avengers end game',
    tags: ['action', 'adventure', 'thriller'],
    showTags() {
        // if we have a method that doesn't take a "this" as input
        // arrow function inherit this
        const self = this;
        this.tags.forEach(tag => {
                console.log(this.title, tag);//this --> video
            }
        )
    }
};

video.showTags();

