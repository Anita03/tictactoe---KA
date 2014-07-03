/**
 * Created by anita_nautiyal on 7/2/14.
 */
if (document.all||document.getElementById){
    document.write('<style>.tictac{')
    document.write('width:50px;height:50px;')
    document.write('}</style>')
}

var sqr1
var sqr2
var sqr3
var sqr4
var sqr5
var sqr6
var sqr7
var sqr8
var sqr9
var sqr1T = 0
var sqr2T = 0
var sqr3T = 0
var sqr4T = 0
var sqr5T = 0
var sqr6T = 0
var sqr7T = 0
var sqr8T = 0
var sqr9T = 0
var moveCount = 0
var turn = 0
var mode = 1

function vari()
{
    sqr1 = document.tic.sqr1.value
    sqr2 = document.tic.sqr2.value
    sqr3 = document.tic.sqr3.value
    sqr4 = document.tic.sqr4.value
    sqr5 = document.tic.sqr5.value
    sqr6 = document.tic.sqr6.value
    sqr7 = document.tic.sqr7.value
    sqr8 = document.tic.sqr8.value
    sqr9 = document.tic.sqr9.value
}
function check()
{
    var anitaWin='<div style="color:#663300;"><center><h3>Anita Won</h3></center><img src="./images/awardKP.jpg" style="height:120px;width:120px;"></div>';
    if(sqr1 == " A " && sqr2 == " A " && sqr3 == " A ")
    {

        bootbox.alert(anitaWin);
        //alert("Ainee Win!")
        reset()
    }
    else if(sqr4 == " A " && sqr5 == " A " && sqr6 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr7 == " A " && sqr8 == " A " && sqr9 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr1 == " A " && sqr4 == " A " && sqr7 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr2 == " A " && sqr5 == " A " && sqr8 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr3 == " A " && sqr6 == " A " && sqr9 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else if(sqr3 == " A " && sqr5 == " A " && sqr7 == " A ")
    {
        bootbox.alert(anitaWin);
        reset()
    }
    else
    {
        winCheck()
        check2()
        drawCheck()
    }
}

function check2()
{
    vari()
    drawCheck()
    var KonradWin='<div style="color:#663300;"><center><h3>Konrad Won!!</h3></center><img src="./images/awardKP.jpg" style="height:170px;width:170px;"></div>';
    if(sqr1 == " K " && sqr2 == " K " && sqr3 == " K ")
    {

        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr4 == " K " && sqr5 == " K " && sqr6 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr7 == " K " && sqr8 == " K " && sqr9 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr1 == " K " && sqr4 == " K " && sqr7 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr2 == " K " && sqr5 == " K " && sqr8 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr3 == " K " && sqr6 == " K " && sqr9 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
    else if(sqr3 == " K " && sqr5 == " K " && sqr7 == " K ")
    {
        bootbox.alert(KonradWin);
        reset()
    }
}

function player1Check()
{
    if(sqr1 == " A " && sqr2 == " A " && sqr3 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr4 == " A " && sqr5 == " A " && sqr6 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr7 == " A " && sqr8 == " A " && sqr9 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr1 == " A " && sqr4 == " A " && sqr7 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr2 == " A " && sqr5 == " A " && sqr8 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr3 == " A " && sqr6 == " A " && sqr9 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else if(sqr3 == " A " && sqr5 == " A " && sqr7 == " A ")
    {
        alert("Player 1 wins!")
        reset()
    }
    else
    {
        player2Check()
        drawCheck()
    }
}

function player2Check()
{
    vari()
    drawCheck()
    if(sqr1 == " K " && sqr2 == " K " && sqr3 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr4 == " K " && sqr5 == " K " && sqr6 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr7 == " K " && sqr8 == " K " && sqr9 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr1 == " K " && sqr4 == " K " && sqr7 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr2 == " K " && sqr5 == " K " && sqr8 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr3 == " K " && sqr6 == " K " && sqr9 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
    else if(sqr3 == " K " && sqr5 == " K " && sqr7 == " K ")
    {
        alert("Player 2 wins!")
        reset()
    }
}

function drawCheck()
{
    vari()
    moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T
    if(moveCount == 9)
    {
        reset()
        var drawCheck='<div style="color:#663300;"><center><h3>Draw!!</h3></center><img src="./images/draw.png" style="height:170px;width:170px;"></div>';
        bootbox.alert(drawCheck);
    }
}

function winCheck()
{
    check2()
    if(sqr1 == " K " && sqr2 == " K " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr2 == " K " && sqr3 == " K " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr4 == " K " && sqr5 == " K " && sqr6T == 0 && turn == 1)
    {
        document.tic.sqr6.value = " K "
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr5 == " K " && sqr6 == " K " && sqr4T == 0 && turn == 1)
    {
        document.tic.sqr4.value = " K "
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr7 == " K " && sqr8 == " K " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr8 == " K " && sqr9 == " K " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr5 == " K " && sqr9 == " K " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr3 == " K " && sqr5 == " K " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr7 == " K " && sqr5 == " K " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr3 == " K " && sqr2T == 0 && turn == 1)
    {
        document.tic.sqr2.value = " K "
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr4 == " K " && sqr6 == " K " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr7 == " K " && sqr9 == " K " && sqr8T == 0 && turn == 1)
    {
        document.tic.sqr8.value = " K "
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr7 == " K " && sqr4T == 0 && turn == 1)
    {
        document.tic.sqr4.value = " K "
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr2 == " K " && sqr8 == " K " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == " K " && sqr9 == " K " && sqr6T == 0 && turn == 1)
    {
        document.tic.sqr6.value = " K "
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr5 == " K " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr4 == " K " && sqr7 == " K " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr5 == " K " && sqr8 == " K " && sqr2T == 0 && turn == 1)
    {
        document.tic.sqr2.value = " K "
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr6 == " K " && sqr9 == " K " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr4 == " K " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr2 == " K " && sqr5 == " K " && sqr8T == 0 && turn == 1)
    {
        document.tic.sqr8.value = " K "
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr3 == " K " && sqr6 == " K " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr1 == " K " && sqr9 == " K " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == " K " && sqr7 == " K " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else
    {
        computer()
    }
    check2()
}
function computer()
{
    check2()
    if(sqr1 == " A " && sqr2 == " A " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr2 == " A " && sqr3 == " A " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr4 == " A " && sqr5 == " A " && sqr6T == 0 && turn == 1)
    {
        document.tic.sqr6.value = " K "
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr5 == " A " && sqr6 == " A " && sqr4T == 0 && turn == 1)
    {
        document.tic.sqr4.value = " K "
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr7 == " A " && sqr8 == " A " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr8 == " A " && sqr9 == " A " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr5 == " A " && sqr9 == " A " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr3 == " A " && sqr5 == " A " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr7 == " A " && sqr5 == " A " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr3 == " A " && sqr2T == 0 && turn == 1)
    {
        document.tic.sqr2.value = " K "
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr4 == " A " && sqr6 == " A " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr7 == " A " && sqr9 == " A " && sqr8T == 0 && turn == 1)
    {
        document.tic.sqr8.value = " K "
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr7 == " A " && sqr4T == 0 && turn == 1)
    {
        document.tic.sqr4.value = " K "
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr2 == " A " && sqr8 == " A " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == " A " && sqr9 == " A " && sqr6T == 0 && turn == 1)
    {
        document.tic.sqr6.value = " K "
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr5 == " A " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr4 == " A " && sqr7 == " A " && sqr1T == 0 && turn == 1)
    {
        document.tic.sqr1.value = " K "
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr5 == " A " && sqr8 == " A " && sqr2T == 0 && turn == 1)
    {
        document.tic.sqr2.value = " K "
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr6 == " A " && sqr9 == " A " && sqr3T == 0 && turn == 1)
    {
        document.tic.sqr3.value = " K "
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr4 == " A " && sqr7T == 0 && turn == 1)
    {
        document.tic.sqr7.value = " K "
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr2 == " A " && sqr5 == " A " && sqr8T == 0 && turn == 1)
    {
        document.tic.sqr8.value = " K "
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr3 == " A " && sqr6 == " A " && sqr9T == 0 && turn == 1)
    {
        document.tic.sqr9.value = " K "
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr1 == " A " && sqr9 == " A " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == " A " && sqr7 == " A " && sqr5T == 0 && turn == 1)
    {
        document.tic.sqr5.value = " K "
        sqr5T = 1;
        turn = 0;
    }
    else
    {
        AI()
    }
    check2()
}

function AI()
{
    vari()
    if(document.tic.sqr5.value == "     " && turn == 1)
    {
        document.tic.sqr5.value = " K "
        turn = 0
        sqr5T = 1
    }
    else if(document.tic.sqr1.value == "     " && turn == 1)
    {
        document.tic.sqr1.value = " K "
        turn = 0
        sqr1T = 1
    }
    else if(document.tic.sqr9.value == "     " && turn == 1)
    {
        document.tic.sqr9.value = " K "
        turn = 0
        sqr9T = 1
    }
    else if(document.tic.sqr6.value == "     " && turn == 1)
    {
        document.tic.sqr6.value = " K "
        turn = 0
        sqr6T = 1
    }
    else if(document.tic.sqr2.value == "     " && turn == 1)
    {
        document.tic.sqr2.value = " K "
        turn = 0
        sqr2T = 1
    }
    else if(document.tic.sqr8.value == "     " && turn == 1)
    {
        document.tic.sqr8.value = " K "
        turn = 0
        sqr8T = 1
    }
    else if(document.tic.sqr3.value == "     " && turn == 1)
    {
        document.tic.sqr3.value = " K "
        turn = 0
        sqr3T = 1
    }
    else if(document.tic.sqr7.value == "     " && turn == 1)
    {
        document.tic.sqr7.value = " K "
        turn = 0
        sqr7T = 1
    }
    else if(document.tic.sqr4.value == "     " && turn == 1)
    {
        document.tic.sqr4.value = " K "
        turn = 0
        sqr4T = 1
    }
    check2()
}

function reset()
{
    document.tic.sqr1.value = "     "
    document.tic.sqr2.value = "     "
    document.tic.sqr3.value = "     "
    document.tic.sqr4.value = "     "
    document.tic.sqr5.value = "     "
    document.tic.sqr6.value = "     "
    document.tic.sqr7.value = "     "
    document.tic.sqr8.value = "     "
    document.tic.sqr9.value = "     "
    sqr1T = 0
    sqr2T = 0
    sqr3T = 0
    sqr4T = 0
    sqr5T = 0
    sqr6T = 0
    sqr7T = 0
    sqr8T = 0
    sqr9T = 0
    vari()
    turn = 0
    moveCount = 0
}

function resetter()
{
    reset()
}