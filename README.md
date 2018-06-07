Programa de valida��o de cart�o de cr�dito atrav�s do algoritmo de Luhn.

In�cio

- � aberta uma p�gina HTML (index.html) e um prompt � inicializado pedindo que o usu�rio insira os n�meros do cart�o de cr�dito que deseja validar;

- No arquivo java script (app.js)  � chamada a fun��o para valida��o do n�mero (function isValidCard(cardNumber) {}) com par�metro inicial nulo (isValidCard('0')); 

- A fun��o atrav�s do prompt pede ao usu�rio que digite uma mensagem a ser codificada:

var cardNumber = prompt("Digite o n�mero do cart�o de cr�dito que deseja consultar");

- A mensagem deve conter apenas n�meros, n�o ser vazia e ter entre 14 e 16 n�meros. Enquanto a condi��o n�o for satisfeita o processo permanece em loop: 

while (cardNumber.search(/[^0-9]/) !== -1 || cardNumber[0] === undefined || cardNumber.length<14 || cardNumber.length>16) {
    cardNumber = prompt("Valor incorreto. Digite somente os n�meros do cart�o de cr�dito que deseja consultar");
  }.

Processamento de valida��o

- Quando a condi��o de entrada de mensagem � satisfeita s�o declaradas as vari�veis que ser�o utilizadas no processamento e algumas fun��es j� s�o aplicadas:

1- � criada uma vari�vel do tipo array que receber� os valores dos n�meros digitados divididos atrav�s da fun��o Array.prototype.split()   (var arrString = cardNumber.split('')) ;
2- O string contendo os valores divididos tem ordem dos valores invertidos atrav�s da fun��o Array.prototype.reverse ()  (arrString.reverse()); 
3- � criada uma vari�vel do tipo array que receber� os strings do array anterior transformados em n�meros (var arrNumber = []);

- O processo de valida��o  � executado da seguinte maneira:

1- Uma fun��o percorre cada um dos strings do arrString e o arrNumber recebe cada um desses valores convertidos para n�meros inteiros para c�lculo das equa��es de valida��o.
  for (var i in arrString) {
	arrNumber.push(parseInt(arrString[i]));};

2- Uma fun��o percorre as posi��es pares do array com os n�meros inteiros e sao testadas condi��es para os valores contidos nessas posi��es.
Se o n�mero estiver na posi��o par do array multiplicado por 2 for maior que 9 uma opera��o � executada, caso contrario outra operacao � executada e as
posicoes do array recebem os valores resultantes dessas opera�c�es:

for (var i = 1; i < arrNumber.length; i += 2){
if ((arrNumber[i] * 2) > 9) {
	  arrNumber[i] = (Math.trunc((arrNumber[i] * 2) / 10)) + ((arrNumber[i] * 2) % 10);
else {
	    arrNumber[i] = arrNumber[i] * 2;
	}
};

5- Finalizados esses passos � feita a soma de todos os n�meros do array resultante dos processos anteriores atrav�s do seguinte comando:
for (var i = 0, sum = 0; i < arrNumber.length; sum += arrNumber[i++]){};

6- � executado o processo de valida��o do n�mero de cart�o de cr�dito, se o modulo da soma dos n�meros do array processado por 10 for nulo o cart�o � valido, 
caso contrario inv�lido. As mensagens s�o retornadas para o usu�rio no HTML com essas informa��es:

document.getElementById('cardNumber').innerHTML = cardNumber;
if (sum % 10 === 0) {
	return document.getElementById('validation').innerHTML = ' V�lido';
  } else {
	  return document.getElementById('validation').innerHTML = ' Inv�lido';
  }


Fim do processo

