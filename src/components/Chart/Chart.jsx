import React from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData, setDailyData] = React.useState({});

    React.useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(dailyData = await fetchDailyData());
        }

        fetchAPI();
    });

    return (
        <h1>Chart</h1>
    )
}

export default Chart;