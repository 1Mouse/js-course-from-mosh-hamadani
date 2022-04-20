const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(item){
        _items.get(this).push(items);
    }

    pop(){
        const items=_items.get(this); // to make the code cleaner
                                      // items is a pointer to _items
                                      // any change happen in anyone of them
                                      // reflects in the other
        if (items.length===0)
            throw new Error ('Stack is Empty');
        return items.pop();
    }

    peek(){
        const items=_items.get(this);

        if (items.length===0)
            throw new Error ('Stack is Empty');
        return items[items.length-1];
    }

    get count(){
        return _items.get(this).length;
    }
}