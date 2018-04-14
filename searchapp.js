class SearchApp{
  constructor() {


  }
// to get top youtube charts list
async getTopAlbums(){
  const topAlbumResponse=await fetch(`http://www.theaudiodb.com/api/v1/json/1/trending.php?country=us&type=chart_youtube_track&format=albums`);

  const topAlbumData= await topAlbumResponse.json();

  return{
    topAlbumData
  };

}

// albums are searched based on the artist name based on user input
async getAlbumByArtistName(name){
const albumResponseByName= await fetch(`http://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${name}`);
const albumData = await albumResponseByName.json();

return{
  albumData
};
}

}