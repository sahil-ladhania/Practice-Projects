import axios from 'axios';

export const getAllCoinsData = async(currentPageCount : number) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${currentPageCount}`);
        const coinsData = response.data;
        return coinsData;
    }
    catch (error) {
        console.log(error);
    }
}