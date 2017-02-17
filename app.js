// Grid JavaScript (requires jQuery)

$(document).ready(function(){

  var currentColorChoice = false;
  var colorTable = ['blue', 'yellow', 'red', 'orange', 'green', 'brown', 'silver'];
  var colorNow = 0;
  var gridSize = 32;

  makeAGrid();

  $('#smallGrid').on('click', function(){
    gridSize=16;
    makeAGrid();
  });
  $('#mediumGrid').on('click', function(){
    gridSize=32;
    makeAGrid();
  });
  $('#largeGrid').on('click', function(){
    gridSize=64;
    makeAGrid();
  });

  $('#bw').on('click', function(){
    currentColorChoice = false;
  });

  $('#randomColor').on('click', function(){
    currentColorChoice = true;
  });

  function makeAGrid() {
    $('.grid').fadeOut('fast');
    $('.grid').find('div').remove();

    for (var i=0; i<gridSize*gridSize; i++) {
      $('.grid').append('<div></div>');
    }
    $('.grid').find('div').addClass("cell");

    switch(gridSize) {
      case 16: {
        $('.grid').find('div').css({'width': '40px', 'height': '40px'});
        break;
      }
      case 64: {
        $('.grid').find('div').css({'width': '10px', 'height': '10px'});
        break;
      }
      default: {
        $('.grid').find('div').css({'width': '20px', 'height': '20px'});
        break;
      }
    }

    $(".cell").on('mouseenter', function(){
      if (currentColorChoice) {
        var cssColor = colorTable[colorNow];
        $(this).css("background-color", cssColor);
        colorNow++;
        if (colorNow === colorTable.length) {
          colorNow = 0;
        }
      } else {
        $(this).css("background-color", "black");
      }
    });

    $('.grid').fadeIn('fast');
  }

});
