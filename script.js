
    var input = document.querySelector('textarea#campo');
    var input2 = document.querySelector('textarea#campo2');
    input.focus();

    
    function criptografia() {
        input.focus();
        var texto = input.value 
        if (texto.match(/^[a-z ]+$/g)) {
                
          
        const txt =  (texto.replace(/e/g , 'enter').replace(/i/g , 'imes').replace(/a/g , 'ai').replace(/o/g , 'ober').replace(/u/g , 'ufat'));

        document.getElementById('campo2').innerHTML = `${txt}`;

        document.getElementById('copy').innerHTML = '<button class="botao botao3" onclick="copy()">Copiar</button>';

       }  else {

        
        alert("Dados informados: possuem letras maisculas , caracteres especiais ou numeros não aceitos neste programa informe somente letras minusculas");
        alert("O programa esta sendo encerrado, execute novamente");

        document.location.reload(true);
    
    }}

    function decriptografia() {
        input.focus();
        var texto = input.value

        const txt =  (texto.replace(/enter/g , 'e').replace(/imes/g , 'i').replace(/ai/g , 'a').replace(/ober/g , 'o').replace(/ufat/g , 'u'))

        document.getElementById('campo2').innerHTML = `${txt}`;

        // exibir (strreplace + "  ===> Este é o resultado da decriptografia da palavara " + str) //

    }

    function copy() {
        document.querySelector('#campo2').select();
        document.execCommand('copy');
        alert('Copiado!')
    }

    var botao1 = document.querySelector('button.botao1');
    botao1.onclick = criptografia;

    var botao2 = document.querySelector('button.botao2');
    botao2.onclick = decriptografia;

    