  //init search app
const searchApp = new SearchApp;
//init UI
const ui = new UI;
//Search artist
const searchArtist = document.getElementById('searchArtist');


document.addEventListener('DOMContentLoaded', ()=>
{
  searchApp.getTopAlbums().then(data => {
    if(data.topAlbumData.trending){
      ui.showTopAlbums(data.topAlbumData);
    }
  })
}, false);
//Search input event listener
searchArtist.addEventListener('keyup', (e) => {
  // Get input text
  const userText=e.target.value;

  if(userText !== ''){
    //HTTP call
    searchApp.getAlbumByArtistName(userText).then(data => {
      if(data.albumData.album){
        //show album details(album list)
        ui.showAlbums(data.albumData);

      } else{
        //show alert message


      }

    });
  }

} )
