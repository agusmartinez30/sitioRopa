
(function(){
    $(document).ready(function(){
        $(".btn-menu").click(function(e){
            e.preventDefault();
            console.log('hola');
            // evt.preventDefault();
            var filtro = $(this).attr("data-filter");

            if(filtro == "todos"){
                $(".box-img").show(500);
                console.log('si es remera');
            }else{
                $(".box-img").not("."+filtro).hide(500);
                $(".box-img").filter("."+filtro).show(500);

            }            
        });

        $("a").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            
        });
    });
}())