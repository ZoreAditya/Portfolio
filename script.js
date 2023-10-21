$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  const pr1=document.getElementById("pr-1")
  const bt=pr1.addEventListener("click",()=>{
    window.open("https://github.com/ZoreAditya/Portfolio")
  })

  const pr2=document.getElementById("pr-2")
  const bt2=pr2.addEventListener("click",()=>{
    window.open("https://github.com/ZoreAditya/Desktop-Voice-Assistant")
  })

  // const pr3=document.getElementById("pr-3")
  // const bt3=pr3.addEventListener("click",()=>{
  //   window.open("https://zoreaditya.github.io/Desktop-Voice-Assistant/")
  // })