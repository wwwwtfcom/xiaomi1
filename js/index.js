
window.onload=function(){
    let xxk=document.querySelectorAll('.xxk .jiadian_right');
    let xxx1=document.querySelectorAll('.right_title');
    let ban=document.querySelectorAll('.banner_img li');
    let num=0;
    let lunbo=document.querySelectorAll('.banner_button a');
    let box=document.querySelector('.banner');
    let left=document.querySelector('.banner_left');
    let right=document.querySelector('.banner_right');
    let ce=document.querySelectorAll('.cexxk li');
    let ce1=document.querySelectorAll('.banner_nav li');
    let boxe=document.querySelector('.apple');
    let nrLunbo=document.querySelectorAll('.apple li');
    let width=parseInt(getComputedStyle(boxe,null)['width']);
    let dian=document.querySelectorAll('.neirong_button li');
    let left1=document.querySelector('.n-d-l');
    let right1=document.querySelector('.n-d-r');
    let now=0;
    let next=0;
    xxx1.forEach(function(val,index){
        val.onmouseover=function(){
            xxx1.forEach(function(val,index){
                val.classList.remove('active');
            });
            val.classList.add('active');
            xxk.forEach(function(val,index){
                val.classList.remove('active');
            });
            xxk[index].classList.add('active')
        }
    });
    ce1.forEach(function(val,index){
        val.onmouseover=function(){
            ce1.forEach(function(val,index){
                val.classList.remove('active');
            })
            val.classList.add('active');
            ce.forEach(function(val,index){
                val.classList.remove('active');
            })
            ce[index].classList.add('active');
        }
        val.onmouseout=function(){
            ce.forEach(function(val,index){
                val.classList.remove('active');
            })
        }
    })
    function move(){
        num++;
        if(num>ban.length-1){
            num=0;
        }
        ban.forEach(function(val,index){
            val.className='';
            lunbo[index].classList.remove('active');
        });
        ban[num].className='active';
        lunbo[num].classList.add('active')
    };
    let t=setInterval(move,3000);
    box.onmouseover=function(){
        clearInterval(t);
    };
    box.onmouseout=function(){
        t=setInterval(move,3000);
    }
    right.onclick=function(){
        move();
    }
    left.onclick=function(){
        num--;
        if(num<0){
            num=ban.length-1;
        }
        ban.forEach(function (val,index) {
            val.classList.remove('active');
            lunbo[index].classList.remove('active');
        });
        ban[num].classList.add('active');
        lunbo[num].classList.add('active')
    };
    lunbo.forEach(function(val,index){
        val.onclick=function(){
            lunbo.forEach(function(val,index){
                val.classList.remove('active');
                ban[index].classList.remove('active');
            });
            val.classList.add('active');
            ban[index].classList.add('active');
        }
    })
    function movee(){
        next=now+1;
        if(next>nrLunbo.length-1){
            next=0;
        }
        nrLunbo[next].style.left=width+'px';
        animate(nrLunbo[now],{left:-width});
        dian[now].classList.remove('active');
        animate(nrLunbo[next],{left:0});
        dian[next].classList.add('active');
        now=next;
    }
    right1.onclick=function(){
        movee();
    }
    left1.onclick=function(){
        next=now-1;
        if(next<0){
            next=nrLunbo.length-1;
        }
        nrLunbo[next].style.left=-width+'px';
        animate(nrLunbo[now],{left:width});
        dian[now].classList.remove('active');
        animate(nrLunbo[next],{left:0});
        dian[next].classList.add('active');
        now=next;
    }
}
