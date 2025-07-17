import axios from 'axios';
  
export const getAllJobs = async() => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Jobs in India',
          page: '1',
          num_pages: '1',
          country: 'in',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': 'e26ae4cfd0msh9af7c68596fa5d4p1af522jsna9bc2e9b35b4',
        //   'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
	    console.log(response.data.data); 
    }
    catch (error) {
        console.log(error);
    }
};