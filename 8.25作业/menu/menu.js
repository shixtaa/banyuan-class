var minusEle=document.getElementsByClassName('minus')
var plusEle=document.getElementsByClassName('plus')
var numberEle=document.getElementsByClassName('number')
var price=document.querySelector('.total-money')
var money=document.getElementsByClassName('money')

let totalMoney=0
for(let i=0;i<plusEle.length;i++){
    plusEle[i].onclick=()=>{
        let a=numberEle[i].innerText
        numberEle[i].innerText=parseInt(a)+1;
        let b=money[i].innerText.substring(1)
        totalMoney=((a*100)/100+1) *b
        console.log(totalMoney)
    }
}

for(let i=0;i<minusEle.length;i++){
    minusEle[i].onclick=()=>{
        let a=numberEle[i].innerText
        if(a>0){
            numberEle[i].innerText=parseInt(a)-1;
        }
    }
}
function totalPrice(){

}
