class UI{
  constructor() {
     this.albums=document.getElementById('albums');
     this.fragment = document.createDocumentFragment();

  }
  showAlbums(artist){

    //retaining the scope
    let fragment=this.fragment;
    document.getElementById('remove').remove();
    console.log(fragment);
    //iterating the list of albums
    artist.album.forEach(element => {
    let divElement=document.createElement('div');
    divElement.setAttribute('id','remove');
    divElement.innerHTML=`<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <h6>${element.strAlbum}</h6>
        <img class="img-fluid mb-2" src="${element.strAlbumThumb}">
        <a href="${element.idAlbum}" target="_blank" class="btn btn-primary btn-block mb-4">View Albums </a>
      </div>
      </div>
      </div>
     `;

    fragment.appendChild(divElement);

  });

     this.albums.appendChild(fragment);

  }
  showTopAlbums(topAlbums){

    //retaining the scope
    let fragment=this.fragment;

    //iterating the list of albums
    topAlbums.trending.forEach(element => {
    let divElement=document.createElement('div');
    divElement.setAttribute('id','remove');
    divElement.innerHTML=`<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <h6>${element.strAlbum}</h6>
        <img class="img-fluid mb-2" src="${element.strAlbumThumb}">
        <a href="${element.idAlbum}" target="_blank" class="btn btn-primary btn-block mb-4">View Albums </a>
      </div>
      </div>
      </div>
     `;

    fragment.appendChild(divElement);

  });

     this.albums.appendChild(fragment);

  }

}