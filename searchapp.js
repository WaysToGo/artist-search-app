class SearchApp{
  constructor() {
    this.apt_key=1;

  }
// to get top youtube charts
async getTopAlbums(){
  const topAlbumResponse=await fetch(`https://www.theaudiodb.com/api/v1/json/1/trending.php?country=us&type=chart_youtube_track&format=albums`);

  const topAlbumData= await topAlbumResponse.json();

  return{
    topAlbumData
  };

}

async getAlbumByArtistName(name){
const albumResponseByName= await fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${name}`);
const albumData = await albumResponseByName.json();

return{
  albumData
};
}

}