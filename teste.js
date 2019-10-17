jQuery(document).ready(function() {
	let dtoPessoaApontamentos = {
		Week: 0,
		IdPessoa: 1992,
		IdPeriodo: 28,
		geraMarcacoes: false
	};

	jQuery.ajax({
		url: 'https://www.dimepkairos.com.br/Dimep/PedidosJustificativas/BuscarPedidosApontamento', //'/Dimep/PedidosJustificativas/BuscarPedidosApontamento',
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'html',
        data: JSON.stringify(dtoPessoaApontamentos),
        success: function(data){
        	console.log(data)
        },
	   	headers: {
	        "Access-Control-Allow-Origin": "*"
	    },
        beforeSend: function(xhr, settings){
        	// xhr.setRequestHeader('Referer','Bearer');
        	// xhr.setRequestHeader('Host','www.dimepkairos.com.br');
        }
	  
	})
})
