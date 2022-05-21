//Question bank
var questionBank= [
    {
        question :'No of keywords in C' ,
        option :['35','36','34','32'],
        answer : '32'
    },
    {
        question : ' Which character is used to represent when a tag is closed in HTML?',
        option : ['#', '@','!', '/'],
        answer : '/'
    },
    {
        question : 'Can negative values be allowed in padding property?',
        option : ['Yes','No','Depends on property','None of the above'],
        answer : 'No'
    },
    {
        question : 'Which of the following is the proper syntax for declaring macros in C?',
        option : ['#define long long ||','#define long long ||','#define ||','#define long long '],
        answer : '#define long long ||'
    },
    {
        question : 'If p is an integer pointer with a value 1000, then what will the value of p + 5 be?',
        option : ['1020','1005','1004','1010'],
        answer : '1020'
    },
    {
        question : 'Which data structure is used to handle recursion in C?',
        option : ['Stack','Queue','Deque','Trees'],
        answer : 'Stack'
    },
    {
        question : 'Which of the following operator(s) precedence order is correct (from highest to lowest)?',
        option : ['%,*,/,+,-','%,/,*,+,-','%,*,/,-,+','*,%,/,+,-'],
        answer : 'Underscore'
    },
    {
        question : 'A C variable name can start with a',
        option : ['Number','Plus Sign(+)','Underscore','Asterik(*)'],
        answer : '%,*,/,+,-'
    },
    {
        question :'Name the loop that executes at least once',
        option : ['For','if','do-while','while'],
        answer : 'do-while'
    },
    {
        question : 'Which of the data types has the size that is variable? ',
        option : ['struct','int','float','double'],
        answer : 'struct'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();