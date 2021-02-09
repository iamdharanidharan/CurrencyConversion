
async function getRates(){
var ExchangeRatesResponse = await fetch('https://api.exchangeratesapi.io/latest');
ExchangeRatesResponse = await ExchangeRatesResponse.json();
return ExchangeRatesResponse;
}
var ExchangeRates;
var data = getRates().then(r => ExchangeRates=r);





// Page container
var divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');

var divRow = document.createElement('div');
divRow.setAttribute('class', 'row pt-3');

var divInputContainer = document.createElement('div');
divInputContainer.setAttribute('class', 'offset-3 col-6');

///////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row pt-3');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4 p-3');

var currencyLogo = document.createElement('h5');
currencyLogo.innerText = 'INR';

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8 p-3');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('onKeyUp', 'conversion(\'INR\',event)');
inputElement.setAttribute('id', 'INR');
inputElement.setAttribute('placeholder', 'Indian Rupees');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

////////////////////////////////////////////////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row pt-3');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4 p-3');

var currencyLogo = document.createElement('h5');
currencyLogo.innerText = 'USD';

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8 p-3');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'USD');
inputElement.setAttribute('onKeyUp', 'conversion(\'USD\',event)');
inputElement.setAttribute('placeholder', 'US Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);
///////////////////////////////////////////////////////////////////////////////////////



var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row pt-3');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4 p-3');

var currencyLogo = document.createElement('h5');
currencyLogo.innerText = 'AUD';

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8 p-3');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'AUD');
inputElement.setAttribute('onKeyUp', 'conversion(\'AUD\',event)');
inputElement.setAttribute('placeholder', 'Australian Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

///////////////////////////////////////////////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row pt-3');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4 p-3');

var currencyLogo = document.createElement('h5');
currencyLogo.innerText = 'CAD';
divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8 p-3');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'CAD');
inputElement.setAttribute('onKeyUp', 'conversion(\'CAD\',event)');
inputElement.setAttribute('placeholder', 'Canadian Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

///////////////////////////////////////////////////////////////////////////////////////



var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row pt-3');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4 p-3');

var currencyLogo = document.createElement('h5');
currencyLogo.innerText = 'GBP';
divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8 p-3');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'GBP');
inputElement.setAttribute('onKeyUp', 'conversion(\'GBP\',event)');
inputElement.setAttribute('placeholder', 'Great Britain Pound');
divColInput.append(inputElement);

divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

///////////////////////////////////////////////////////////////////////////////////////

divRow.append(divInputContainer);
divContainer.append(divRow);
document.body.append(divContainer);

var curArray = ['INR','USD','AUD','CAD','GBP'];

function conversion(currency, event){
 //var inputs = document.querySelectorAll('form-control'); 
 if(event.keyCode != 8 && (event.keyCode >46 && event.keyCode <58)){
 var inputValue = + document.getElementById(currency).value;
 var inputCurrencyRate =   ExchangeRates.rates[currency];
 for(x in curArray){
     //document.getElementById(currency);
     if(curArray[x] == currency) continue;
       var temp =   ExchangeRates.rates[curArray[x]];
       var convertedRate = inputValue* temp / inputCurrencyRate;
       if(convertedRate != 0)
     document.getElementById(curArray[x]).value = convertedRate;
     else
     document.getElementById(curArray[x]).value = '';
    }
 }
}
