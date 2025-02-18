import { getTemperatura } from '@/helpers/getWeather'
import { useWeatherStore } from '../stores/weatherStore'

export const useWeather = async() => {
    const temperatura = await getTemperatura();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;
}