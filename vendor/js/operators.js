var requestURL = '/vendor/js/operators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var operators = request.response;
    giveOp(operators);
    giveAdm(operators)
    giveBuild(operators)
}

var builder = document.getElementById('Rakentajat');
var owner = document.getElementById('Omistajat')
var admin = document.getElementById('Adminit');

function giveOp(jsonObj) {

    var owners = jsonObj['omistajat'];
    var admins = jsonObj['adminit'];
    var builders = jsonObj['rakentajat']

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';
        
    for (var i = 0; i < owners.length; i++) {

      var col = document.createElement('div');
      col.className = 'col-sm';
      col.style.marginBottom = '20px';

      var card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';
      card.style.border = '2px solid red';
      card.style.borderRadius = '0.80rem';
      card.style.backgroundColor = '#fff993';
      card.style.color = 'black';
      card.style.margin = 'auto';

      var cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.style.paddingTop = '15px';
      cardTitle.textContent = owners[i].nimi;

      var ypImg = document.createElement('div');
      ypImg.className = 'yp-img';

      var ypskin = document.createElement('img');
      ypskin.className = 'card-img-top';
      ypskin.style.width = '100px';
      ypskin.style.marginTop = '1.2em';
      ypskin.style.marginBottom = '1.2em';
      ypskin.style.height = '225px';
      ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + owners[i].uuid);

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      cardBody.style.backgroundColor = '#fff993';
      cardBody.style.color = 'black';
      cardBody.style.borderRadius = '0.80rem';

      var cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = owners[i].kuvaus;
  
      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(cardTitle);
      card.appendChild(ypImg);
      ypImg.appendChild(ypskin);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);

      owner.parentNode.insertBefore(row, owner.nextSibling)
    }
  }

  function giveAdm(jsonObj) {

    var admins = jsonObj['adminit'];

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';
        
    
    for (var i = 0; i < admins.length; i++) {

        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = admins[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + admins[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = admins[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
  
        admin.parentNode.insertBefore(row, admin.nextSibling)
      }
  }

  function giveBuild(jsonObj) {

    var builders = jsonObj['rakentajat']

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';

      for (var i = 0; i < builders.length; i++) {

        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = builders[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + builders[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = builders[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);

        builder.parentNode.insertBefore(row, builder.nextSibling);
      }

var requestURL = '/vendor/js/operators.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var operators = request.response;
    giveOp(operators);
    giveAdm(operators)
    giveBuild(operators)
}

var builder = document.getElementById('Rakentajat');
var owner = document.getElementById('Omistajat')
var admin = document.getElementById('Adminit');

function giveOp(jsonObj) {

    var owners = jsonObj['omistajat'];
    var admins = jsonObj['adminit'];
    var builders = jsonObj['rakentajat']

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';
        
    for (var i = 0; i < owners.length; i++) {

      var col = document.createElement('div');
      col.className = 'col-sm';
      col.style.marginBottom = '20px';

      var card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';
      card.style.border = '2px solid red';
      card.style.borderRadius = '0.80rem';
      card.style.backgroundColor = '#fff993';
      card.style.color = 'black';
      card.style.margin = 'auto';

      var cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.style.paddingTop = '15px';
      cardTitle.textContent = owners[i].nimi;

      var ypImg = document.createElement('div');
      ypImg.className = 'yp-img';

      var ypskin = document.createElement('img');
      ypskin.className = 'card-img-top';
      ypskin.style.width = '100px';
      ypskin.style.marginTop = '1.2em';
      ypskin.style.marginBottom = '1.2em';
      ypskin.style.height = '225px';
      ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + owners[i].uuid);

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      cardBody.style.backgroundColor = '#fff993';
      cardBody.style.color = 'black';
      cardBody.style.borderRadius = '0.80rem';

      var cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = owners[i].kuvaus;
  
      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(cardTitle);
      card.appendChild(ypImg);
      ypImg.appendChild(ypskin);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);

      owner.parentNode.insertBefore(row, owner.nextSibling)
    }
  }

  function giveAdm(jsonObj) {

    var admins = jsonObj['adminit'];

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';
        
    
    for (var i = 0; i < admins.length; i++) {

        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = admins[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + admins[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = admins[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
  
        admin.parentNode.insertBefore(row, admin.nextSibling)
      }
  }

  function giveBuild(jsonObj) {

    var builders = jsonObj['rakentajat']

    var row = document.createElement('div');
    row.className = 'row';
    row.style.textAlign = 'center';

      for (var i = 0; i < builders.length; i++) {

        var col = document.createElement('div');
        col.className = 'col-sm';
        col.style.marginBottom = '20px';
  
        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.border = '2px solid red';
        card.style.borderRadius = '0.80rem';
        card.style.backgroundColor = '#fff993';
        card.style.color = 'black';
        card.style.margin = 'auto';
  
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.style.paddingTop = '15px';
        cardTitle.textContent = builders[i].nimi;
  
        var ypImg = document.createElement('div');
        ypImg.className = 'yp-img';
  
        var ypskin = document.createElement('img');
        ypskin.className = 'card-img-top';
        ypskin.style.width = '100px';
        ypskin.style.marginTop = '1.2em';
        ypskin.style.marginBottom = '1.2em';
        ypskin.style.height = '225px';
        ypskin.setAttribute('src', 'https://crafatar.com/renders/body/' + builders[i].uuid);
  
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style.backgroundColor = '#fff993';
        cardBody.style.color = 'black';
        cardBody.style.borderRadius = '0.80rem';
  
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = builders[i].kuvaus;
    
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(ypImg);
        ypImg.appendChild(ypskin);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);

        builder.parentNode.insertBefore(row, builder.nextSibling);
      }
  }