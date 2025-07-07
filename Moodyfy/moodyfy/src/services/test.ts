import axios from 'axios';

const config = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/genre_view/',
  params: {
    id: '0JQ5DAqbMKFEC4WFtoNRpw',
    // content_limit: '10',
    // limit: '20'
  },
  headers: {
    'x-rapidapi-key': 'e26ae4cfd0msh9af7c68596fa5d4p1af522jsna9bc2e9b35b4',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

export async function getGenre() {
    try {
        const response = await axios.request(config);
        console.log(response.data);
        return response.data;
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
};