$(window).on('load', function() {

    // Sera utile dans le tp2
// Rendre le scroll top plus doux

//Version jQuery

/*     $('button').on('click', function(){

        $('html').animate({
            scrollTop: $('#cible').offset().top -50
        }, 2000)
    } ) */


        //Version vanille

        let elBtn = document.querySelector('button');
        let elCible = document.querySelector('#cible');

        elBtn.addEventListener('click', function(e){
            window.scrollTo({
                top: elCible.getBoundingClientRect().top -50,
                behavior: 'smooth'
            })

        })

        console.log(elCible.getBoundingClientRect());
});