const iMeetHer=()=>{
    return new Promise((resolve, reject)=>{
        const sheAgreed=String(window.prompt("Will you meet me in the moonlight? "))
        if(sheAgreed==="Yes" || sheAgreed==="y" || sheAgreed==="yes"){
            resolve("I will meet you in the moonlight!");
        } else{
            reject("I will sad!")
        }
    });
}

const onDate=async()=>{
    try{
        const result= await iMeetHer();
        console.log(`${result}`); 

    }catch(error){
        console.log(error);

    }finally{
        console.log("I will live happy!")
    }
    
}
onDate(); 