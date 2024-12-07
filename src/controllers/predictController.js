import { v4 as uuidv4 } from 'uuid';
import { PredictionError } from '../utils/errors.js';
import { savePrediction } from '../services/predictionService.js';

export const predictImage = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new PredictionError('No image file provided');
    }

    // Simulate prediction result (replace with actual ML logic)
    const isCancer = Math.random() > 0.5;
    
    const predictionData = {
      id: uuidv4(),
      result: isCancer ? 'Cancer' : 'Non-cancer',
      suggestion: isCancer 
        ? 'Segera periksa ke dokter!'
        : 'Penyakit kanker tidak terdeteksi.',
      createdAt: new Date().toISOString()
    };

    // Save to Firestore
    await savePrediction(predictionData);

    const response = {
      status: 'success',
      message: 'Model is predicted successfully',
      data: predictionData
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};