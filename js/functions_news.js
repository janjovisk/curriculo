$(window).resize(function() {
  location.reload();
});


$(document).ready(function () {
  verificarResolucao();
})

$(window).on('resize', function (e) {
  verificarResolucao();
})

function moverPerguntas(origem, destino) {
  var perguntas = $(destino);
  $(origem).each(function (idx, el) {
      $(el).children().appendTo($(perguntas[idx]));
  });
}

function verificarResolucao() {
  if ($(window).width() < 991) {
      moverPerguntas("div[name='pag_grand']", "div[name='pag_mobile']")
  }
  else {
      moverPerguntas("div[name='pag_mobile']", "div[name='pag_grand']")
  }
}

$(document).ready(function () {


  $('#ui').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t02').fadeIn();
      $('#eui').stop().slideDown();
    }, 500);
  });

  $('#ux').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t03').fadeIn();
      $('#eux').stop().slideDown();
    }, 500);
  });

  $('#ux').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t03').fadeIn();
      $('#eux').stop().slideDown();
    }, 500);
  });

  $('#dg').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t04').fadeIn();
      $('#edg').stop().slideDown();
    }, 500);
  });

  $('#di').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t05').fadeIn();
      $('#edi').stop().slideDown();
    }, 500);
  });

  $('#il').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t06').fadeIn();
      $('#eil').stop().slideDown();
    }, 500);
  });

  $('#ap').click(function () {
    $('.siglas, #t01').css({"opacity": "0", "transition": "0.5s"});
    setTimeout(function() {
      $('#t07').fadeIn();
      $('#eap').stop().slideDown();
    }, 500);
  });
  


  $('.back_comp').click(function () {
    $('.expand_comp').stop().slideUp();
    setTimeout(function() {
      $('#t02, #t03, #t04, #t05, #t06, #t07').hide();
    }, 400);
    setTimeout(function() {
      $('.siglas, #t01').css({"opacity": "1", "transition": "0.5s"});
    }, 500);
  });

  

  $('#tempo2').hide();

  $('#xp1').change(function () {
    $('#tempo2').stop().fadeOut();
    setTimeout(function() {$('#tempo1').stop().fadeIn();}, 400);
  });

  $('#xp2').change(function () {
    $('#tempo1').stop().fadeOut();
    setTimeout(function() {$('#tempo2').stop().fadeIn();}, 400);
  });

  $('#tempo1 .progress-bar').click(function () {
    $('#tempo1 .progress-bar').removeClass("ativo");
    $(this).addClass("ativo");
  });

  $('#tempo2 .progress-bar').click(function () {
    $('#tempo2 .progress-bar').removeClass("ativo");
    $(this).addClass("ativo");
  });

  $('#pbar1').click(function () {
    $('#tempo1 .profs').fadeOut();
    setTimeout(function() {$('#prof1').stop().fadeIn();}, 400);
    
  });

  $('#pbar2').click(function () {
    $('#tempo1 .profs').fadeOut();
    setTimeout(function() {$('#prof2').stop().fadeIn();}, 400);
  });

  $('#pbar3').click(function () {
    $('#tempo1 .profs').fadeOut();
    setTimeout(function() {$('#prof3').stop().fadeIn();}, 400);
    
  });

  $('#pbar4').click(function () {
    $('#tempo1 .profs').fadeOut();
    setTimeout(function() {$('#prof4').stop().fadeIn();}, 400);
  });

  $('#pbar5').click(function () {
    $('#tempo1 .profs').fadeOut();
    setTimeout(function() {$('#prof5').stop().fadeIn();}, 400);
  });


  $('#abar1').click(function () {
    $('#tempo2 .profs').fadeOut();
    setTimeout(function() {$('#acad1').stop().fadeIn();}, 400);
  });

  $('#abar2').click(function () {
    $('#tempo2 .profs').fadeOut();
    setTimeout(function() {$('#acad2').stop().fadeIn();}, 400);
  });

  $('#abar3').click(function () {
    $('#tempo2 .profs').fadeOut();
    setTimeout(function() {$('#acad3').stop().fadeIn();}, 400);
  });

  $('#abar4').click(function () {
    $('#tempo2 .profs').fadeOut();
    setTimeout(function() {$('#acad4').stop().fadeIn();}, 400);
  });

  $('#abar5').click(function () {
    $('#tempo2 .profs').fadeOut();
    setTimeout(function() {$('#acad5').stop().fadeIn();}, 400);
  });
  
});