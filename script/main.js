$(function(){
    $(".faq dt").on("click", function(){
        //ここに処理を書くよ
        $(this).next().slideToggle(); //回答がスライドしてきて、表示非表示が切り替わる
        $(this).toggleClass("open")//オープンというクラスが付与される
    });
});

//javascript チェックボックスを入れた時にマウスクリックをシミュレーション

//マウスオーバーでmyFunctionを実行
function myFunction() {
    document.getElementById("myCheck").click();
}

