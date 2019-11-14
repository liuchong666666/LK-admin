// 顶部特效进度条
// NProgress.start();
// NProgress.done();

// console.log($('.navs ul').css({ 'backgroundColor': 'red' }))

// 侧边栏伸缩
var a = $(".navs ul").prev("a");
a.on("click", function() {
  // :hidden  //匹配所有隐藏的元素
  // :visible   //匹配所有显示的元素
  // a.next("ul:visible").hide(200);
  a.next().hide(200);
  $(this)
    .next()
    .slideToggle(300);
});
