// to load the top list on first load
document.addEventListener('DOMContentLoaded', ()=>
{
 artistId=document.location.hash.substr(1);
 getAlbumsById(artistId).then(data => {
   showAlbums(data.albumData,data.artistData);
 })
}, false);


// HTTP calls
async function getAlbumsById(id){
  const response=await fetch(`https://www.theaudiodb.com/api/v1/json/1/album.php?i=${id}`);
  const artistResponse= await fetch(`https://www.theaudiodb.com/api/v1/json/1/artist.php?i=${id}`)
  const albumData= await response.json();
  const artistData= await artistResponse.json();
  return{
    albumData,
    artistData
  };

}
async function getTrackDetailsById(id){
  const response=await fetch(`https://www.theaudiodb.com/api/v1/json/1/track.php?m=${id}`);

  const trackData= await response.json();

  return{
    trackData,
      };

}

// UI changes

function populateTrackDetails(id) {
 let modelTitle = document.getElementById('model-album-title');
 let modeltrackDetails = document.getElementById('model-track-list');
getTrackDetailsById(id).then(data =>{
  modelTitle.innerHTML=`${data.trackData.track[0].strAlbum}`;
  modeltrackDetails.innerHTML=
  `
  <ul class="list-group">
               ${data.trackData.track.map(data => `<li class="list-group-item">${data.strTrack} </li>`)}
            </ul>
  `

} );
}


function showAlbums(albumData,artistData){
  let fragment = document.createDocumentFragment();


  //document.getElementById('remove').remove();

  let divElement=document.createElement('div');
  divElement.setAttribute('id','remove');
  divElement.innerHTML=`<div class="card card-body mb-3">
  <h5>${artistData.artists[0].strArtist}</h5>
  <div class="row">
    <div class="col-md-3" >

      <img class="img-fluid mb-2" src="${artistData.artists[0].strArtistThumb}">
    </div>
    <div class="col-md-9">
    <span class="badge "> <a href="${artistData.artists[0].strFacebook}"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></span>
    <span class="badge"> <a href="${artistData.artists[0].strTwitter}"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>  </span>
    <br><br>

  </div>

    <div class="container">
    <div class="search card card-body">


    </div>`
  //iterating the list of albums
  albumData.album.forEach(element => {
  // appending to document fragment stop repainting page everty time value changes
  let innerDiv=document.createElement('div');

  innerDiv.innerHTML=` <div class="card card-body mb-3">
  <h5 class="page-heading mb-3">${element.strAlbum}</h5>
  <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${element.strAlbumThumb}">

    </div>
    <div class="col-md-9">


      <ul class="list-group">
        <li class="list-group-item">Year: ${element.intYearReleased}</li>

        <button type="button" class="btn btn-primary btn-block mb-4" data-toggle="modal" data-target="#tracks"  onclick="populateTrackDetails(${element.idAlbum})">View Tracks</button>
      </ul>
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
