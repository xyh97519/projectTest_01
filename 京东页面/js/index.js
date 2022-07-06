window.addEventListener('load',function() {
    var left_btn = this.document.querySelector('.left_btn');
    var right_btn = this.document.querySelector('.right_btn');
    var mid = this.document.querySelector('.mid');
    var product = mid.querySelector('.product');
    var num = 0;
    var cicle = 0;
    product.addEventListener('mouseenter', function(){
        left_btn.style.display = 'block';
        right_btn.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    product.addEventListener('mouseleave',function(){
        left_btn.style.display = 'none';
        right_btn.style.display = 'none';
        timer = setInterval(function(){
            right_btn.click();
        },2000);
    })
    var ul = product.querySelector('ul');
    var ol = product.querySelector('ol')
    for (var i =0; i < ul.children.length; i++){
        var li = this.document.createElement('li');
        li.setAttribute('index',i);
        ol.append(li);
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length;i++){
                ol.children[i].className = '';
            }
            
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            cicle = index;
            animate(ul, - index * 590)
        })
        
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var flag = true;
    right_btn.addEventListener('click',function(){
        if(flag == true) {
            flag = false;
            if (num == ol.children.length) {
                ul.style.left = 0;
                num = 0;
                }
                num++;
                animate(ul,-num*590,function(){
                     flag = true;
                });
                cicle++;
                if(cicle == ol.children.length){
                    cicle = 0;
                }
                for (var i= 0; i < ol.children.length; i++){
                    ol.children[i].className = '';
                }
                ol.children[cicle].className = 'current';
        }
       
    })
    left_btn.addEventListener('click',function(){
       if (flag == true) {
        flag = false;
        if (num == 0) {
            num = ul.children.length-1;
            ul.style.left =-(ul.children.length-1) * 590 + 'px';
        
        }
        num--;
        animate(ul,-num*590,function(){
            flag = true;
        });
        cicle--;
        if(cicle < 0){
            cicle = ol.children.length-1;
        }
        for (var i= 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[cicle].className = 'current';
       }
    })
    var timer = setInterval(function(){
        right_btn.click();
    },2000);
})