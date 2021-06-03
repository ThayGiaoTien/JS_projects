const guessNumber=()=>{
    return new Promise((resolve, reject) => {                                   //Promise have 2 method resolve and reject
        const userNumber=Number(window.prompt("Enter a number from 1 to 9:"));
        const randomNumber= Math.floor(Math.random()*9+1);
        if (isNaN(userNumber)){
            reject("Wrong input type!");
        } else{
            if(randomNumber===userNumber){
                resolve({
                    message: "Congratulation!",
                    points:2,
                    randomNumber:randomNumber,
                });
            } else if (randomNumber===userNumber+1||
                randomNumber===userNumber-1){
                    resolve({
                        message:"You guessed not bad!",
                        points:1,
                        randomNumber:randomNumber,

                    });
                }else{
                    resolve({ 
                        message:"You was unlucky! Try again! ",
                        points:0,
                        randomNumber:randomNumber,

                    });
                }
        }
    });
}

const continueGame=()=>{
    return new Promise((resolve)=>{
        if (window.confirm("Do you want to continue?")){
            resolve(true);
        }else{
            resolve(false);
        }
    });

}
const gamePlay= async()=>{
    try{       
        const result= await guessNumber(); //guessNumber() return a promise, we need to fetch result from it! 
        alert(`Dice:${result.randomNumber}, you got ${result.points} points!  ${result.message}`);
        const isContinuing =await continueGame();
        if(isContinuing){
            gamePlay();
        }else{
            alert("Game over!")
        }

    }
    catch(error){
        alert(error);
    }
}
const start= ()=>{
    gamePlay();
}
start();