let wroxWin = window.open("http://www.wrox.com/",
              "wroxWindow",
              "height=400,width=400,top=10,left=10,resizable=yes");
           
alert(wroxWin.opener === window);  // true
