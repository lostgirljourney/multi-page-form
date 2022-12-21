import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Box,
  Text
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { requisitionSchema } from '../schemas';
import {
  setOpenings,
  setOwner,
  setRequisitionDetails,
  setTitle,
  setUrgency,
  setEmploymentType,
  setErrors,
  setNext,
  setPrevious
} from '../forms';

const RequisitionDetails = ({ labels, options }) => {
  const { requisitionDetails } = useSelector((state) => state.form);
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      ...requisitionDetails
    },
    validationSchema: requisitionSchema,
    onSubmit: (values) => console.log(values)
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      Object.keys(errors).length <= 0 &&
      touched?.requestTitle &&
      touched?.owner &&
      touched?.hiringManager &&
      touched?.openings &&
      touched?.urgency &&
      touched?.employmentType
    ) {
      dispatch(setRequisitionDetails(values));
      dispatch(setErrors(false));
      dispatch(setPrevious());
      dispatch(setNext());
    } else {
      console.log('rd', errors);
      dispatch(setErrors(true));
    }
  }, [dispatch, errors, requisitionDetails, touched, values]);

  return (
    <Box minW="696px" marginTop="41px" h="558px">
      <FormControl>
        <Box marginBottom="16px">
          <FormLabel htmlFor="requestTitle" marginBottom="5px" style={labels}>
            Request Title
          </FormLabel>
          <Input
            type="text"
            id="requestTitle"
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange(e);
              dispatch(setTitle(e.target.value));
            }}
            defaultValue={values.requestTitle}
            borderColor={
              errors.requestTitle && touched.requestTitle && '#FF3D00'
            }
          />
          {errors.requestTitle && touched.requestTitle && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.requestTitle}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="owner" marginBottom="5px" style={labels}>
            Owner
          </FormLabel>
          <Input
            type="text"
            id="owner"
            defaultValue={values.owner}
            onChange={(e) => {
              handleChange(e);
              dispatch(setOwner(e.target.value));
            }}
            onBlur={handleBlur}
            borderColor={errors.owner && touched.owner && '#FF3D00'}
          />
          {errors.owner && touched.owner && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.owner}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="hiringManager" marginBottom="5px" style={labels}>
            Hiring Manager
          </FormLabel>
          <Input
            type="text"
            id="hiringManager"
            defaultValue={values.hiringManager}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            borderColor={
              errors.hiringManager && touched.hiringManager && '#FF3D00'
            }
          />
          {errors.hiringManager && touched.hiringManager && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.hiringManager}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="openings" marginBottom="5px" style={labels}>
            Number of openings
          </FormLabel>
          <Input
            type="number"
            min="1"
            max="9999"
            id="openings"
            defaultValue={values.openings}
            onChange={(e) => {
              handleChange(e);
              dispatch(setOpenings(e.target.value));
            }}
            onBlur={handleBlur}
            borderColor={errors.openings && touched.openings && '#FF3D00'}
          />
          {errors.openings && touched.openings && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.openings}
            </Text>
          )}
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="urgency" marginBottom="5px" style={labels}>
            Urgency
          </FormLabel>
          <Select
            name="urgency"
            id="urgency"
            style={options}
            iconColor="#8087A4"
            defaultValue={values.urgency}
            onChange={(e) => {
              handleChange(e);
              dispatch(setUrgency(e.target.value));
            }}
            onBlur={handleBlur}
          >
            <option disabled>Select urgency</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </Box>

        <Box marginBottom="16px">
          <FormLabel htmlFor="employmentType" marginBottom="5px" style={labels}>
            Employment Type
          </FormLabel>
          <Input
            type="text"
            id="employmentType"
            defaultValue={values.employmentType}
            onChange={(e) => {
              handleChange(e);
              dispatch(setEmploymentType(e.target.value));
            }}
            onBlur={handleBlur}
            borderColor={
              errors.employmentType && touched.employmentType && '#FF3D00'
            }
          />
          {errors.employmentType && touched.employmentType && (
            <Text style={{ ...labels, color: '#FF3D00' }} marginTop="6px">
              {errors.employmentType}
            </Text>
          )}
        </Box>
      </FormControl>
    </Box>
  );
};

export default RequisitionDetails;
