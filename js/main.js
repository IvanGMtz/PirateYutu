import * as C from "./constructor.js";
export{BuscarDescripcion, BuscarComentarios};

boton.addEventListener("click", () => {
    let buscador = (document.getElementById("buscador").value).split(" ").join("%20");
    BuscarTodo(buscador);
  });

  const BuscarTodo = async (buscador) => {
    let url = `https://youtube138.p.rapidapi.com/search/?q=${buscador}&hl=en&gl=US`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      C.contruirYoutube(result);
    } catch (error) {
      console.error(error);
    }
  }

  const BuscarDescripcion = async (videoId) => {
    let url = `https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      C.contruirYoutubeDescription(result);

    } catch (error) {
      console.error(error);
    }
  }

  const BuscarComentarios = async (videoId) => {
    let url = `https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      C.contruirYoutubeComentarios(result);

    } catch (error) {
      console.error(error);
    }
  }
