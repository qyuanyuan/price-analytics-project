/**
 * Created by chenweixuan on 2019/1/11.
 */
$(function () {
    $(".data").scroll(function () {
        var he = $(this).scrollTop();
        if (he>37){
            $(".l-header").fadeOut("fast")
        }else {
            $(".l-header").fadeIn()
        }
    });
    $(".menuList span").click(function () {
        var url=$(this).html();
        console.log(url);
        if(url=="价格计算"||url=="数据仓库"||url=="销售管理"||url=="数据引擎"||url=="引擎仓库"){
            window.location.href= "kone_"+url+".html"
        }
    })
})