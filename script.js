let userScore=0;//to track the user score
let compscore=0;//to track the computer score.
//to select the choice means which one we select.
const choices=document.querySelectorAll(".choice");
let message=document.querySelector("#msg");
let userScorePara=document.querySelector("#user");
let compScorePara=document.querySelector("#computer");

const genComchoice=()=>{
    const option=["rock","paper","scissors"];
    const randomnum=Math.floor(Math.random()*3);
    return option[randomnum];
}
const drawgame=()=>{
    console.log("game is draw!!");
    message.innerText="game is draw!!,Play Again";
    message.style.backgroundColor="yellow";
    message.style.color="black";
    
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin==true){
        console.log("you win!!");
        userScore++;
        userScorePara.innerText=userScore;
        message.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
        message.style.color="black";
    }
    else{
        console.log("you lose!!");
        compscore++;
        compScorePara.innerText=compscore;
         message.innerText=`You lose! ${compchoice} beats Your ${userchoice}`;
         message.style.backgroundColor="red";
         message.style.color="black";
    }

}

const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //to generate computer choice..
    const compchoice=genComchoice();
    console.log("computer choice is = ",compchoice);
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            //computer choice kya ho shakti hai scissors,paper..
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;

        }
        showWinner(userwin,userchoice,compchoice);
    }

    
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        
    });

});