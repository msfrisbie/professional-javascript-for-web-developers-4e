textbox.value = "Hello world!";
            
var range = textbox.createTextRange();
            
// select all text
range.collapse(true);
range.moveStart("character", 0);
range.moveEnd("character", textbox.value.length);   // "Hello world!"
range.select();
            
// select first three characters
range.collapse(true);
range.moveStart("character", 0);
range.moveEnd("character", 3);
range.select();  // "Hel"
            
// select characters 4 through 6
range.collapse(true);
range.moveStart("character", 4);
range.moveEnd("character", 3);
range.select();  // "o w"
