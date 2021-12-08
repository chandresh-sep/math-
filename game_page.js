player1_name =localStorage.getItem("player1_name");
player2_name =localStorage.getItem("player2_name");

player1_score =0;
player2_score =0;


document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    
    number1_input ="number1";
    number2_input ="number2";

    number1_px ="number1_p";
    number2_px ="number2_p";

    document.getElementById("number1").innerHTML =number1_input;
    document.getElementById("number2").innerHTML =number1_input;

    document.getElementById("number1_p").innerHTML =number1_p;
    document.getElementById("number2_p").innerHTML =number2_p;

    localStorage.setItem(number1_input, "number1");
    localStorage.setItem(number2_input, "number2");

    localStorage.push("number_1p", number1_px);
    localStorage.push("number_2p", number2_px);
    
    document.getElementById("number1_p").style.visibility = "none";
    document.getElementById("number2_p").style.visibility = "none";
    document.getElementById("answer_input").style.visibility = "none";
}