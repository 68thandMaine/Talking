$(document).ready(function() {

  $("h1").siblings("p").click(function(){
    $(this).remove();
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hi there</li>");
    });

  $("button#feeling").click(function(){
    $("ul#user").prepend("<li>How are you?</li>");
    $("ul#webpage").prepend("<li>I'm sad</li><img src='img/sad.jpg'>");
  });

  $("button#copy").click(function() {
    $("ul#user").prepend("<li>I'm sorry. Why?</li>");
    $("ul#webpage").prepend("<li>I lost my walrus love</li>");
  });

  $("button#pic").click(function() {
    $("ul#user").prepend("<li>Who is that?</li>");
    $("ul#webpage").prepend("<li>Her name was Betty Sue and she was eaten by a bear <img src='img/walrus.jpg'></li>");
  });
});
