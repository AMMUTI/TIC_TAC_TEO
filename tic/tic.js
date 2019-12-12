var turn= document.getElementById("turn");
var box=document.querySelectorAll("#all div");
xo=0;
var val=0;
//selecting the turn
for(i=0;i<box.length;i++)
{
box[i].onclick=function()
{
 if(this.innerHTML==""&&val==0)
 {
   if(xo==0)
   {
    this.innerHTML="X";
    turn.innerHTML="O Turn"
    xo=1;
    check();
  }
  else {
    this.innerHTML="O";
    turn.innerHTML="X Turn"
    xo=0;
    check();
  }
 }

};
}
//claiing the new game
function newgame()
{
  window.location = "home.html";
}
//calling the reset function
function reset()
{ val=0;
  $("#b1").removeClass('box');$("#b2").removeClass('box');$("#b3").removeClass('box');$("#b4").removeClass('box');$("#b5").removeClass('box');$("#b6").removeClass('box');
  $("#b7").removeClass('box');$("#b8").removeClass('box');$("#b9").removeClass('box');
  document.getElementById("mar").innerHTML="";
  for(i=0;i<box.length;i++)
  box[i].innerHTML="";
  if(xo==0)
  turn.innerHTML="X's Turn";
  else {
      turn.innerHTML="O's Turn";
  }
}

//function for checking the winner
function check()
{
  var b1 = document.getElementById("b1"), b2 = document.getElementById("b2"), b3 = document.getElementById("b3"),
      b4 = document.getElementById("b4"), b5=document.getElementById("b5"), b6=document.getElementById("b6"),
      b7 = document.getElementById("b7"), b8=document.getElementById("b8"), b9=document.getElementById("b9");

      if(b1.innerHTML!=""&& b1.innerHTML==b2.innerHTML&&b1.innerHTML==b3.innerHTML)
      {

      won(b1,b2,b3);
    }

      if(b1.innerHTML!=""&& b1.innerHTML==b4.innerHTML&&b1.innerHTML==b7.innerHTML)
      {
      won(b1,b4,b7);
      }

      if(b1.innerHTML!=""&& b1.innerHTML==b5.innerHTML&&b1.innerHTML==b9.innerHTML)
      {
      won(b1,b5,b9);
      }

      if(b2.innerHTML!=""&& b2.innerHTML==b5.innerHTML&&b2.innerHTML==b8.innerHTML)
      {
      won(b2,b5,b8);
      }

      if(b3.innerHTML!=""&& b3.innerHTML==b6.innerHTML&&b3.innerHTML==b9.innerHTML)
      {
      won(b3,b6,b9);
     }

      if(b3.innerHTML!=""&& b3.innerHTML==b5.innerHTML&&b3.innerHTML==b7.innerHTML)
      {
      won(b3,b5,b7);
      }

      if(b4.innerHTML!=""&& b4.innerHTML==b5.innerHTML&&b5.innerHTML==b6.innerHTML)
      {
      won(b4,b5,b6);
      }

      if(b7.innerHTML!=""&& b7.innerHTML==b8.innerHTML&&b8.innerHTML==b9.innerHTML)
      {
      won(b7,b8,b9);
      }
      if(b1.innerHTML!=""&&b2.innerHTML!=""&&b3.innerHTML!=""&&b4.innerHTML!=""&&b5.innerHTML!=""&&b6.innerHTML!=""&&b7.innerHTML!=""&&b8.innerHTML!=""&&b9.innerHTML!=""&&val==0)
      {
        tie();

      }

}
var countx=0;
var county=0;
var count=0;
var x=document.getElementById("x")
//funtion for dispaly the score
function won(b1,b2,b3)
{turn.innerHTML=b1.innerHTML+" won !!";
val=1;
// $(b1).removeClass('b');
//   $(b1).addClass('bc');
//   $(b2).removeClass('b');
//     $(b2).addClass('bc');
//     $(b3).removeClass('b');
//       $(b3).addClass('bc');

addclass();
 document.getElementById("mar").innerHTML="Game over!.....Game over!";
document.getElementById('gif').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"300px\">";
  if(b1.innerHTML=="X"){
    countx++;
  x.innerHTML=("x won : "+countx);}
  else {
    county++;
    document.getElementById("O").innerHTML=("O won : "+county);
  }
  }
  function tie()
  {addclass();
    turn.innerHTML=" DRAW !!";
    document.getElementById('gif').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"300px\">";
    document.getElementById("mar").innerHTML="Game over!.....Game over!";
    count++;
    document.getElementById("t").innerHTML=("Tie : "+count);
  }

function addclass(){
  $("#b1").addClass('box');$("#b2").addClass('box');$("#b3").addClass('box');
  $("#b4").addClass('box');$("#b5").addClass('box');$("#b6").addClass('box');
  $("#b7").addClass('box');$("#b8").addClass('box');$("#b9").addClass('box');
}



function home()
{
  window.location.href = "home.html";
}
