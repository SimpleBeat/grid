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
    $(this).css({'text-decoration': 'underline'});
    $('#randomColor').css({'text-decoration': 'none'});
    currentColorChoice = false;
  });

  $('#randomColor').on('click', function(){
    $(this).css({'text-decoration': 'underline'});
    $('#bw').css({'text-decoration': 'none'});
    currentColorChoice = true;
  });

  function makeAGrid() {
    var grid=$('.grid');

    grid.fadeOut('fast');

    $('#bw').css({'text-decoration': 'underline'});
    $('#randomColor').css({'text-decoration': 'none'});
    currentColorChoice=false;

    grid.find('div').remove();

    for (var i=0; i<gridSize*gridSize; i++) {
      grid.append('<div></div>');
    }
    grid = grid.find('div');
    grid.addClass("cell");

    switch(gridSize) {
      case 16: {
        grid.css({'width': '40px', 'height': '40px'});
        break;
      }
      case 64: {
        grid.css({'width': '10px', 'height': '10px'});
        break;
      }
      default: {
        grid.css({'width': '20px', 'height': '20px'});
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
