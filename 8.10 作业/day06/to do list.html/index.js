var input=document.querySelector('input');
var btn=document.querySelector('button');
var list=document.querySelector('.task-list');
var task=document.querySelectorAll('.task')
// var close=document.querySelectorAll('.close')

var close = document.getElementsByClassName("close");

init()
clearTask()
btn.onclick=addTask;
function addTask(){
    if(input.value==''){
        return
    }
    var li=document.createElement('li');
    li.innerHTML=input.value;
    li.className='task';
    list.appendChild(li);
    li.onclick=function(){
        this.classList.toggle('checked');
    }
    input.value = "";
    var span = addClose();
    li.appendChild(span);
    console.log(span);
    clearTask();
}

input.onkeydown=function(e){
    if(e.keyCode==13){
        addTask()
    }
}
addCheck()

function addCheck(){
for(var i=0;i<task.length;i++){
    // (function(i){
    //     task[i].onclick=function(){
    //         console.log(i)
    //         if(task[i].className=='task'){
    //             task[i].className='task checked'
    //         }else{
    //             task[i].className='task'
    //         }
    //     }
    //     })(i)
    // }    
// for (var i = 0; i < task.length; i++) {
    task[i].onclick = function(){

        this.classList.toggle('checked');
    }
}
}
function addClose(){
    var span=document.createElement('span');
    span.className='close';
    span.innerHTML='\u00D7'
    return span
}

function init(){
    for (var i = 0; i < task.length; i++) {
        var span = addClose()
        task[i].appendChild(span);
        
    }
    addCheck()
}
function clearTask(){
    for(var i=0;i<close.length;i++){
        
        // console.log(close.length)
        // (function(){
        //     close[i].onclick=function(){
        //         console.log(close.length)
        //         var parentEle = this.parentElement;
        //         parentEle.remove();
        //     }
        // })(i)
        close[i].onclick=function(){
            var parentEle = this.parentElement;
            parentEle.remove();
        }
    }
}