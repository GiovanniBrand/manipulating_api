async function videosList() {
    const connection = await fetch('http://localhost:3000/videos')
    const convertConnection = await connection.json();
    
    return convertConnection
}

async function videoCreate (title, description, url, img) {
    const connection = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: img
        })
    })

    if (!connection.ok) {
        throw Error("Não foi possivel enviar o video")
    }

    const convertConnection = await connection.json();
    return convertConnection
}

async function searchVideo(searchTherm) {
    const connection = await fetch(`http://localhost:3000/videos?q=${searchTherm}`)
    const convertConnection = await connection.json();

    return convertConnection
}

export const APIconnect = {
    videosList,
    videoCreate,
    searchVideo
}

