

function generatePin(){
    
   
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+"";

    if(pinString.length==4)
    {
     document.getElementById('display-pin').value=pinString;
     
    }
    else{
      return  generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click',function(event)
{
    const number=event.target.innerText;
    const calcInput=document.getElementById('user-pin');
    if(isNaN(number))
    {
       if(number=='C')
       {
        calcInput.value=" ";
       }
    //    else if(number=="<")
    //    {
    //     calcInput--;
    //    }
    }
    else{
       
        const previousNum=calcInput.value;
        const newNumber=previousNum+number;
        calcInput.value=newNumber;
    }
    
})

