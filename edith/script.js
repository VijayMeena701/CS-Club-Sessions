var elements = document.getElementsByClassName("hintbutton");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event){
        event.preventDefault();
    });
}

var button = document.getElementsByClassName("button");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(event){
        event.preventDefault();
    });
}


function hintClick(n){
    showHint(n);
}
function showHint(x){
    let hint = document.getElementsByClassName("hintbox"); // hint is an array of hint document classes
for(var i = 0; i< hint.length; i++){
    hint[i].className = hint[i].className.replace(" active", ""); // accessing className by index No of className from hint array
}
    hint[x].className += " active";         // applying setting for requied className;
}

var closebtn = document.getElementsByClassName("close-btn");
    for(var i = 0; i < closebtn.length; i++) {
        closebtn[i].addEventListener("click", function(){
            let hint = document.getElementsByClassName("hintbox");
            for(var i = 0; i< hint.length; i++){
                hint[i].className = hint[i].className.replace(" active", "");
            }
        })
    }

    var modal1 = document.getElementById('id01');
    var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
             modal2.style.display = "none";
            }
     }