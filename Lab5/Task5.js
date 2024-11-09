let isBold = false;
let isItalic = false;
let isUnderlined = false;
let upperCase = false;

let defaultButtonColor = document.getElementById('bold').style.backgroundColor;
let checkedButtonColor = "rgb(124, 254, 120)";

function changeFontWeight(){
    if(isBold){        
        document.getElementById('text').style.fontWeight = "normal";
        isBold = false;
        document.getElementById('bold').style.backgroundColor = defaultButtonColor;
    }
    else{        
        document.getElementById('text').style.fontWeight = "bold";
        isBold = true;
        document.getElementById('bold').style.backgroundColor = checkedButtonColor;
    }    
}
function makeItalic(){
    if(isItalic){        
        document.getElementById('text').style.fontStyle = "normal";
        isItalic = false;
        document.getElementById('italic').style.backgroundColor = defaultButtonColor;
    }
    else{        
        document.getElementById('text').style.fontStyle = "italic";
        isItalic = true;
        document.getElementById('italic').style.backgroundColor = checkedButtonColor;
    }    
}
function underline(){
    if(isUnderlined){        
        document.getElementById('text').style.textDecoration = "none";
        isUnderlined = false;
        document.getElementById('underline').style.backgroundColor = defaultButtonColor;
    }
    else{        
        document.getElementById('text').style.textDecoration = "underline";
        isUnderlined = true;
        document.getElementById('underline').style.backgroundColor = checkedButtonColor;
    }
}
function changeColor(){
    let colorPicker = (document.getElementById('color'));    
    document.getElementById('text').style.color = colorPicker.value;
}
function changeShift(){
    if(upperCase){        
        document.getElementById('text').style.textTransform = "lowercase";
        upperCase = false;
        document.getElementById('shift').style.backgroundColor = defaultButtonColor;
    }
    else{        
        document.getElementById('text').style.textTransform = "uppercase";
        upperCase = true;
        document.getElementById('shift').style.backgroundColor = checkedButtonColor;
    }
}