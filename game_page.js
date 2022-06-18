player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_name + " : " + player1_score;
document.getElementById("player2_score").innerHTML = player2_name + " : " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send(){

    question_word = document.getElementById("word").value;
    word = question_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthBy2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthBy2);
    console.log(charAt2);
    
    lengthMin1 = word.length - 1;
    charAt3 = word.charAt(lengthMin1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question = "<h4 id = 'word_display'> Question : " + remove_charAt3 + "</h4>";
    inputBox = "<br>Answer : <input id = 'inputCheckbox'>";
    CheckButton = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question + inputBox + CheckButton;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("inputCheckbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word){

        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_name + " : " + player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_name + " : " + player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;  
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;  
    }

    document.getElementById("output").innerHTML = "";
}