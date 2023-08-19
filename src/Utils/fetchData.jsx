export const exerciseOptions = {
    method: 'GET',
       headers: {
        'X-RapidAPI-Key': '57a2c411f9msh6fdddee94305e97p14ecd2jsnc2800ac0b163',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
       headers: {
        'X-RapidAPI-Key': 'c43d4ba136msh78ecc1b9e7335d7p199e38jsna8b8230eeee2',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options)
    const data= await response.json()
    return data;
}