
var activeElement = function () {  

    getReset();
    activClass();

};

var activClass = function () {
    
    if (event.target.className == 'square'){

        event.target.classList.add ('square--red');
        
    }

};

var getReset = function () {

    var element = document.getElementsByClassName('square--red');

    for (var i = 0; i < element.length; i++) {

        element[i].classList.remove('square--red');

    }
}

addEventListener ('click', activeElement);