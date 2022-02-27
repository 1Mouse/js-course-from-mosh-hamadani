let address={
    street:"hello",
    showAddress(){
        for (const key of Object.keys(address)) {
            console.log(key,address[key]);
        }
    },
    block:3
}
address.showAddress();
