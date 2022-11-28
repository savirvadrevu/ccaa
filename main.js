function addUser() 
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "game_page.html"   
}
function send()
{ 
    number1 = document.getElementById('number1');
    number2 = document.getElementById('number2');

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number= "<h4>" + question1 +"X" + question2

    input_box = "<br>Answer : <input-type='text' id='input_check_box'>" ;
    <br>
    </br>
    check_button ="<button class = 'btn-btn info'onclick ='check()'>Check</button>"
    row =question_number + input_box + check_button ; 

    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";


}