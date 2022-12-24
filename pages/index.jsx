import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Container, Heading, Button } from '@chakra-ui/react';

import { setFormPage, setNext, setPrevious } from '../forms';

import Preview from '../components/Preview';
import JobDetails from '../components/JobDetails';
import InterviewSettings from '../components/InterviewSettings';
import RequisitionDetails from '../components/RequisitionDetails';

const navHeadersActive = {
  width: '169px',
  color: '#000000',
  fontFamily: `'Noto Sans', sans-serif`,
  fontWeight: 700,
  fontSize: '15px',
  lineHeight: '22px',
  letterSpacing: '0.01em',
  textTransform: 'capitalize',
  borderBottom: '1px solid #FF8282'
};

const navHeaders = {
  ...navHeadersActive,
  color: '#8087A4',
  fontWeight: 400,
  borderBottom: 'none'
};

const labels = {
  color: '#8087A4',
  fontFamily: `'Noto Sans', sans-serif`,
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '19px',
  letterSpacing: '0.01em'
};

const options = {
  ...labels,
  color: '#000000'
};

const page = ['requisitionDetails', 'jobDetails', 'interviewSettings'];

export default function Home() {
  const {
    previous,
    next,
    formPage,
    errors,
    requisitionDetails,
    jobDetails,
    interviewSettings
  } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [form, setForm] = useState(1);
  const [btn, setBtn] = useState('next');

  useEffect(() => {
    dispatch(setFormPage(form));
    btn === 'next' && dispatch(setNext(page[form - 1]));
    btn === 'previous' && dispatch(setPrevious());
  }, [dispatch, errors, form, btn]);

  const consoleLog = async () => {
    console.log('Requisition Details', requisitionDetails);
    console.log('Job Details', jobDetails);
    console.log('Interview Settings', interviewSettings);

    await new Promise((resolve) => setTimeout(resolve, 2500));

    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Multi page form</title>
        <meta
          name="description"
          content="Multi page form using RTK, Formik and Yup Libraries."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico" />
      </Head>
      <Container maxW="74.5rem" padding="0">
        <Heading
          as="h2"
          size="xl"
          style={{
            fontFamily: `'Sora', sans-serif`,
            fontWeight: 700,
            fontSize: '24px',
            letterSpacing: '0.02em',
            textTransform: 'capitalize',
            color: '#00162E'
          }}
          marginTop="40px"
          marginBottom="23px"
        >
          Create candidate requisition
        </Heading>
        <main>
          <Flex minWidth="max-content" alignItems="center" gap="9">
            <Flex
              paddingBottom="23px"
              alignItems="center"
              justifyContent="center"
              style={formPage === 1 ? navHeadersActive : navHeaders}
            >
              Requisition Details
            </Flex>
            <Flex
              paddingBottom="23px"
              alignItems="center"
              justifyContent="center"
              style={formPage === 2 ? navHeadersActive : navHeaders}
            >
              Job Details
            </Flex>
            <Flex
              paddingBottom="23px"
              alignItems="center"
              justifyContent="center"
              style={formPage === 3 ? navHeadersActive : navHeaders}
            >
              Interview Settings
            </Flex>
          </Flex>
          <hr />
          <Flex minW="100%" alignItems="center" justifyContent="space-between">
            {formPage === 1 ? (
              <RequisitionDetails labels={labels} options={options} />
            ) : formPage === 2 ? (
              <JobDetails labels={labels} />
            ) : (
              <InterviewSettings labels={labels} />
            )}
            <Preview labels={labels} />
          </Flex>
        </main>
        <footer>
          <Flex
            alignContent="center"
            justifyContent="center"
            gap="4"
            margin="43px 0"
          >
            <Button
              w="143px"
              h="38px"
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="12px"
              lineHeight="17px"
              letterSpacing="0.01em"
              color="#fff"
              backgroundColor="#8087A4"
              borderRadius="5px"
              isDisabled={!previous}
              onClick={() => {
                formPage === 1 ? setForm(1) : setForm(formPage - 1);
                setBtn('previous');
              }}
            >
              Previous
            </Button>
            <Button
              w="143px"
              h="38px"
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="12px"
              lineHeight="17px"
              letterSpacing="0.01em"
              color="#fff"
              backgroundColor="#E74861"
              borderRadius="5px"
              isDisabled={!next}
              type="submit"
              onClick={() => {
                formPage === 3
                  ? (setForm(3), consoleLog())
                  : setForm(formPage + 1);
                setBtn('next');
              }}
            >
              {formPage === 3 ? 'Submit' : 'Next'}
            </Button>
          </Flex>
        </footer>
      </Container>
    </>
  );
}
