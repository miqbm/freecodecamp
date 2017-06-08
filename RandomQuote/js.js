var texte;

    function treuParagraf(cadena) {
        //remove the initial <p> and the </p> at the end of cadena
        return cadena.substring(3, cadena.length - 7);
    }

    function obteTexte(){
        return $("#missatge").text;
    }
    $(document).ready(function() {
        $("#butoObteCita").on("click", function(ev) {
            ev.preventDefault();
           $.getJSON("http://randomtext.me/api/gibberish/p-1/5-25") //api de http://randomtext.me
            .done(function(json){
                texte = treuParagraf(json['text_out']); //json['text_out'] returns something like <p>.... ... </p>
                $("#missatge").html(texte);
                if (texte.length > 140) texte = texte.substring(0, 137 ) + '...';
                $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(texte));
            })
            .fail(function() {
                $("#missatge").html("Error obtaining random quote");
            });
        });

        // $("#twitter").on("click", function() {
        //     if (texte.length > 140) texte = texte.substring(0, 137 ) + '...';
        //     console.log( texte);
        //      var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(texte);
        //      window.open(twtLink,'_blank');
        // });
    });