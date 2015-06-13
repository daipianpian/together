$(function() {
  var len = $("#focus ul li").length; //获取焦点图中的图片总数
  var index = 0; //图片索引值默认为0
  var picTimer; //声明一个时间变量备用
  
  var btn = "<div class='btn'>"; //btn变量用来在焦点图中添加按钮，由于是纯数字无实际意义，在这里使用jquery插入而不是直接存在于网页内容中，这样也方便于一些网站内容管理系统的生成。
  for(i=0;i<len;i++) {
    btn += "<span>" + (i+1) + "</span>";
  }
  btn += "</div>";
  $("#focus").append(btn);

  $("#focus .btn span").click(function() { //按钮的鼠标单击事件
    index = $("#focus .btn span").index(this); //获取到被单击按钮的索引值（顺序）
    showPic(index); //通过showPic()函数显示该索引值的图片
  }).eq(0).click(); //初始化，默认显示索引值为0（第一张）的图片

  $("#focus").hover(function() {
    clearInterval(picTimer); //鼠标经过焦点图时停止自动播放
  },function() {
    picTimer = setInterval(function() {
      showPic(index); //鼠标滑出时根据当前索引值继续自动播放
      index++; //设置索引值为下一张图片
      if(index==len) {index=0;} //如果索引值等于图片总数，下一次显示第一张图片
    },3000); //3000定义执行以上语句的时间周期
  }).trigger("mouseleave"); //初始化，触发鼠标滑出事件，即自动播放

  function showPic(index) {
    var picHeight = $("#focus ul li img").height(); //变量picHeight获取到图片的高度，当然也可以使用固定值而省略此步
    $("#focus ul").stop(true,false).animate({top:-picHeight*index},300); //根据图片高度和当前图片的索引值，计算出ul向上的偏移量，再使用.animate()来移动它实现动画效果。结尾的“300”定义了移动速度
    $("#focus .btn span").removeClass("on").eq(index).addClass("on");//根据index变量（索引值）给相应的按钮添加selected的类，并移除其它按钮的selected类
  }
});
