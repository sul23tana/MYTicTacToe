
// start TIC TAC TOE
$(document).ready(function () {
  let flag = true;
  var random1 = Math.floor(Math.random() * 9) +1;
  console.log(random1)

  $(".startBtn").mouseover(function(){
    $(".startBtn").css("background-color",  "lightgray"  );
    });
    $(".startBtn").mouseout(function(){
    $(".startBtn").css("background-color", "#bada55");
    });

  $(".ticTacToeGrid").hide();

  // function to show the TIC TAC TOE Grid
  function showGrid() {
    $(".ticTacToeGrid").show(
      {
        center: '1000px',
        top: "0px",
        opacity: '0.5',
        height: '150px',
        width: '150px',
      }
    );
    $(".mainBox").animate({
      height: 'toggle'
    });
  }

  $(".ticTacToeGrid").hide();

  // function to start game
  $(".startBtn").click(function () {
    var radioValue = $("input[type='radio']:checked").val();
    var move = 1;
    var play = true;
    var tempArray = [];  // array for result
    var tempArrayO = [];

  // start option two players
    if (radioValue == "twoPlayer") {
      showGrid();
      $(".box").click(function () {
        if ($(this).text() == "" && play) {
          if ((move % 2) == 1) {
             $(this).append("X");
             $(this).css({
               'color': '#8fb809',
               'font-weight': 'bold',
               'font-size':'50px'});
          } else {
            $(this).append("O");
            $(this).css({
              'color': 'black',
              'font-weight': 'bold',
              'font-size':'50px'});
          }
          move++;

  // show Winner
          if (winFunction() != -1 && winFunction() != "") {
            if (winFunction() == "X") {
               winX();
               flag = false;
            } else if (winFunction() == "O") {
              winO();
            };
            if ((winFunction() == "tie")) {
             noWin();
            }
            play = false;
          }
        }
      });
    }

  // start option one player
    else if (radioValue == "onePlayer") {
      showGrid();

      $(".box").click(function() {
        if ($(this).text() == "" && play) {
          $(this).append("X");
          $(this).css({
            'color': '#8fb809',
            'font-weight': 'bold',
            'font-size':'50px'});
          var userSelector = this;
          tempArray.push(userSelector.getAttribute("id"));


  // generate random number
          var random = Math.floor(Math.random() * 9) + 1;
          var cell_num = "cell_" + random;

  // random method
  if (tempArray.length<9){
          while (tempArray.includes(cell_num)) {
            console.log(cell_num);
  // if the number include in the array
            random = Math.floor(Math.random() * 9) +1;
            cell_num = "cell_" + random;
          }
          tempArray.push(cell_num);
          console.log(tempArray);
          cell_num = "#" + cell_num;
          $(cell_num).append("O");
          $(cell_num).css({
            'color': 'black',
            'font-weight': 'bold',
            'font-size':'50px'});}
          // $(this).css("color", "#8fb809");
          console.log(move);
          move++;

  // show Winner
          if (winFunction() != -1 && winFunction() != "") {
            if (winFunction() == "X") {
               flag = true;
               winX();
            } else if (winFunction() == "O") {
              winO();
            }
            if ((winFunction() == "tie")) {
             noWin();
            }
            play = false;
          }
        }
      });

    }
    else {
      swal("please select option", "", "error");
    }
  });


 function winFunction() {
    var cell_1 = $("#cell_1").text();
    var cell_2 = $("#cell_2").text();
    var cell_3 = $("#cell_3").text();
    var cell_4 = $("#cell_4").text();
    var cell_5 = $("#cell_5").text();
    var cell_6 = $("#cell_6").text();
    var cell_7 = $("#cell_7").text();
    var cell_8 = $("#cell_8").text();
    var cell_9 = $("#cell_9").text();

    // check Win in the Rows
    if ((cell_1 != "") && (cell_1 == cell_2) && (cell_2 == cell_3)) {
      if (cell_3 == "X"){
      $("#cell_1").css({
        'color':'#e40303',
        'font-size':'45px'});
      $("#cell_2").css({
        'color':'#e40303',
        'font-size':'45px'});
      $("#cell_3").css({
        'color':'#e40303',
        'font-size':'45px'});}
        else if (cell_3 == "O"){
          $("#cell_1").css({
            'color':'#f0843c',
            'font-size':'45px'});
          $("#cell_2").css({
            'color':'#f0843c',
            'font-size':'45px'});
          $("#cell_3").css({
            'color':'#f0843c',
            'font-size':'45px'});
        }
      return cell_3;
    } else

       if ((cell_4 != "") && (cell_4 == cell_5) && (cell_5 == cell_6)) {
        if (cell_6 == "X"){
          $("#cell_4").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_5").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_6").css({
            'color':'#e40303',
            'font-size':'45px'});}
            else if (cell_6 == "O"){
         $("#cell_4").css({
          'color':'#f0843c',
          'font-size':'45px'});
         $("#cell_5").css({
          'color':'#f0843c',
          'font-size':'45px'});
         $("#cell_6").css({
          'color':'#f0843c',
          'font-size':'45px'});
         }
         return cell_6;
       }
// this one
    if ((cell_7 != "") && (cell_7 == cell_8) && (cell_8 == cell_9)) {
      if (cell_9 == "X"){
        $("#cell_7").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_8").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_9").css({
          'color':'#e40303',
          'font-size':'45px'});}
          else if (cell_9 == "O"){
      $("#cell_7").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_8").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_9").css({
        'color':'#f0843c',
        'font-size':'45px'});
      }

        console.log("cell_9")
      return cell_9;
    } else

    // check Win in the Columns
    if ((cell_1 != "") && (cell_1 == cell_4) && (cell_4 == cell_7)) {
      if (cell_7 == "X"){
        $("#cell_1").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_4").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_7").css({
          'color':'#e40303',
          'font-size':'45px'});}
          else if (cell_7 == "O"){
      $("#cell_1").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_4").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_7").css({
        'color':'#f0843c',
        'font-size':'45px'});
      }
      return cell_7;
    }

       if ((cell_2 != "") && (cell_2 == cell_5) && (cell_5 == cell_8)) {
        if (cell_8 == "X"){
          $("#cell_2").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_5").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_8").css({
            'color':'#e40303',
            'font-size':'45px'});}
            else if (cell_8 == "O"){
         $("#cell_2").css({
          'color':'#f0843c',
          'font-size':'45px'});
         $("#cell_5").css({
          'color':'#f0843c',
          'font-size':'45px'});
         $("#cell_8").css({
          'color':'#f0843c',
          'font-size':'45px'});
         }
         return cell_8;
       } else

    if ((cell_3 != "") && (cell_3 == cell_6) && (cell_6 == cell_9)) {
      if (cell_9 == "X"){
        $("#cell_3").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_6").css({
          'color':'#e40303',
          'font-size':'45px'});
        $("#cell_9").css({
          'color':'#e40303',
          'font-size':'45px'});}
          else if (cell_9 == "O"){
      $("#cell_3").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_6").css({
        'color':'#f0843c',
        'font-size':'45px'});
      $("#cell_9").css({
        'color':'#f0843c',
        'font-size':'45px'});
      }
      return cell_9;
    } else

   // check Diagonals
   if ((cell_1 != "") && (cell_1 == cell_5) && (cell_5 == cell_9)) {
    if (cell_9 == "X"){
      $("#cell_1").css({
        'color':'#e40303',
        'font-size':'45px'});
      $("#cell_5").css({
        'color':'#e40303',
        'font-size':'45px'});
      $("#cell_9").css({
        'color':'#e40303',
        'font-size':'45px'});}
        else if (cell_9 == "O"){
     $("#cell_1").css({
      'color':'#f0843c',
      'font-size':'45px'});
     $("#cell_5").css({
      'color':'#f0843c',
      'font-size':'45px'});
     $("#cell_9").css({
      'color':'#f0843c',
      'font-size':'45px'});
     }
     return cell_9;
   } else

      if ((cell_3 != "") && (cell_3 == cell_5) && (cell_5 == cell_7)) {
        if (cell_7 == "X"){
          $("#cell_3").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_5").css({
            'color':'#e40303',
            'font-size':'45px'});
          $("#cell_7").css({
            'color':'#e40303',
            'font-size':'45px'});}
            else if (cell_7 == "O"){
        $("#cell_3").css({
          'color':'#f0843c',
          'font-size':'45px'});
        $("#cell_5").css({
          'color':'#f0843c',
          'font-size':'45px'});
        $("#cell_7").css({
          'color':'#f0843c',
          'font-size':'45px'});
        }
        return cell_7;
   } else

    if ((cell_1 != "") && (cell_2 != "") && (cell_3 != "")
     && (cell_4 != "") && (cell_5 != "") && (cell_6 != "")
     && (cell_7 != "") && (cell_8 != "") &&(cell_9 != ""))
    {return ("tie");}
    // Non Winner
    return -1
  }

  function winX()
  {
  $(".mainGrid").prepend('<div class="winner"><span>Winner X</span></div>');
  $(".winner").append('<button id ="btn" onclick="location.reload()">Play Again</button>');
  $("#btn").mouseover(function(){
  console.log("HERE");
  $("#btn").css("background-color",  "lightgray"  );
  $("#btn").mouseout(function(){
  
	$("#btn").css("background-color","#bada55");
  })
  })
  $(".winner").css({'background-color': '#bad65e5'});
  $("#btn").css({
    'color': 'black',
    'background-color': '#ebf3d2',
    'font-size':'25px',
    'border-radius': '15px',
    'border':' 1px solid',
    'padding': '10px',
    'font-style':'bold',
    'width':'250px'
  });
}

function winO()
{
  $(".mainGrid").prepend('<div class="winner"><span>Winner O</span></div>');
  $(".winner").append('<button id="btn" onclick="location.reload()">Play Again</button>');
  $(".winner").css('background-color', '#bad65e5');
  $("#btn").css({
    'color': 'black',
    'background-color': '#ebf3d2',
    'font-size':'25px',
    'border-radius': '15px',
    'border':' 2px solid',
    'padding': '10px',
    'font-style':'bold',
    'width':'250px'
  });
  // swal("Winner!", "O", "success");
}

function noWin()
{
  
  $(".mainGrid").prepend('<div class="winner"><span style="color:blue">NO Winner</span></div>');
              $(".winner").append('<button id="btn" onclick="location.reload()">Play Again</button>');
              $(".winner").css('background-color', '#bad65e5');
              $("#btn").css({
                'color': 'black',
                'background-color': '#ebf3d2',
                'font-size':'25px',
                'border-radius': '15px',
                'border':' 2px solid',
                'padding': '10px',
                'font-style':'bold',
                'width':'250px'
              });
}
});
