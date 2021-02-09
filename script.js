/* var trendingRequest = new XMLHttpRequest();
var api_K = "EhHGZ86K0tQzDH1jT4HiWqSD51GZfOEz";
var gifURL = '';
trendingRequest.open("GET",`https://api.giphy.com/v1/gifs/trending?api_key=${api_K}&limit=10`,true);
trendingRequest.send();
trendingRequest.onload = () => {

    var giphyResponse = JSON.parse(trendingRequest.response);
    
    for(element in giphyResponse.data ){
        gifURL = giphyResponse.data[element].fixed_height_downsampled.url;
        var imgTag = document.createElement('img');
        imgTag.setAttribute('class', 'img-fluid');
        imgTag.setAttribute('src',gifURL);
        imageBox.append(imgTag);
    };
    
}
*/
async function getRates(){
var ExchangeRatesResponse = await fetch('https://api.exchangeratesapi.io/latest');
ExchangeRatesResponse = await ExchangeRatesResponse.json();
return ExchangeRatesResponse;
}
var ExchangeRates;
var data = getRates().then(r => ExchangeRates=r);

//console.log(data);
// Link bootstrap
var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
document.head.append(css);


// Page container
var divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');

var divRow = document.createElement('div');
divRow.setAttribute('class', 'row');

var divInputContainer = document.createElement('div');
divInputContainer.setAttribute('class', 'offset-3 col-6');

///////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4');

var currencyLogo = document.createElement('img');
currencyLogo.setAttribute('height','50px');
currencyLogo.setAttribute('width','50px');

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'number');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('onKeyUp', 'conversion(\'INR\',event)');
inputElement.setAttribute('id', 'INR');
inputElement.setAttribute('placeholder', 'Indian Rupees');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

////////////////////////////////////////////////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4');

var currencyLogo = document.createElement('img');
currencyLogo.setAttribute('height','50px');
currencyLogo.setAttribute('width','50px');

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'number');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'USD');
inputElement.setAttribute('onKeyUp', 'conversion(\'USD\',event)');
inputElement.setAttribute('placeholder', 'US Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);
///////////////////////////////////////////////////////////////////////////////////////



var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4');

var currencyLogo = document.createElement('img');
currencyLogo.setAttribute('height','50px');
currencyLogo.setAttribute('width','50px');

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'number');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'AUD');
inputElement.setAttribute('onKeyUp', 'conversion(\'AUS\',event)');
inputElement.setAttribute('placeholder', 'Australian Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

///////////////////////////////////////////////////////////////////////////////////////


var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4');

var currencyLogo = document.createElement('img');
currencyLogo.setAttribute('height','50px');
currencyLogo.setAttribute('width','50px');

divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'number');
inputElement.setAttribute('class', 'form-control');
inputElement.setAttribute('id', 'CAD');
inputElement.setAttribute('onKeyUp', 'conversion(\'CAD\',event)');
inputElement.setAttribute('placeholder', 'Canadian Dollars');

divColInput.append(inputElement);
divInputBoxRow.append(divColImage,divColInput);

divInputContainer.append(divInputBoxRow);

///////////////////////////////////////////////////////////////////////////////////////



var divInputBoxRow = document.createElement('div');
divInputBoxRow.setAttribute('class', 'row');

var divColImage = document.createElement('div');
divColImage.setAttribute('class', 'col-4');

var currencyLogo = document.createElement('img');
currencyLogo.setAttribute('height','50px');
currencyLogo.setAttribute('width','50px');
divColImage.append(currencyLogo);

var divColInput = document.createElement('div');
divColInput.setAttribute('class', 'col-8');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'number');
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

function conversion(  currency, event){
 //var inputs = document.querySelectorAll('form-control'); 
 if(event.keyCode != 8){
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
