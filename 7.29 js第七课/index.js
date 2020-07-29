var container=document.querySelector('.container')
var banner=document.querySelector('.banner')
var banner_li=document.getElementsByClassName('banner_li')
var banner_img=document.querySelector('.banner-img')
var arrows=document.getElementsByClassName('arrows')
var prev=document.querySelector('.prev')
var next=document.querySelector('.next')
var buttonContainer=document.querySelector('.button_container')
var circle=document.getElementsByClassName('button_container_circle')
var timer;

stopAnimation()
startAnimation()
controlMouse()

container.style.width=banner_img.offsetWidth+'px';
container.style.height=banner_img.offsetHeight+'px';


banner.style.width=banner_img.offsetWidth*banner_li.length+'px';
banner.style.height=banner_img.offsetHeight+'px';
banner.style.left=-banner_img.offsetWidth+'px';

for (var i=0;i<arrows.length;i++){
    arrows[i].style.top=parseInt(banner_img.offsetHeight-arrows[i].offsetHeight)/2+'px'
}

buttonContainer.style.top = banner_img.offsetHeight - 40 + "px";
buttonContainer.style.left = (banner_img.offsetWidth- buttonContainer.offsetWidth) / 2 + 'px'; 

var index=1;
// prev.onclick=function(){
//     index--;
//     animation()
// }
prev.onclick = function prevC(){
    index--;
    animation();       
    prev.onclick = null;
    clearTimeout(b);
    var b= setTimeout(function(){
        prev.onclick=prevC;
    },300);   
}
// next.onclick=function(){
//     index++;
//     animation();

// }

next.onclick = function nextC(){
    index++;
    animation();       
    next.onclick = null;
    clearTimeout(a);
    var a= setTimeout(function(){
        next.onclick=nextC;
    },300);   
     
}
function animation(){
    
    banner.style.transition='0.3s';
    banner.style.left=-banner_img.offsetWidth*index+'px';
    if(index==0){
        index=banner_li.length-2;
        reload()
    }
    else if(index==banner_li.length-1){
        index=1;
        reload()
    }
    controlButton()
}

function reload(){
    setTimeout(function(){
        banner.style.transition='0.0s';
        banner.style.left=-banner_img.offsetWidth*index+'px';
        
    },300)
    // window.requestAnimationFrame(reload);
}

function controlButton(){
    var flag=index;
    for(var i=0;i<circle.length;i++){
        (function(i){
            if(flag==circle[i].getAttribute('index')){
                // console.log(circle[i].getAttribute('index'))
            circle[i].className='button_container_circle on';
            }else{
                circle[i].className='button_container_circle';
            }   
        })(i)   
    }
    
}

// circle.onclick=animation();
function buttonClick(){
    for (var i=0;i<circle.length;i++){
        (function(i){
            circle[i].onclick= function(){
                index=circle[i].getAttribute('index')
                animation()
             } 
        })(i)    
    }
}
function startAnimation(){
    timer=setInterval(() => {
        next.onclick()
    }, 2000);
}
function stopAnimation(){
    if(timer){
       clearInterval(timer)
    }  
}
function controlMouse(){
    container.onmouseout=function(){
        startAnimation()
    }
    container.onmouseover=function(){
        stopAnimation()
    }
}





