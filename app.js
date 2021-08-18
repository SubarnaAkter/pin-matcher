

function generatePin(){
    
   
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+"";

    if(pinString.length==4)
    {
     document.getElementById('display-pin').value=pin;
  

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
        calcInput.value="";
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

function verifyPin()
{ 
    const pin=document.getElementById('display-pin').value;
    const userPin=document.getElementById('user-pin').value;
    const notifySuccess=document.getElementById('notify-success');
    const notifyFail=document.getElementById('notify-fail');
      if(pin == userPin)
      {
          
          notifySuccess.style.display='block';
          notifyFail.style.display='none';
      }
      else{
          notifySuccess.style.display='none';
          notifyFail.style.display='block';
         
      }
}