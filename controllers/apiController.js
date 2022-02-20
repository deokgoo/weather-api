import { Router } from 'express';
import axios from 'axios';

const WEATHER_API_KEY = '53fafa63d4cc9554e3f37b372e59e3ae';

let router = Router();

router.get('/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
  const { data } = await axios.get(url);
  res.send(data);
});

export default router;