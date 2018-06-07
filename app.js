// Fun��o para verifica��o de n�meros de cart�o de cr�dito inseridos pelo usu�rio atrav�s do algoritmo de Luhn.
function isValidCard(cardNumber) {
 
  // Condi��es para entrada de dados de maneira correta atrav�s do prompt. Verifica��o da exist�ncia de caracteres diferentes de n�meros e de valor nulo.
  var cardNumber = prompt("Digite o n�mero do cart�o de cr�dito que deseja consultar");
  while (cardNumber.search(/[^0-9]/) !== -1 || cardNumber[0] === undefined || cardNumber.length<14 || cardNumber.length>16) {
    cardNumber = prompt("Valor incorreto. Digite somente os n�meros do cart�o de cr�dito que deseja consultar");
  }
  
  // Vari�vel do tipo array que recebe os valores individuiais de cada caractere do n�mero do cart�o de cr�dito e a invers�o da posi��o dos mesmos.
  var arrString = cardNumber.split('');
  arrString.reverse();

  // Vari�vel do tipo array que receber� os valores individuiais de cada caractere do tipo string do n�mero do cart�o de cr�dito transformados em n�meros.
  var arrNumber = [];

  // Fun��o para transformar os caracteres do tipo string em n�meros e armazenar na vari�vel arrNumber.
  for (var i in arrString) {
	arrNumber.push(parseInt(arrString[i]));
  }

  // Fun��o para processamento dos n�meros nas posi��es pares da vari�vel arrNumber atrav�s do algoritmo de Lunh.
  for (var i = 1; i < arrNumber.length; i += 2){
	if ((arrNumber[i] * 2) > 9) {
	  arrNumber[i] = (Math.trunc((arrNumber[i] * 2) / 10)) + ((arrNumber[i] * 2) % 10);
	} else {
	    arrNumber[i] = arrNumber[i] * 2;
	}
  }

  // Fun��o para soma de todos os n�meros da vari�vel arrNumber p�s processada.
  for (var i = 0, sum = 0; i < arrNumber.length; sum += arrNumber[i++]){}

  // Inser��o do n�mero do cart�o de cr�dito no HTML.
  document.getElementById('cardNumber').innerHTML = cardNumber;

  // Condi��o final para valida��o do n�mero de cart�o de credito inserido pelo usu�rio.
  if (sum % 10 === 0) {
	return document.getElementById('validation').innerHTML = ' V�lido';
  } else {
	  return document.getElementById('validation').innerHTML = ' Inv�lido';
  }
  
}

// Chamada da fun��o isValidCard.
isValidCard('0');