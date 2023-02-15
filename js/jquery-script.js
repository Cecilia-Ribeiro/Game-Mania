$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });
});

$(document).ready(function(){

    $("#botao-voltarlogin").click(function(){

        $("#login").slideToggle("slow");
        $("#section-cadastro").slideToggle("slow");
        $("#botao-voltarlogin").hide();

    });
});