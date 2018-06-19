const inputText = document.querySelector("input")
const containerImage = document.getElementById("elementos")
// 

inputText.addEventListener("keypress", (event) => {
    //which y keyCode son eventos del teclado
    let key = event.which || event.keyCode;
    //el codigo de enter es 13 
    if (key === 13) {
        let gif = inputText.value;
        console.log(gif)
        inputText.value = "";

        fetch(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=L12h9xEap3zTqKjW9WTT9vybOH48dqQd&limit=14`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
})
const renderInfo = data => {
    data.data.forEach(element => {
        let gifImg = element.images.downsized.url;
        containerImage.innerHTML = `<img src="${gifImg}">`;    
    });
    
}
/*$(document).ready(function(){
    var dibujarGifs = function(data){
        var gif = "";
        var url = "";
        data.forEach(function(element) {
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $("elementos").append(armarTemplate(gif , url));
            
        });
    }
})

var armarTemplate = function(gif,url){
    var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url +"'>Ver más</a></div>"
    return t;
}

var ajaxGif = function(gif){
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search',
        type: 'GET',
        datatype: 'json',
        data: {
            q: gif,
            api_key: 'dc6zaT0xFJmzC'
        }
    })
    .done(function(response){
        console.log(response);
        dibujarGifs(response.data);
    })
    .fail(function(){
        console.log("error");
    });
    $("#buscar-gif").click(function(event){
        console.log("Entro");
        $("#elementos").emply();
        var gif = $("#gif-text").val();
        ajaxGif(gif);
    });
}
*/