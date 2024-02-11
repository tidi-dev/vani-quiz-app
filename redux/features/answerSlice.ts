import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AnswerState = {
  value: string[];
};

const initialState = {
  value: [],
} as AnswerState;

export const answer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    reset: () => initialState,
    addSingleAnswer: (state, action: PayloadAction<string>) => {
      state.value[0] = action.payload;
    },
    addMultiple: (state, action: PayloadAction<number>) => {
      // state.value -= action.payload;
    },
  },
});

export const { addSingleAnswer, addMultiple } = answer.actions;
export default answer.reducer;
