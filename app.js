var a = window.document.getElementById('up')
var b = window.document.getElementById('polo')

var polo = 'novo_polo.png'
var bgpolo = 'bg_novo_polo.png'

var up = 'up.png'
var bgup = 'bg_up.png'



a.addEventListener('click', clicarA)
b.addEventListener('click', clicarB)

function clicarA() {
    a.style.color = '#FEC80E'
    b.style.color = 'white'
    window.document.getElementById('imgFundo').src = bgup
    window.document.getElementById('imgFrente').src = up
    window.document.getElementById('imgFrente').style.marginTop = '40px';

    window.document.getElementById('p1').innerHTML = '<STRONG>UP! MOVE<strong>'


    window.document.getElementById('p2').innerHTML = 'BONUS DE&nbsp  <STRONG> R$ 3.000,00<strong> + TAXA DE <STRONG>0%<STRONG>'



}

function clicarB() {
    b.style.color = '#FEC80E'
    a.style.color = 'white'
    
    window.document.getElementById('imgFundo').src = bgpolo
    window.document.getElementById('imgFrente').src = polo

    window.document.getElementById('p1').innerHTML = '<STRONG>POLO<strong> <BR> 1.0 MPI'


    window.document.getElementById('p2').innerHTML = 'A PARTIR DE&nbsp  <STRONG> R$ 49.990,00<strong> + TAXA DE <STRONG>0%<STRONG>'
}


var formDisplayed = true;
var originalHTML = document.getElementById("form-container").innerHTML;
var formContainer = document.getElementById("form-container");

function preenche() {
  var botao = document.getElementById("botao");
  if (formDisplayed) {
    if (formContainer.checkValidity()){
        botao.innerHTML = "Retornar";
        formContainer.innerHTML = '<img src="thumbup.png" alt="não foi fornecida a imagem então improvisei">';
        formDisplayed = false;
    }
    else{
        alert("Por favor, preencha todos os campos obrigatórios");
    }
  }
   else {
    botao.innerHTML = "GARANTA AGORA";
    formContainer.innerHTML = originalHTML;
    formDisplayed = true;

  }
}


/*function preenche(){
    window.document.getElementById('botao').innerHTML = 'RETORNAR'
    window.document.getElementById('txt_form').innerHTML = 'TUDO CERTO'
    window.document.getElementById('txt_form1').innerHTML = 'Dados enviados com sucesso!<br>Entraremos em contato para confirmar seu test drive'

    var formContainer = document.getElementById("form-container");
    formContainer.innerHTML = '<img src="thumbup.png" alt="Não foi enviado a imagem do pdf">';
    
}*/