export const exerciseOptions = {
    method: 'GET',
       headers: {
        'X-RapidAPI-Key': 'c43d4ba136msh78ecc1b9e7335d7p199e38jsna8b8230eeee2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options)
    const data= await response.json()
    return data;
}