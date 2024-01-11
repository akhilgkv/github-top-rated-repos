import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ToggleFlag {
  id: number;
  enabled: boolean;
}

interface repoState {
  repoList: ToggleFlag[];
}

const initialState: repoState = {
  repoList: [],
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleUpdate: (state, action: PayloadAction<ToggleFlag>) => {
      const { id } = action.payload;
      const existingToggle = state.repoList.find((toggle) => toggle.id === id);
      if (existingToggle) {
        existingToggle.enabled = !existingToggle.enabled;
      } else {
        state.repoList.push(action.payload);
      }
    },
  },
});

export const { toggleUpdate } = toggleSlice.actions;
export default toggleSlice.reducer;
