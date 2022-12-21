import { Flex, Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Preview = ({ labels }) => {
  const { requisitionDetails } = useSelector((state) => state.form);
  return (
    <Box
      padding="10px 25px"
      width="442px"
      height="558px"
      marginTop="36px"
      marginLeft="45px"
      backgroundColor="#F8F9FB"
      boxShadow="-24px -24px 34px #FFFFFF, 24px 24px 34px rgba(128, 135, 164, 0.13)"
      borderRadius="10px"
      position="relative"
    >
      <Text
        fontFamily="'Noto Sans', sans-serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="13px"
        lineHeight="18px"
        textTransform="capitalize"
        color="#37446E"
      >
        Draft
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right="0"
        top="0"
        w="121px"
        h="28px"
        backgroundColor="#E74861"
        borderRadius="0px 10px 0px 0px"
      >
        <Text
          fontFamily="'Noto Sans', sans-serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="13px"
          lineHeight="18px"
          textAlign="center"
          textTransform="capitalize"
          color="#fff"
        >
          Preview
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="0 21px"
        w="391px"
        h="63px"
        marginTop="72px"
        background="#37446E"
        boxShadow="0px 34px 54px -20px rgba(128, 135, 164, 0.53)"
        borderRadius="7px"
      >
        <Text
          fontFamily="'Noto Sans', sans-serif"
          fontWeight="600"
          fontSize="15px"
          lineHeight="20px"
          textTransform="capitalize"
          color="#fff"
        >
          {requisitionDetails?.requestTitle || 'Request Title'}
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="68px"
          fontFamily="'Noto Sans', sans-serif"
          fontWeight="300"
          fontSize="10px"
          lineHeight="14px"
          textTransform="uppercase"
          color="#fff"
        >
          openings
          <Text
            fontFamily="'Noto Sans', sans-serif"
            fontWeight="600"
            fontSize="15px"
            lineHeight="20px"
            textTransform="capitalize"
            color="#fff"
          >
            {requisitionDetails?.openings || 0}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        padding="23px 17px"
        w="392px"
        h="193px"
        marginTop="28px"
        backgroundColor="#FFFFFF"
        border="1px solid rgba(0, 0, 0, 0.04)"
        borderRadius="10px"
      >
        <Text
          fontFamily="'Noto Sans', sans-serif"
          fontWeight="600"
          fontSize="16px"
          lineHeight="18px"
          textTransform="uppercase"
          color="#37446E"
        >
          Requisitons details
        </Text>
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <Flex flexDirection="column" justifyContent="center">
            <Text
              style={{
                ...labels,
                textTransform: 'uppercase',
                fontWeight: '300',
                fontSize: '10px',
                lineHeight: '14px'
              }}
            >
              owner
            </Text>
            <Text
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="13px"
              fontStyle="italic"
              lineHeight="18px"
              letterSpacing="0.05em"
              color="#37446E"
            >
              {requisitionDetails?.owner || '-'}
            </Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="center" w="60px">
            <Text
              style={{
                ...labels,
                textTransform: 'uppercase',
                fontWeight: '300',
                fontSize: '10px',
                lineHeight: '14px'
              }}
            >
              Urgency
            </Text>
            <Text
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="13px"
              lineHeight="18px"
              letterSpacing="0.05em"
              color="#37446E"
            >
              {requisitionDetails?.urgency === 'Select urgency'
                ? '-'
                : requisitionDetails?.urgency}
            </Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="center" w="97px">
            <Text
              style={{
                ...labels,
                textTransform: 'uppercase',
                fontWeight: '300',
                fontSize: '10px',
                lineHeight: '14px'
              }}
            >
              Employment type
            </Text>
            <Text
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="13px"
              lineHeight="18px"
              letterSpacing="0.05em"
              color="#37446E"
            >
              {requisitionDetails?.employmentType || '-'}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Text
              style={{
                ...labels,
                textTransform: 'uppercase',
                fontWeight: '300',
                fontSize: '10px',
                lineHeight: '14px'
              }}
            >
              Gender preference
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Text
              color="#37446E"
              fontFamily="'Noto Sans', sans-serif"
              fontWeight="500"
              fontSize="13px"
              lineHeight="18px"
              letterSpacing="0.05em"
            >
              No Preference
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Preview;
