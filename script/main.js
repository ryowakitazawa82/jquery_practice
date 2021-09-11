$(function(){
    $(".faq dt").on("click", function(){
        //ここに処理を書くよ
        $(this).next().slideToggle(); //回答がスライドしてきて、表示非表示が切り替わる
        $(this).toggleClass("open")//オープンというクラスが付与される
    });
});
