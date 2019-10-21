window.identity = 'The Window';
                   
let object = {
  identity: 'My Object',           
  getIdentityFunc() {
    let that = this;
    return function() {
      return that.identity;
    };
  }
};
                   
console.log(object.getIdentityFunc()());  // 'My Object'
