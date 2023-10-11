//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

    



 

    //Validação com JSON
//Confere se login digitado é igual ao válido do JSON
function confere_login()
{
  var login_json = '{"login": "Usuario"}';
  var senha_json = '{"senha":"Abc$123"}';
  var v_login = JSON.parse(login_json);
  var v_senha = JSON.parse(senha_json);
  if(v_login.login == document.form.login.value && v_senha.senha == document.form.senha.value){
	  
    return true;
  }
  else
    {
    alert("login e senha nao confere!");
    return false;
    }
}




 /* 

function validar_tudo() {
    // se um deles for inválido, retorna false e o form não é submetido
    return confere_login();  
    
        
}

*/
//Ativa botao de assinar 

function activarcaja()  {
	
	document.getElementById('butassin').disabled=false
	
}

 

//verificar dados do form e gerar JSON

var validos = () => {
	if(document.getElementById("name").value=="") return false;
	if(document.getElementById("cpf").value=="") return false;
	if(document.getElementById("cel").value=="") return false;
	if(document.getElementById("nascimento").value=="") return false;
	if(document.getElementById("email").value=="") return false;
	if(document.getElementById("salario").value=="") return false;
	if(document.getElementById("sexo").value=="") return false;
	
	
}


var verify_form =() => {
	
	if (validos()==false)
	{
		alert("Dados incompletos");
		return;
	}
	
	alert("Sua assinatura foi feita com sucesso!");
	
	var obj_form = {
		name:"",
		cpf:"",
		cel:"",
		nascimento:"",
		email:"",
		salario:"",
		sexo:""
		
		
	}
	



var campo_nome = document.getElementById("name");
	if (campo_nome.value =="")
	return null;
	obj_form.name = campo_nome.value;
	
	var campo_cpf = document.getElementById("cpf");
	obj_form.cpf = campo_cpf.value;
	
	
	var campo_cel = document.getElementById("cel");
	obj_form.cel = campo_cel.value;
	
	var campo_nascimento = document.getElementById("nascimento");
	obj_form.nascimento = campo_nascimento.value;
	
	var campo_email = document.getElementById("email");
	obj_form.email = campo_email.value;
	
	var campo_salario = document.getElementById("salario");
	obj_form.salario = campo_salario.value;	
	
	var campo_sexo = document.getElementById("sexo");
	obj_form.sexo = campo_sexo.value;	
	
	
	
	
	 
	var json = JSON.stringify(obj_form);
	
	document.write("<h1> Dados em JSON</h1>");
	document.write(json);
	
	return json;
	
	}