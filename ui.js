class UI{
  constructor() {
     this.albums=document.getElementById('albums');
     this.fragment = document.createDocumentFragment();

  }
  showAlbums(artist){

    //retaining the scope
    let fragment=this.fragment;
    document.getElementById('remove').remove();
    let divElement=document.createElement('div');
    divElement.setAttribute('id','remove');
    //iterating the list of albums
    artist.album.forEach(element => {
    // appending to document fragment stop repainting page everty time value changes
    let innerDiv=document.createElement('div');
    innerDiv.innerHTML=`<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <h6>${element.strAlbum}</h6>
        <img class="img-fluid mb-2" src="${element.strAlbumThumb}">
        <a href="${'./artist.html#'+element.idArtist}" class="btn btn-primary btn-block mb-4">View Albums </a>
      </div>
      </div>
      </div>
     `;
     divElement.appendChild(innerDiv);
    // finally appending the value to the fragment
    fragment.appendChild(divElement);

  });
// finally appending the value to the main HTML using id
     this.albums.appendChild(fragment);

  }

  // to show the top album details on first load
  showTopAlbums(topAlbums){

    //retaining the scope
    let fragment=this.fragment;
    let divElement=document.createElement('div');
    divElement.setAttribute('id','remove');
    //iterating the list of albums
    topAlbums.trending.forEach(element => {

      let innerDiv=document.createElement('div');
    innerDiv.innerHTML=`<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <h6>${element.strAlbum}</h6>
        <img class="img-fluid mb-2" src="${element.strAlbumThumb}">
        <a href="${'./artist.html#'+element.idArtist}"  class="btn btn-primary btn-block mb-4">View Albums </a>
      </div>
      </div>
      </div>
     `;

     divElement.appendChild(innerDiv);
    fragment.appendChild(divElement);

  });

     this.albums.appendChild(fragment);

  }

}