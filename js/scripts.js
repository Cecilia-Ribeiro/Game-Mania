alert ("Exemplo de comando alert");
console.log("Mensagem enviada pelo console");

function myFunction(){
    var x = document.getElementById('contextText');
    if (x.style.display ==='none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    
}

$("p").removeClass("texto").addClass("texto-paragrafo");


$('#formLogin').on('submit', function(){
    $(this).find('input[required=true]').each(function(){
        if(!$(this).val()){
            alert('O campo ' + $(this).attr('id') + ' é obrigatório!');
        }
    });
});

/*$('#formLogin').ready(function(){
    $("input").blur(function(){
        if($(this).val() == "")
            {
                $(this).css({"border-color": "#F00", "padding":"2px"});
            }
    });
})8/



/*$('#formLogin, #nome, #dataDeNascimento, #email, #senha'). change(function botao() {
    var nome = $('#nome').val();
    var dataDeNascimento = $('#dataDeNascimento').val();
    var email = $('#email').val();
    var senha = $('#senha').val();
    if(nome != null && dataDeNascimento != null && email != null && senha != null){
        $('.btn').removeAttr('disabled');
    } else {
        $('.btn').attr('disabled');
    } 
});*/

