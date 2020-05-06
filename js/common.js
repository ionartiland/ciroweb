//for the Go to top button
var mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//for the contact form
$(document).ready(function () {
  //scripts go here
  $('#name').val('Please enter your full name');
  $('#email').val('john@example.com');
  $('#field-ec636cf874420f9').val('International format');
  $('#field-6e2531eba1fbc22').val('');
  $('input').focus(function () {
    $(this).select();
  });
});
