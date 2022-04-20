// legacy are AMD for modules in browsers
// and UMD for modules in the browser and in Node.JS

// modern approaches are CommonJS used in Node.JS and Es6 Modules used in browsers

const _privateProperty=new WeakMap();

class CommonJS{
    constructor(attribute) {
        _privateProperty.set(this,attribute);
    }
    fun(){
        console.log('do something fun');
    }
}

module.exports = CommonJS;