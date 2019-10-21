textbox.value = "Hello world!"
            
// select all text
textbox.setSelectionRange(0, textbox.value.length);  // "Hello world!"
            
// select first three characters
textbox.setSelectionRange(0, 3);   // "Hel"
            
// select characters 4 through 6
textbox.setSelectionRange(4, 7);  // "o w"
