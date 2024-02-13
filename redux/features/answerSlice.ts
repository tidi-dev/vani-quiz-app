import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AnswerState = {
  id: string; // question id
  answer: string[];
};

const initialState = {
  id: '',
  answer: [],
} as AnswerState;

export const answer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    resetAnswer: () => initialState,
    addSingleAnswer: (state, action: PayloadAction<AnswerState>) => {
      state.id = action.payload.id;
      state.answer = action.payload.answer;
    },
    addMultipleAnswer: (state, action: PayloadAction<AnswerState>) => {
      state.id = action.payload.id;
      state.answer = action.payload.answer;
    },
  },
});

export const { addSingleAnswer, addMultipleAnswer, resetAnswer } = answer.actions;

export const selectQuestionId = (state: RootState) => state.answerReducer.id;
export const selectAnswer = (state: RootState) => state.answerReducer.answer;

export default answer.reducer;
