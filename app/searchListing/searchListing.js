
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { zip_code, year_id, make_id, model_id, style_id, glass_id } = req.body;

    if (!zip_code || !year_id || !make_id || !model_id || !style_id || !glass_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const apiUrl = "http://127.0.0.1:8001/api ";
      const response = await axios.post(`${apiUrl}/listing`, {
        zip_code,
        year_id,
        make_id,
        model_id,
        style_id,
        glass_id,
      });

      const data = response.data;

      if (data.valid) {
        res.status(200).json({
          url: data.url, 
          valid: data.valid,
          message: data.message,
        });
      } else {
        res.status(200).json({
          valid: data.valid,
          message: data.message,
        });
      }
    } catch (error) {
      console.error('Error calling the API:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
