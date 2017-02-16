// Grid JavaScript (requires jQuery)

$(document).ready(function(){
  var gridWidth=$(".grid").width();
  var cellsInRow=64;

  makeAGrid(cellsInRow);

});

function makeAGrid(cells) {
  var dta1='<div class="cellRow"></div>';
  var dta2='<div class="cell"></div>';

  for (var i=0; i<cells; i++) {
    $('.grid').append(dta1);
  }
  for (var j=0; j<cells; j++) {
    $('.grid').find('.cellRow').append(dta2);
  }

  switch (cells) {
    case 64: {
      $('.cell').css({'width': '9px', 'height': '9px'});
      $('.cellRow').css({'height': '9px'});
      break;
    }
    case 32: {
      $('.cell').css("width", "20px");
      $('.cell').css("height", "20px");
      $('.cellRow').css("height", "20px");
      break;
    }
    default: {
      $('.cell').css({'width': '40px', 'height': '40px'});
    }
  }


};
