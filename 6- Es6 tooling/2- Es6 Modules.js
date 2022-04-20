const _privateProperty=new WeakMap();

export class Es6Modules{
    constructor(attribute) {
        _privateProperty.set(this,attribute);
    }
    fun(){
        console.log('do something fun');
    }
}
