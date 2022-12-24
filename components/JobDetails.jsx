import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Textarea,
  Text
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { jobSchema } from '../schemas';
import { setJobDetails, setErrors } from '../forms';
import { useSelector, useDispatch } from 'react-redux';

const JobDetails = ({ labels }) => {
  const { jobDetails, formPage } = useSelector((state) => state.form);
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      ...jobDetails
    },
    validationSchema: jobSchema,
    onSubmit: (values) => console.log(values)
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      Object.keys(errors).length <= 0 &&
      touched?.jobTitle &&
      touched?.jobDescription &&
      touched?.jobLocation
    ) {
      dispatch(setJobDetails(values));
      dispatch(setErrors(false));
    } else {
      dispatch(setErrors(true));
    }
  }, [dispatch, errors, formPage, touched, values]);

  return (
    <Box minW="696px" marginTop="41px" h="558px">
      <FormControl>
        <Box marginBottom="16px">
          <FormLabel htmlFor="jobTitle" marginBottom="5px" style={labels}>
            Job Title
          </FormLabel>
          <Input
            type="text"
            id="jobTitle"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.jobTitle}
            borderColor={errors.jobTitle && touched.jobTitle && '#FF3D00'}
          />
          {errors.jobTitle && touched.jobTitle && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.jobTitle}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="jobDescription" marginBottom="5px" style={labels}>
            Job Description
          </FormLabel>
          <Textarea
            type="text"
            id="jobDescription"
            resize="none"
            width="696px"
            height="77.19px"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.jobDescription}
            borderColor={
              errors.jobDescription && touched.jobDescription && '#FF3D00'
            }
          />
          {errors.jobDescription && touched.jobDescription && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.jobDescription}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="jobLocation" marginBottom="5px" style={labels}>
            Job Location
          </FormLabel>
          <Input
            type="text"
            id="jobLocation"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.jobLocation}
            borderColor={errors.jobLocation && touched.jobLocation && '#FF3D00'}
          />
          {errors.jobLocation && touched.jobLocation && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.jobLocation}
            </Text>
          )}
        </Box>
      </FormControl>
    </Box>
  );
};

export default JobDetails;
