function funcHidden(click){
    if (click == 'a'){
        document.getElementsByClassName('content').removeAttribute("hidden");
    }

    if (click == 'b'){
        alert("b")
    }
}