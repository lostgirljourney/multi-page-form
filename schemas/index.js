import * as yup from 'yup';

export const requisitionSchema = yup.object().shape({
  requestTitle: yup.string().required('Title is required.'),
  owner: yup.string().required('Owner is required.'),
  hiringManager: yup.string().required('Hiring Manager is required.'),
  openings: yup
    .number()
    .min(1, 'Openings must be greater than or equal to 1.')
    .max(9999, 'Openings must be less than or equal to 9999.')
    .required('Openings is required.'),
  urgency: yup
    .string()
    .oneOf(['Low', 'Medium', 'High'])
    .required('Urgency is required.'),
  employmentType: yup.string().required('Employment Type is required.')
});

export const interviewSchema = yup.object().shape({
  interviewMode: yup.string().required('Interview Mode is required.'),
  interviewDuration: yup.string().required('Interview Duration is required.'),
  interviewLanguage: yup.string().required('Interview Language is required.')
});

export const jobSchema = yup.object().shape({
  jobTitle: yup.string().required('Job Title is required.'),
  jobDescription: yup.string().required('Job Description is required.'),
  jobLocation: yup.string().required('Job Location is required.')
});
