import { createSlice} from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter: {
      reducer(_, action) {
            return action.payload.text;
      },
      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;