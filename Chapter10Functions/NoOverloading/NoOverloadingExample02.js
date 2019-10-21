let addSomeNumber = function(num) {
    return num + 100;
};
                   
addSomeNumber = function(num) {
    return num + 200;
};
                   
let result = addSomeNumber(100);   // 300
