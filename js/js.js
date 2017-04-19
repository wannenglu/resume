var slide1 = new Swiper(".swiper-container",{
	pagination: ".swiper-pagination",
    paginationClickable: true,//能够点击分页点跳转
    direction: "vertical",//滑动方向，垂直。
	onInit: function(swiper){
    	//Swiper初始化了
    	//alert(swiper.activeIndex);提示Swiper的当前索引
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
});

































