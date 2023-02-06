import { APIconnect } from "./APIconnect.js";

const form = document.querySelector('[data-form]')

async function videoCreate(evento) {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const title = document.querySelector('[data-title]').value
    const img = document.querySelector('[data-img]').value
    const description = Math.floor(Math.random() * 10).toString()

    try {
        await APIconnect.videoCreate(title, description, url, img)

        window.location.href = "../pages/envio-concluido.html"
    } catch(e){
        alert(e)
    }
    
}

form.addEventListener("submit", event => videoCreate(event))