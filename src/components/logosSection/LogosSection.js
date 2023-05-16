import logos from '../../assets/logos.png';
import logosSmallSc from '../../assets/logosSmall.png';
import { Box, SimpleGrid } from '@chakra-ui/react';

export default function LogosSection() {
  return (
    <Box
      as="section"
      bg="gray.50"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      id="footer"
    >
      <SimpleGrid p="50px" mt="30px">
        <Box
          display={{
            xl: 'block',
            base: 'none',
          }}
        >
          <img alt="Logos" src={logos} />
        </Box>
        <Box
          display={{
            base: 'block',
            xl: 'none',
          }}
        >
          <img alt="Logos" src={logosSmallSc} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
