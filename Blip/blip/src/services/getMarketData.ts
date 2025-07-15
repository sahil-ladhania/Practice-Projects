import axios from 'axios';

export const getMarketData = async() => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);
        const marketData = response.data;
        return marketData;
    }
    catch (error) {
        console.log(error);
    }
}