$(document).ready(function () {

    $(window).scroll(function () {

        // var 變數=資料
        var offset = $("#test").offset();        // 取得元素位移資料
        var top = offset.top;                   //上方
        var left = offset.left;                 //左方

        //console.log("元素的上方：" + top);

        var windowTop = $(window).scrollTop();

        //console.log("視窗的上方：" + windowTop);

        // attr ("文字")
        var number = $("#test").attr("data-counter-number");
        var time = $("#test").attr("data-counter-time");
        var offset = $("#test").attr("data-counter-offset");

        // 測試動畫
        //console.log("數字:" + number);
        //console.log("時間:" + time);
        //console.log("位移:" + offset);


        if( windowTop > top - offset) {
            //console.log("開始動畫...")
            // duration 需要數字, parsetInt(字串),將字串轉為整數。
            $("#test").animate({
            num : number
            },{ duration: parseInt(time),step:(now) => {
                $("#test").text(Math.floor (now));
            }
    
            })
        }


    });




});