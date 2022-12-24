import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requisitionDetails: {
    requestTitle: '',
    owner: '',
    hiringManager: '',
    openings: '',
    urgency: 'Select urgency',
    employmentType: ''
  },
  jobDetails: {
    jobTitle: '',
    jobDescription: '',
    jobLocation: ''
  },
  interviewSettings: {
    interviewMode: '',
    interviewDuration: '',
    interviewLanguage: ''
  },
  // previous: true,
  // next: true,
  previous: false,
  next: false,
  errors: false,
  formPage: 1
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setRequisitionDetails: (state, action) => {
      state.requisitionDetails = action.payload;
      state.errors = false;
    },
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
      state.errors = false;
    },
    setInterviewSettings: (state, action) => {
      state.interviewSettings = action.payload;
      state.errors = false;
    },
    setTitle: (state, action) => {
      state.requisitionDetails.requestTitle = action.payload;
    },
    setOpenings: (state, action) => {
      state.requisitionDetails.openings = action.payload;
    },
    setOwner: (state, action) => {
      state.requisitionDetails.owner = action.payload;
    },
    setUrgency: (state, action) => {
      state.requisitionDetails.urgency = action.payload;
    },
    setEmploymentType: (state, action) => {
      state.requisitionDetails.employmentType = action.payload;
    },
    setPrevious: (state) => {
      state.formPage > 1 ? (state.previous = true) : (state.previous = false);
      state.next = true;
    },
    setNext: (state, action) => {
      console.log('redux', action.payload);
      state.formPage > 1 ? (state.previous = true) : (state.previous = false);
      state.errors === true &&
      JSON.stringify(state[action.payload]) ===
        JSON.stringify(initialState[action.payload])
        ? (state.next = false)
        : (state.next = true);
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setFormPage: (state, action) => {
      state.formPage = action.payload;
    }
  }
});

export const {
  setRequisitionDetails,
  setJobDetails,
  setInterviewSettings,
  setTitle,
  setOpenings,
  setOwner,
  setUrgency,
  setEmploymentType,
  setPrevious,
  setNext,
  setErrors,
  setFormPage
} = formSlice.actions;
export default formSlice.reducer;
