$(document).ready(
  function(){

    // Al click della freccia next > visualizzare l'immagine successiva
    // a quella corrente e il pallino blu di conseguenza
    $('.next i').click(imageNext);

    // Al click della freccia prev < visualizzare l'immagine precedente
    // a quella corrente e il pallino blu di conseguenza
    $('.prev i').click(imagePrev);

    // Al click di uno dei quattro pallini cambiare l'immagine
    // in base alla posizione
    $('.nav i').click(imageIndice)
  }
);

// ----------------------------- FUNZIONI --------------------------------------
function imageNext(){
  // Assegnamo l'immagine e l'indice corrente a delle variabili
  var immagineCorrente = $('.images .active');
  var indiceCorrente = $('.nav i.active');

  // Rimuob=viamo la classe 'active' alle variabili precedenti
  immagineCorrente.removeClass('active').hide();
  indiceCorrente.removeClass('active');

  // Se l'immagine corrente é l'ultima della lista
  if (immagineCorrente.hasClass('last')) {
    // Ritorniamo alla prima immagine/pallino
    $('.images .first').fadeIn(1500).addClass('active');
    $('.nav i.first').addClass('active');
  } else {
    // Altrimenti assegnamo all'immagine successiva la classe 'active'
    immagineCorrente.next('img').fadeIn(1500).addClass('active');
    indiceCorrente.next('i').addClass('active');
  }
}

function imagePrev(){
  // Assegnamo l'immagine e l'indice corrente a delle variabili
  var immagineCorrente = $('.images .active');
  var indiceCorrente = $('.nav i.active');

  // Rimuob=viamo la classe 'active' alle variabili precedenti
  immagineCorrente.removeClass('active').hide();
  indiceCorrente.removeClass('active');

  // Se l'immagine corrente é l'ultima della lista
  if (immagineCorrente.hasClass('first')) {
    // Ritorniamo alla prima immagine/pallino
    $('.images .last').fadeIn(1500).addClass('active');
    $('.nav i.last').addClass('active');
  } else {
    // Altrimenti assegnamo all'immagine successiva la classe 'active'
    immagineCorrente.prev('img').fadeIn(1500).addClass('active');
    indiceCorrente.prev('i').addClass('active');
  }
}

function imageIndice(){
  // Assegnamo alla variabile il pallino cliccato
  var indice = $(this);

  // Resettiamo l'immagine e gli indici selezionati in precedenza
  var immagine = $('.images .active').removeClass('active').hide();
  var indiceUno = $('.nav i.first').removeClass('active');
  var indiceDue = $('.nav i.second').removeClass('active');
  var indiceTre = $('.nav i.third').removeClass('active');
  var indiceQuattro = $('.nav i.last').removeClass('active');


  if(indice.hasClass('first')){
    // Se il pallino cliccato é il primo
    immagine = $('.images .first').fadeIn(1500).addClass('active');
    indice = $(this).addClass('active');
  }else if(indice.hasClass('second')){
    // Se il pallino cliccato é il secondo
    immagine = $('.images .second').fadeIn(1500).addClass('active');
    indice = $(this).addClass('active');
  }
  else if(indice.hasClass('third')){
    // Se il pallino cliccato é il terzo
    immagine = $('.images .third').fadeIn(1500).addClass('active');
    indice = $(this).addClass('active');
  }
  else if(indice.hasClass('last')){
    // Se il pallino cliccato é il quarto
    immagine = $('.images .last').fadeIn(1500).addClass('active');
    indice = $(this).addClass('active');
  }
}
