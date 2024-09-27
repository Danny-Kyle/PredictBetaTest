import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { submitPredictions as apiSubmitPredictions, Prediction } from '@/utils/api';

interface PredictionsState {
  predictions: Prediction[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PredictionsState = {
  predictions: [],
  status: 'idle',
  error: null,
};

export const submitPredictions = createAsyncThunk(
  'predictions/submit',
  async (predictions: Prediction[], { rejectWithValue }) => {
    try {
      await apiSubmitPredictions(predictions);
      return predictions;
    } catch (error) {
      return rejectWithValue('Failed to submit predictions');
    }
  }
);

const predictionsSlice = createSlice({
  name: 'predictions',
  initialState,
  reducers: {
    setPrediction: (state, action: PayloadAction<Prediction>) => {
      const existingPrediction = state.predictions.find(p => p.fixtureId === action.payload.fixtureId);
      if (existingPrediction) {
        existingPrediction.prediction = action.payload.prediction;
      } else {
        state.predictions.push(action.payload);
      }
    },

    clearPredictions: (state) => {
      state.predictions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPredictions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitPredictions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.predictions = action.payload;
      })
      .addCase(submitPredictions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setPrediction, clearPredictions } = predictionsSlice.actions;

export default predictionsSlice.reducer;