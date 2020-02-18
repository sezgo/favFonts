
const sampleText = "Then came the night of the first falling star.";
const initialFontSize = "20px"
const fontTexts = document.getElementsByClassName('fontText');




function loadFonts(){
    var fonts = document.getElementsByClassName('fontName');
   
    for(var i=0; i<fonts.length; i++) {
        fontTexts[i].style.fontFamily = fonts[i].innerHTML;

    }

}

function updateFontCards(){

    var newText = document.getElementById('fontText').value;
    
    for(var i=0; i<fontTexts.length; i++) {
        if(newText.trim() == ""){
            fontTexts[i].innerHTML = sampleText;    
        }
        else fontTexts[i].innerHTML = newText;
    }
}

function updateFontSize() {
    var sizes = document.getElementById('fontSize');
    var selectedSize = sizes[sizes.selectedIndex].value;

    for(var i=0; i<fontTexts.length; i++) {
        fontTexts[i].style.fontSize = selectedSize;
    }
}

function reset() {
    var sizes = document.getElementById('fontSize');
    var view = document.getElementById('view');
    var fontCards = document.getElementsByClassName('font');
    for(var i=0; i<fontTexts.length; i++) {
        fontTexts[i].style.fontSize = initialFontSize;
        fontTexts[i].innerHTML = sampleText;
    }
    sizes.selectedIndex = 0;
    document.getElementById('fontSearch').value = "";
    document.getElementById('fontText').value = "";
    view.className = "fas fa-list"

    for(var i=0; i<fontCards.length; i++) {
        fontCards[i].style.width = "240px";
    }

    const themeLink = document.getElementById('themeLink');
    themeLink.href = 'whiteTheme.css';

}

function changeView() {
    var view = document.getElementById('view');
    var fontCards = document.getElementsByClassName('font');
    var newWidthValue;
    //if the view is list change it to grid and vice versa
    if(view.className == "fas fa-list"){
        view.className = "fas fa-border-all";
        newWidthValue = "100%";
    }
    else {
        newWidthValue = "240px";
        view.className = "fas fa-list"
    }

    for(var i=0; i<fontCards.length; i++) {
        fontCards[i].style.width = newWidthValue;
    }
    
}

function toggleTheme(button) {
    console.log(button.id);
    const themeLink = document.getElementById('themeLink');
    if(button.id == "blackTheme"){
        themeLink.href = 'blackTheme.css';
    }
    else{
        themeLink.href = 'whiteTheme.css';
    }
}