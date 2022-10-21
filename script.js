function computerPlay()
{
    let computerChoice=Math.floor(Math.random()*3)+1;
    switch(computerChoice)
    {
        case 1:
                return "Rock";
                break;
        case 2:
                return "Paper"
                break;
        case 3: return "Scissors";
                break;
        
    }
}

function playRound(playerSelection,computerSelection=computerPlay())
{
    let playerChoice=playerSelection.toLowerCase();
    let computerChoice=computerSelection.toLowerCase();

    if(playerChoice =='paper' && computerChoice=='paper')
    {
        return 1;
    }
    else if( playerChoice =='scissors' && computerChoice=='paper')
    {
        return 2;
    }
    else if(playerChoice =='rock' && computerChoice=='scissors')
    {
        return 3;
    }
    else if(playerChoice==computerChoice)
    {
        return 4;
    }
    else{
        return `You Loose ! ${computerChoice} beats ${playerChoice}`;
    }

}


function game()
{
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<=4;i++)
    {
        let input=prompt("select one among rock,paper,scissor");
        let result=playRound(input);
        if(result==1)
        {
            console.log("You win ! Paper Beats Rock");
            playerScore++;
        }
        else if(result==2)
        {
            console.log("You Win ! Scissors Beats Rocks");
            playerScore++;
        }
        else if(result==3)
        {
            console.log("You Win! Rock Beats Scissors");
            playerScore++;
        }
        else if(result==4)
        {
            console.log("Its a tie");
        }
        else
        {
            
            computerScore++;
        }

    }
    if(playerScore>computerScore)
    {
        console.log(`Congrats , You are a Winner and the result is: ${playerScore} : ${computerScore}`);
    }
    else if(computerScore>playerScore)
    {
        
        console.log(` You are a Looser and the result is: ${playerScore} : ${computerScore}`)
    }
    else{
        console.log("its a tie")
    }
}
game();
