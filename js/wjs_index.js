// 轮播图
$(function(){
    // 获取当前所有的item
    var items = $(".carousel-inner .item");
    //监听屏幕的大小
    $(window).on("resize",function(){
        //获取当前屏幕的大小
        var width = $(window).width();
        //判断屏幕的大小
        if(width < 768){
            //动态创建代码
            $(items).each(function(index,element){
                var item = $(this);//记住$(this) 不加引号
                //当前自定义的属性 并且获取自定义属性中的值+ 
                var imgSrc = item.data("smallImage");
               var content = $("<a href='javascript:;'><img class='moimg'src='"+imgSrc+"'></a>");
                item.html(content); 
                
            })
            
        }else{
            $(items).each(function(index,element){
                var item = $(this);//记住$(this) 不加引号
                //当前自定义的属性 并且获取自定义属性中的值
                var imgSrc = item.data("largeImage");
                item.html($('<a href="javascript:;" class="nomoimg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
                console.log(item.html());
            //    var content = $("<a href='javascript:;' class='nomoimg'></a>").css("backgroundImage","url('"+imgSrc+"')");
            //    console.log(content);
            //     item.html(content); 
                
            })
        }
    }).trigger("resize");//自己调用一次

    // 实现移动端滑动的功能
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");


     //移动端的touch事件  包括touchstart、touchmove、touchend 事件
    //  targetTouches，changedTouches,touchend属性
    // clientX和pageX和screenX的区别
    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });
    // 激活工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 计算产品块导航面板的宽度
    var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find("li");
    var widthall = 0;
    lis.each(function(index,element){
    //    width() 内容的宽度
    //    innerWidth() 内容+padding
    //    outerHeight() 内容+padding+border
    //    outerHeight（） 内容+padding+border+margin
        widthall = widthall + $(element).innerWidth();
        
    });
    //将获取的总宽度设置给原来的ul
    ul.width(widthall) ;

    // 利用插件设置产品块的宽度滚动
    var myScroll = new IScroll('.warrap', {
        // 设置水平和垂直滑动
        scrollY: false,
        scrollX: true
    });
})
        
      
  