// Активный квадрат

// создать 10 квадратов зеленого цвета
// при клике по клику на любой из квадратов он выделяется красным цветом,
// если один уже выделен красным, а кликнули по-другому,
// то выделение с прошлого — снимается и ставится на тот, по котором кликнули


var redSquare;

squareList.onclick = function(event) {

    var target = event.target; 
  
    if (target.tagName != 'TD') return;
  
    activClass(target); 
  };

  function activClass(td) {

    if (redSquare) { 

        redSquare.classList.remove('square--red');
    }

    redSquare = td;
    redSquare.classList.add('square--red'); 
  };