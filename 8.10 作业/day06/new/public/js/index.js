
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
    li.className='task';
    $.ajax({
        type:"post",
        url:"http://localhost:3000/addTask",
        data:{
            name:input.value
        },
        success:(result)=>{
            li.innerHTML=input.value;
            list.appendChild(li);
            li.onclick=function(){
            this.classList.toggle('checked');   
            }
            input.value = "";
            var span = addClose();
            li.appendChild(span);
            console.log(span);
            clearTask();      
        },
        error:()=>{

        },
    })
    
}

input.onkeydown=function(e){
    if(e.keyCode==13){
        addTask()
    }
}
addCheck()

function addCheck(){
for(var i=0;i<task.length;i++){

    task[i].onclick = function(){
        // console.log(this.getAttribute('task'))
        // console.log(this.classList.contains('checked'));
        $.ajax({
            type:"post",
            url:"http://localhost:3000/checkTask",
            data:{
                name:this.getAttribute('task'),
                checked:!this.classList.contains('checked')
            },
            success:(result)=>{
                this.classList.toggle('checked')
            },
            error:()=>{

            },
        })

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

        close[i].onclick=function(){

            $.ajax({
            type:"post",
            url:"http://localhost:3000/clearTask",
            data:{
                ele:this.parentElement.getAttribute('task')
            },
            success:(result)=>{

                console.log(result.index);
                // task[result.index].remove();
                this.parentElement.remove()
                // console.log(task[result.flag])
            },
            error:(error)=>{
            console.log('error')
            }
            })
            
        }
    }
}