$(document).ready( function(){

    function updateOutput(){
        $("iframe").contents().find("html").html(
            "<html><head><style type='text/css'>"
            + $("#panelCSS").val() + "</style></head>"
            + "<body>" + $("#panelHTML").val() 
            + "</body></html>"

        );

        document.getElementById("outputPanel").contentWindow.eval($("#panelJS").val());

    }

    $(".btn").on("click", function (){
       let btnCicked = $(this).text();

        switch (btnCicked) {
            case 'HTML':
                $(".html").toggle();
                $(this).toggleClass("active--btn");
                break;
            case 'CSS':
                $(".css").toggle();
                $(this).toggleClass("active--btn");
                break;
            case 'JavaScript':
                $(".javascript").toggle();
                $(this).toggleClass("active--btn");
                break;
            case 'Output':
                $(".output").toggle();
                $(this).toggleClass("active--btn");
                break;
            default:
              console.log("Errore!");
          }
    })

    updateOutput();

    $("textarea").on("change keyup paste", function(){
        updateOutput();
    })

})