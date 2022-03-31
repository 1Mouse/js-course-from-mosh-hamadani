function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    };
}

HtmlElement.prototype.focus = function () {
    console.log("focussed");
};

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function (item) {
        this.items.push(item);
    };
    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item),1);
    };
}

// wrong as it won't inherit the click method
HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);

// right as it will inherit the click method too
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor=HtmlSelectElement;

// another way to make constructors
// this is helpful to make constructors dynamically
// new HtmlSelectElement.prototype.constructor();



