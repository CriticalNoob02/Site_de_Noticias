//Comentário apenas para saber se consegui linkar

const url_atual = window.location.pathname

if(url_atual == "/"){
    document.getElementById ("home-menu").className = "nav-link text-white active"
}
else if(url_atual == "/noticias"){
    document.getElementById ("noticias-menu").className = "nav-link text-white active"
}