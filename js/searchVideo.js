import { APIconnect } from "./APIconnect.js";
import buildCard from "./showVideos.js";

async function searchVideos(event){
    event.preventDefault()
    
    const dataSearch = document.querySelector('[data-search]').value
    const search = await APIconnect.searchVideo(dataSearch)

    const list = document.querySelector('[data-list]')
    //list.innerHTML = ''

    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }

    search.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)
    ));

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com "${dataSearch}"! </h2>`
    }
}

const searchBttn = document.querySelector('[data-search-bttn]')

searchBttn.addEventListener('click', event => searchVideos(event))