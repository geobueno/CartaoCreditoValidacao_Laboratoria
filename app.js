// Função para verificação de números de cartão de crédito inseridos pelo usuário através do algoritmo de Luhn.
function isValidCard(cardNumber) {
 
  // Condições para entrada de dados de maneira correta através do prompt. Verificação da existência de caracteres diferentes de números e de valor nulo.
  var cardNumber = prompt("Digite o número do cartão de crédito que deseja consultar");
  while (cardNumber.search(/[^0-9]/) !== -1 || cardNumber[0] === undefined || cardNumber.length<14 || cardNumber.length>16) {
    cardNumber = prompt("Valor incorreto. Digite somente os números do cartão de crédito que deseja consultar");
  }
  
  // Variável do tipo array que recebe os valores individuiais de cada caractere do número do cartão de crédito e a inversão da posição dos mesmos.
  var arrString = cardNumber.split('');
  arrString.reverse();

  // Variável do tipo array que receberá os valores individuiais de cada caractere do tipo string do número do cartão de crédito transformados em números.
  var arrNumber = [];

  // Função para transformar os caracteres do tipo string em números e armazenar na variável arrNumber.
  for (var i in arrString) {
	arrNumber.push(parseInt(arrString[i]));
  }

  // Função para processamento dos números nas posições pares da variável arrNumber através do algoritmo de Lunh.
  for (var i = 1; i < arrNumber.length; i += 2){
	if ((arrNumber[i] * 2) > 9) {
	  arrNumber[i] = (Math.trunc((arrNumber[i] * 2) / 10)) + ((arrNumber[i] * 2) % 10);
	} else {
	    arrNumber[i] = arrNumber[i] * 2;
	}
  }

  // Função para soma de todos os números da variável arrNumber pós processada.
  for (var i = 0, sum = 0; i < arrNumber.length; sum += arrNumber[i++]){}

  // Inserção do número do cartão de crédito no HTML.
  document.getElementById('cardNumber').innerHTML = cardNumber;

  // Condição final para validação do número de cartão de credito inserido pelo usuário.
  if (sum % 10 === 0) {
	return document.getElementById('validation').innerHTML = ' Válido';
  } else {
	  return document.getElementById('validation').innerHTML = ' Inválido';
  }
  
}

// Chamada da função isValidCard.
isValidCard('0');