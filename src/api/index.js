import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let dynamicURL = url;

    if(country) {
        dynamicURL = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicURL);
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log("Error: " + error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const fetchedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return fetchedData;
    }
    catch (error) {
        console.log("Error: " + error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    }
    catch (error) {
        console.log("Error: " + error);
    }
}