var minusEle=document.getElementsByClassName('minus')
var plusEle=document.getElementsByClassName('plus')
var numberEle=document.getElementsByClassName('number')
var price=document.querySelector('.total-money')
var money=document.getElementsByClassName('money')

// let totalMoney=0
var sum=32.40
for(let i=0;i<plusEle.length;i++){
    plusEle[i].onclick=()=>{
        let a=numberEle[i].innerText
        numberEle[i].innerText=parseInt(a)+1;
        let b=money[i].innerText.substring(1)
        sum+=b*100/100
        price.innerText='$'+sum.toFixed(2)
    }  
}

for(let i=0;i<minusEle.length;i++){
    minusEle[i].onclick=()=>{
        let a=numberEle[i].innerText
        if(a>0){
            numberEle[i].innerText=parseInt(a)-1;
            let b=money[i].innerText.substring(1)
            sum-=b*100/100
            price.innerText='$'+sum.toFixed(2)
        }
    }
}


