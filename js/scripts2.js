$("#formExample").change(function(){
    console.log("deu certo")
    var idade = $('#idade').val();
    var profissao = $('#profissao').val();
    if(idade > 18 && profissao != null){
    $('.btn').removeAttr('disabled');
    }else{
    $('.btn').attr('disabled');
    }
    });