let optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove,                    
                       selectbox.options[optionToMove.index+2]);
