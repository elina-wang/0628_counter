$(document).ready(function () {

    $(window).scroll(function () {

        // var 變數=資料
        var offset = $("#test").offset();        // 取得元素位移資料
        var top = offset.top;                   //上方
        var left = offset.left;                 //左方

        //console.log("元素的上方：" + top);

        var windowTop = $(window).scrollTop();

        //console.log("視窗的上方：" + windowTop);

        if( windowTop > top) {
            //console.log("開始動畫...")
            $("#test").animate({
            num : 100
            },{ duration:2500,step:(now) => {
                $("#test").text(now);
            }
    
            })
        }


    });




});