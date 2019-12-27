$(function()  {
 
    ' use strict ';
    
    //Calculate Body padding Top Depend on Navbar Height 
        $('body').css('paddingTop', $('.navbar').innerHeight());


    // Scroll To Element
      $('.navbar li a').click(function (e) {

           e.preventDefault();
           $('html, body').animate({ 

            scrollTop : $( "#" + $(this).data('scroll')).offset().top +1

           },1000);

          //  window.console.log( "#" + $(this).data('scroll'));
      });

      //Add (Action Class) on Navbar link and Remove Frome siblings 

      $('.navbar li a').click(function (){

          $('.navbar  a').removeClass('active');

          $(this).addClass('active');

         // $(this).addClass('active').parent().siblings().find('a').removeClass('active');
      });
    
     

      $(window).scroll(function(){
        
         //sync Navbar links with Sections
        $('.block').each(function (){

            if ($(window).scrollTop() > $(this).offset().top) {

               // console.log($(this).attr('id'));
                var blockID = $(this).attr('id'); 

                $('.navbar  a').removeClass('active');

                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });

        //scroll to top Button 
         var ScrollToTop =  $('.Scroll-to-top');
        if ($(window).scrollTop() >= 1000) {
             
            if (ScrollToTop.is(':hidden')){

                 ScrollToTop.fadeIn(400);
            }
            //ScrollToTop.fadeIn(400);
       
        }
        else{

          ScrollToTop.fadeOut(400);

        }

    });

  // click on scroll to top TO GO up
   
  $('.Scroll-to-top').click(function (event){
    event.preventDefault();
    $('html, body').animate({ 

        scrollTop : 0
        
       },1000);
    
     
  });
  //start show popup
  $('.show-popup').click(function(){
      $($(this).data('popup')).fadeIn();
     
  });
  $('.popup').click(function(){
    $(this).fadeOut();
   
 });

  $('.popup .inner').click(function(e){
    e.stopPropagation();
   
 });

  $('.popup .close').click(function(e){
     e.preventDefault();
     
    $(this).parentsUntil('.popup').parent().fadeOut();
    
  });
  //( في الحالة تبعتي بتزبط لانه ما عندي اكتر من وحدة (بقدر اسكرها عن طريق الكيبورد
  $(document).keydown(function(e){
       if( e.keyCode == 27){
         $('.popup').fadeOut();  
       }

  });
  //End show popup
  //Button with Effects
  $('.buttons-effect button').each(function(){
   
    $(this).append('<span> </span>')

  });
  $('.from-left , .border-left').hover(function(){
      $(this).find('span').eq(0).animate({
        width:'100%'
      } , 300);
  }, function (){
    $(this).find('span').eq(0).animate({
        width:0
      } , 300);
  });

  $('.from-Top').hover(function(){

    $(this).find('span').eq(0).animate({
        height:'100%'
    } , 300);

    }, function (){
      $(this).find('span').eq(0).animate({
     height: 0
      } , 300);
});

//buttons-effect bounce

function effectBounce(selector, times , distance , speed){
    //for time
    for (var i=0; i<times ; i++){
       
            $(selector).animate({
           top:'-='+ distance 
            },speed).animate({
             top:'+='+distance
            } ,speed);
    }
};

$(' .bounce').on('click',function(){
  
    effectBounce($(this),/*nub animate*/ 1 , 20 , 400);
});




// start animatid-progress
$('.animatid-progress span').each(function(){
$(this).animate({
 width: $(this).attr('data-progress') 
},2000 ,function(){
    $(this).text( 'Perc:' +$(this).attr('data-progress') );
});
});
// end animatid-progress
// start  fixed-menu
$('.fixed-menu .fa-gear').click(function(){
  
    $(this).parent('.fixed-menu').toggleClass('is-visible');
    if($(this).parent('.fixed-menu').hasClass('is-visible')){
        $(this).parent('.fixed-menu').animate({
            left:0
        },500);
        $('body').animate({
          paddingLeft:'220px'

        },500);

    } else{
        $(this).parent('.fixed-menu').animate({
            left:'-220px'
    },500);

    $('body').animate({
        paddingLeft:0

      },500);
}

});
 // change color
$('.change-colors li').on ('click',function(){
    $('body').attr('data-choose-color',$(this).data('color'))
})


// Start thumbnails gallery 

var numOfThumbnails = $('.thumbnails').children().length,
    marginBeteeenThumbnails='.5',
    totelMarginBeteeenThumbnails= (numOfThumbnails-1)*marginBeteeenThumbnails,
    thumbnailsWidth = (100 - totelMarginBeteeenThumbnails)/numOfThumbnails ;
      
    $('.thumbnails img').css({
      'width':thumbnailsWidth +'%',
      'margin-right':marginBeteeenThumbnails+'%'
    })

  

$('.thumbnails img').on('click',function(){

    $(this).addClass('selected').siblings().removeClass('selected');
    $('.master-img img').hide().attr('src', $(this).attr('src') ).fadeIn(400);
})

$('.gallery .master-img .fa-chevron-right').on('click', function(){
    if ($('.thumbnails .selected').is(':last-child')){
        $('.thumbnails img').eq(0).click()
    } else{
        $('.thumbnails .selected').next().click();
    }
  

});
$('.gallery .master-img .fa-chevron-left').on('click', function(){
   
    if ($('.thumbnails .selected').is(':first-child')){
        $('.thumbnails img:last').click()
    } else{
        $('.thumbnails .selected').prev().click();
    }
  
  });
// Start thumbnails gallery 
 
 $('.products .product i ,.items .item i').on('click',function () { 
    $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
  });
// Start grid/list product
$('.view-options i').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.items').removeClass('list-view grid-view').addClass($(this).data('class'));
})
 
$('.error-message').each(function () {
    $(this).animate({
        right:0
    },1000,function () {
        $(this).delay(3000).fadeOut();
    })
    
});

//start our Form ********************************

// hide placeholder on Focus & Restore  on blur

 var placeAttr='';

$('[placeholder]').focus(function () {
  
    placeAttr=$(this).attr('placeholder');

    $(this).attr('placeholder','');

      
}).blur(function () {

    $(this).attr('placeholder', placeAttr);
});

// show Message when field is Empty 
$('[required]').blur(function () {

    if ($(this).val() == ''){

        $(this).next('span').fadeIn().delay(2000).fadeOut();
    }
});
// add Astertsk to All Required  field هاد اسايميت 
$('<span class ="asterisk"> * </span>').insertBefore(':input[required]');

//custam asterisk 


$('.asterisk').parent('div').css(
    'position', 'relative'
);

$('.asterisk').each(function () {
    $(this).css({
        'position':'absolute',
        'top': 13,
        'left': $(this).parent('div').find(':input').innerWidth()- 20,
        'color':'#f00',
        'font-weight': 'bold'
    });
     
    $('.asterisk').hide();
    
});

// customize the Input Field 

$('.our-form input[type="file"]').wrap('<div class= "custom-file"></div> ');
$('.custom-file').prepend('<span> uplode Your Files </span>');
$('.custom-file').append('<i class="fas fa-upload fa-lg skin-color"></i>');
$('.our-form input[type="file"]').change(function(){
    $(this).prev('span').text($(this).val());
})

// Detect Unicode of keyboard keys في خطاء بسبب 8  53
$('.detect-unicode').on('keyup',function (event){
    var keyboard= event.keyCode || event.which;
     $('.unicode').html(keyboard);


     //tag 37  في خطاء key
    // فيديو 38 ماتنذ

     if (keyboard === 180){
        var tisValue = $(this).val().slice(0,-1);
        $('.tags').append('<span class ="tag-span"> '+ tisValue + '</span> ');
        $(this).val('');
       //comma pressed

   }
});

//change input direction depend on the langauge في خطاء

$('.auto-direction').on('keyup',function (){
  
    if($(this).val().charCodeAt(0) < 200)
    {
      $(this).css('direction','ltr');
    }else{
        $(this).css('direction','rtl');
    }

});

// trim text characters 100 حرف

/* $('.trimmed-text p').each(function(){
  //  console.log($(this).text().length)
  if ($(this).text().length > 100 ){

     var trimmedText=$(this).text().substr(0,100);
     $(this).text( trimmedText +'...');
    
  }
});

*/
function trimText(selector,maxlength){
    $(selector).each(function(){
    if($(this).text().substr(0,maxlength)){
        var trimmedText=$(this).text().substr(0,maxlength);
        $(this).text(trimmedText + '...');
    }
});

}

// need num trimText
trimText('.trimmed-text p' , 200);


// end

//Adjust elements height to be the same
var theMaxHeight=0;
//loop on Elements to you want to Adjust Height
$('.same-height div').each(function(){
    if($(this).height()>theMaxHeight)
    {
        theMaxHeight=$(this).height(); 
    }
});
$('.same-height div').height(theMaxHeight);


// shuffle 
var zIndexValue =0;
$('.cards .card').on('click',function(){
    $(this).animate({
    left:'20%',
    marginTop:30
    },400,function() {

        zIndexValue--;
        $(this).css('z-index' , zIndexValue)

    }).animate({
       left:$(this).css('left'),
       marginTop:0
     
    },400);

   
});
 // Create blink warning

 blinkWarning ();
  function blinkWarning () {
  $('.blink-warning').fadeOut(1000,function(){
      $(this).fadeIn(2000);
     // blinkWarning ();
  });
  }
  
 // start to do list

 var newTest=$('.task-input');
 $('.add-task').on('submit',function(e){
  e.preventDefault();
  if(newTest.val()!= '') {
      $('<li>'+ newTest.val() + '</li>').appendTo('.tasks');
      newTest.val('');
  }
 });

 $('.tasks').on('click','li',function(){
  $(this).css('text-decoration', 'line-through').delay(200).fadeOut(400 ,function(){
       $(this).remove();
 });
  });


  // type write Effects

  var theText = $('.typer').data('text'),
      theTextLength = theText.length;
     // console.log(theText);
      //console.log(theTextLength);
      num=0,
      theTyper= setInterval(function(){
       $('.typer').each(function(){
        $(this).html($(this).html()+theText[num]);
       });
       num+=1;
       if(num >= theTextLength){
           clearInterval(theTyper);
       }
      },100);

      // auto change content
      
      (function autoChage(){
     $('.ticker-list .active').each(function(){
      if(!$(this).is(':last-child')){
      $(this).delay(1500).fadeOut(500 ,function(){
          $(this).removeClass('active').next().addClass('active').fadeIn();
          autoChage();
      });

      }else{
        $(this).delay(1500).fadeOut(500 ,function(){
            $(this).removeClass('active');
            $('.ticker-list li').eq(0).addClass('active').fadeIn();;
            autoChage();
        });
      }
     });
      }());

      // Start Dynamic Tabs 
      $('.tabs-list li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.content-list > div').hide();
        $($(this).data('content')).fadeIn();

      });

      //switch tabs view 
      $('.switch-tabs').on('click',function (){
          $(this).next('.dynamic-tabs').toggleClass('left-tabs');
      })
 });
 
  
