import axios from 'axios';

export const getTrendingCoin = async() => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        const coinData = response.data;
        return coinData;
    }
    catch (error) {
        console.log(error);
    }
}