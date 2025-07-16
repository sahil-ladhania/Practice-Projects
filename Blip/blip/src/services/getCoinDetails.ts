import axios from 'axios';

export const getCoinData = async(id: string) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        const coinData = response.data;
        return coinData;
    }
    catch (error) {
        console.log(error);
    }
}