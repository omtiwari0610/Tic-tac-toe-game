state = "X";
move = new Audio("ting.mp3");
instruction = document.getElementsByTagName("span");
c = 0;


const changeTurn = ()=>{
    if(state == 'X'){
        return state = "O";
    }
    else{
        return state = 'X';
    }
}

const winner = () =>{
wins = [
    [0,1,2,35,-52,0],
    [3,4,5,35,-37,0],
    [6,7,8,35,-22,0],
    [0,3,6,25,-37,90],
    [1,4,7,35,-37,90],
    [2,5,8,45,-37,90],
    [0,4,8,35,-37,45],
    [2,4,6,30,-37,135]
];
wins.forEach(e =>{
    boxes = document.getElementsByClassName("box");
    if(boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText!=""){
        c=0;
        instruction[0].innerText = changeTurn()+" won!!!";
        (document.getElementsByClassName("i")[0]).style.visibility = "visible";  
        document.getElementsByClassName("line")[0].style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)` ;  
        document.getElementsByClassName("line")[0].style.width = "30vw";
    }   
})
}

Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.addEventListener('click',()=>{
        move.play();
        element.innerText = state;       
        state = changeTurn();
        instruction[0].innerText = "Turn for " + state;
        winner();
        c+=1;
        if(c === 9){
            instruction[0].innerText = "Match drawn";
        }
        
        

    })  
})

const reset1 = () =>{
    Array.from(document.getElementsByClassName("box")).forEach(e => {
        e.innerText = ""
        instruction[0].innerText = "Turn for X";
        (document.getElementsByClassName("i")[0]).style.visibility = "hidden";
        c=0;
        document.getElementsByClassName("line")[0].style.width = "0vw";
    })
    
}

    document.getElementById("reset").addEventListener('click',()=>{
        reset1();
    })

