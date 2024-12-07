import { db } from '../config/firebase.js';

export const savePrediction = async (predictionData) => {
  try {
    const predictionsRef = db.collection('predictions');
    await predictionsRef.doc(predictionData.id).set({
      id: predictionData.id,
      result: predictionData.result,
      suggestion: predictionData.suggestion,
      createdAt: predictionData.createdAt
    });
    return predictionData;
  } catch (error) {
    console.error('Error saving prediction:', error);
    throw error;
  }
};