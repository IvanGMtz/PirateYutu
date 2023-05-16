export{contruirYoutube, contruirYoutubeDescription, contruirYoutubeComentarios};
import * as main from "./main.js";

function contruirYoutube(youtube) {
    //Id del Video Principal
    let videoId= youtube.contents[0].video.videoId;
    main.BuscarDescripcion(videoId);
    main.BuscarComentarios(videoId);
    //Titulo del Video
    let titulo=youtube.contents[0].video.title;
    //Sugerencias
    let videoId1= youtube.contents[1].video.videoId;
    let videoId2= youtube.contents[2].video.videoId;
    let videoId3= youtube.contents[3].video.videoId;
    //logo del Canal
    let logo =youtube.contents[0].video.author.avatar[0].url;
    //Titulo del Canal
    let tituCanal=youtube.contents[0].video.author.title;

    document.getElementById("video").innerHTML = `<iframe width="100%" height="700" src="https://www.youtube.com/embed/${videoId}" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`;

    document.getElementById("title").innerHTML = `<p class="h3"><strong>${titulo}</strong></p>`;

    document.getElementById("logoCanal").innerHTML = `<div class="col-2"><img src="${logo}" style="width: 60px; height: 60px;" 
      class="rounded float-start" alt="..."></div><div class="col-8 ms-4 mt-3"> <h4>${tituCanal}</h4></div> <div class="col"></div>`;

    document.getElementById("videore").innerHTML =`<div class="col">
      <iframe width="90%" height="250" src="https://www.youtube.com/embed/${videoId1}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col">
      <iframe width="90%" height="250" src="https://www.youtube.com/embed/${videoId2}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col">
      <iframe width="90%" height="250" src="https://www.youtube.com/embed/${videoId3}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>`
  };

  function contruirYoutubeDescription(youtube) {
    document.getElementById("description").innerHTML = `${youtube.description}`;
  };

  function contruirYoutubeComentarios(youtube) {
    document.getElementById("comentarios").innerHTML = `<li><b>${youtube.comments[0].author.title}</b>: ${youtube.comments[0].content}</li>
    <li><b>${youtube.comments[1].author.title}</b>: ${youtube.comments[1].content}</li>
    <li><b>${youtube.comments[2].author.title}</b>: ${youtube.comments[2].content}</li>
    <li><b>${youtube.comments[3].author.title}</b>: ${youtube.comments[3].content}</li>
    <li><b>${youtube.comments[4].author.title}</b>: ${youtube.comments[4].content}</li>
    <li><b>${youtube.comments[5].author.title}</b>: ${youtube.comments[5].content}</li>
    <li><b>${youtube.comments[6].author.title}</b>: ${youtube.comments[6].content}</li>`;
  };