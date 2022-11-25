function carregamento() {
    document.querySelector('#preloader');
    preloader.style.display = 'none';
    document.querySelector('#content');
    content.style.display= 'block';
}

function LerMais() {
    var texto = document.querySelector('.texto');
    texto.style.height = 'auto';
}

/*Efeito no texto*/
window.sr = ScrollReveal({reset: true});

sr.reveal('.animar-left',{
    origin: 'left',
    distance: '40px', 
    duration: 1500,
  });

  sr.reveal('.animar-right',{
    origin: 'right',
    distance: '40px', 
    duration: 1500,
  });

  sr.reveal('.sobre',{
    origin: 'right',
    distance: '180px', 
    duration: 2500,
  });

sr.reveal('.tecnologias-html', {
  origin: 'left',
  distance: '120px',
  duration: 2500,
});

sr.reveal('.tecnologias-javascript', {
    origin: 'right',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.tecnologias-python', {
    origin: 'left',
    distance: '120px',
    duration: 2500,
  });


  sr.reveal('.tecnologias-css', {
    origin: 'top',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.tecnologias-node', {
    origin: 'bottom',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.tecnologias-sql', {
    origin: 'rigth',
    distance: '120px',
    duration: 2500,
  });

 /* sr.reveal('.projetos',{
    rotate: {x: 500, y: 0, z:0},
    scale: 0.1,
    easing: 'ease-in',
    duration: 3500,
  }); */

  $(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(10).fadeOut('slow'); 
    $('body').delay(10).css({'overflow': 'visible'});
  })


  