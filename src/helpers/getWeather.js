import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=37.5629&longitude=-4.8436&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    const resp = await axios.get(API_URL);
    const nuevaTempetura = resp.data.current.temperature_2m;

    return nuevaTempetura
}