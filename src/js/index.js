
$(document).ready(function(){
	$('select#fecha').on('change',function(){
    var valor = $(this).val();
    if(valor != 3){
    	$('#mensaje').html("Error el valor es diferente a marzo / 2006").css({"padding": "50px 30px 50px 80px", "background": "orange"})
    }else{
    	$('#mensaje').html("el valor es igual a  marzo / 2006").css({"padding": "50px 30px 50px 80px", "background": "green"})
    }
})
})