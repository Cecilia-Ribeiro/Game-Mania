
//document.body.style.background = "#cccccccc";
//document.body.style.backgroundImage = "url('img/background.jpg')"

function myFunction(){
    var x = document.getElementById('contextText');
    if (x.style.display ==='none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }    
}

$('#formExample, #nome, #genero, #dataDeNascimento, #email, #senha').change(function(){
    var nome = $('#nome').val();
    var genero = $('#genero').val();
    var dataDeNascimento = ('#dataDeNascimento').val();
    var email = ('#email').val();
    var senha = ('#senha').val();
    if(nome != null && genero != null && dataDeNascimento != null && email != null && senha != null){
        $('.btn').removeAttr('disabled');
    }else{
        $('.btn').attr('disabled');
    }
});

$('#formLogin').on('submit', function(){
    $(this).find('input[required=true]').each(function(){
        if(!$(this).val()){
            alert('O campo ' + $(this).attr('id') + ' é obrigatório!');
        }
    });
});

function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


/*$('#formLogin').ready(function(){
    $("input").blur(function(){
        if($(this).val() == "")
            {
                $(this).css({"border-color": "#F00", "padding":"2px"});
            }
    });
})*/

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

