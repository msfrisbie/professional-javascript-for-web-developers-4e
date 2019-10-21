window.color = 'red';
let o = { 
  color: 'blue'
};
                   
let sayColor = () => console.log(this.color);
                   
sayColor();     // 'red'
                   
o.sayColor = sayColor;
o.sayColor();   // 'red'
