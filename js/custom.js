
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

  // Form
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = event.target;
    const formData = new FormData(form); // Gather form data
    const messageDiv = document.getElementById('form-message');
    const spinner = document.getElementById('loading-spinner');

    // Show the loading spinner
    spinner.style.display = 'block';
    messageDiv.style.display = 'none'; // Hide previous messages

    // Send the form data to your PHP script
    fetch('https://juugal.com/send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        // Display the response message
        messageDiv.innerHTML = data;
        messageDiv.style.color = data.includes('successfully') ? 'green' : 'red';
        messageDiv.style.display = 'block'; // Show the message

        // Clear the form fields
        form.reset();
    })
    .catch(error => {
        // Handle errors
        messageDiv.innerHTML = 'Error: ' + error.message;
        messageDiv.style.color = 'red';
        messageDiv.style.display = 'block'; // Show the error message
        console.error('Fetch error:', error); // Log the error to the console
    })
    .finally(() => {
        // Hide the loading spinner
        spinner.style.display = 'none';
    });
});