import { FormControl, FormLabel, Input, Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { interviewSchema } from '../schemas';
import { setInterviewSettings, setErrors } from '../forms';
import { useSelector, useDispatch } from 'react-redux';

const InterviewSettings = ({ labels }) => {
  const { interviewSettings } = useSelector((state) => state.form);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        ...interviewSettings
      },
      validationSchema: interviewSchema,
      onSubmit: (values) => console.log(values)
    });
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      Object.keys(errors).length <= 0 &&
      touched?.interviewMode &&
      touched?.interviewDuration &&
      touched?.interviewLanguage
    ) {
      dispatch(setInterviewSettings(values));
      dispatch(setErrors(false));
    } else {
      dispatch(setErrors(true));
    }
  }, [dispatch, errors, touched, values]);

  return (
    <Box minW="696px" marginTop="41px" h="558px">
      <FormControl onSubmit={handleSubmit}>
        <Box marginBottom="16px">
          <FormLabel htmlFor="interviewMode" marginBottom="5px" style={labels}>
            Interview Mode
          </FormLabel>
          <Input
            type="text"
            id="interviewMode"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.interviewMode}
            borderColor={
              errors.interviewMode && touched.interviewMode && '#FF3D00'
            }
          />
          {errors.interviewMode && touched.interviewMode && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.interviewMode}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel
            htmlFor="interviewDuration"
            marginBottom="5px"
            style={labels}
          >
            Interview Duration
          </FormLabel>
          <Input
            type="text"
            id="interviewDuration"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.interviewDuration}
            borderColor={
              errors.interviewDuration && touched.interviewDuration && '#FF3D00'
            }
          />
          {errors.interviewDuration && touched.interviewDuration && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.interviewDuration}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel
            htmlFor="interviewLanguage"
            marginBottom="5px"
            style={labels}
          >
            Interview Language
          </FormLabel>
          <Input
            type="text"
            id="interviewLanguage"
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.interviewLanguage}
            borderColor={
              errors.interviewLanguage && touched.interviewLanguage && '#FF3D00'
            }
          />
          {errors.interviewLanguage && touched.interviewLanguage && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.interviewLanguage}
            </Text>
          )}
        </Box>
      </FormControl>
    </Box>
  );
};

export default InterviewSettings;
