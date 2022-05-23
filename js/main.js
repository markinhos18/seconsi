// altera class do elemento clicado


var header = document.getElementById("menu-header");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//********************************************************* */



// Header fixo com mudança de aparencia quando da Scroll na pagina

window.onscroll = function() {myFunction()};

var headerFixed = document.querySelector("header");
var stickyFixed = headerFixed.offsetTop;

function myFunction() {
  if (window.pageYOffset > stickyFixed) {
    headerFixed.classList.add("sticky");
  } else {
    headerFixed.classList.remove("sticky");
  }
}

// ***************************************/

// mascara de CNPJ

document.getElementById('inputCNPJ').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
  });


/******************************** */


// Mascara de telefone

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  /***************************** */

   // Exemplo de JavaScript inicial para desativar o envio de formulários se houver campos inválidos
   (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            
            event.preventDefault()
            event.stopPropagation()

          } else {

            event.startPropagation()

          }

          // form.document.querySelector('.valid-feedback').style.display = "block";
          form.classList.add('was-validated')
        }, false)
      })
  })()



  $(function(){
    $('.send').submit(function(){
      $('.loading').html("<img src='./img/loading.gif'>");
      $.ajax({
        url: 'send-form.php',
        type: 'POST',
        data: $('.send').serialize(),
        success: function(data){
          $('.mostrar').html(data);
          $('.loading').hide();
          $('.send')[0].reset();
        }
      });
      return false;
    });
  }); 




  

  





