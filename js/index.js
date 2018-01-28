window.onload=function(){
    let xxk=document.querySelectorAll('.xxk .jiadian_right');
    let xxx1=document.querySelectorAll('.right_title');
    let ban=document.querySelectorAll('.banner_img li');
    let num=0;
    let lunbo=document.querySelectorAll('banner_button a');
    let box=document.querySelector('.banner');
    let left=document.querySelector('.banner_left');
    let right=document.querySelector('.banner_right');
    let ce=document.querySelectorAll('.cexxk li');
    let ce1=document.querySelectorAll('.banner_nav li');
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
            console.log(1)
        }
    })
    function move(){
        num++;
        if(num>ban.length-1){
            num=0;
        }
        ban.forEach(function(val){
            val.className='';
        });
        ban[num].className='active';
    };
    let t=setInterval(move,1000);
    box.onmouseover=function(){
        clearInterval(t);
    };
    box.onmouseout=function(){
        t=setInterval(move,1000);
    }
    right.onclick=function(){
        move();
    }
    left.onclick=function(){
        num--;
        if(num<0){
            num=ban.length-1;
        }
        ban.forEach(function (val) {
            val.classList.remove('active');
        });
        ban[num].classList.add('active');
    }
}
