//init search app
const searchApp = new SearchApp;
//Search artist
const searchArtist = document.getElementById('searchArtist');

//Search input event listener
searchArtist.addEventListener('keyup', (e) => {
  // Get input text
  const userText=e.target.value;
  console.log(userText);
  if(userText !== ''){
    //HTTP call
    searchApp.getAlbumByArtistName(userText).then(data => {
      if(data.albumData.album){
        //show alert message
      } else{
        //show album details(album list)
      }

    });
  }
} );
