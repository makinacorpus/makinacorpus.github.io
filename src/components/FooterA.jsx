import { Box } from '@mui/material';
import MakinaOSSLogo from '../icons/MakinaOSS-white.svg';

const FooterA = () => (
  <Box
    width="100%"
    fontSize="0.9em"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: {
        sm: '0',
        xs: '15px',
      },
      marginBottom: {
        sm: '0',
        xs: '15px',
      },
    }}
  >
    <Box
      component="img"
      className="img"
      src={MakinaOSSLogo}
      alt="Makina OSS Logo"
      width={150}
      paddingBottom="0.7em"
      paddingRight="7px"
    />
    2024 - Makina Corpus
  </Box>
);

export default FooterA;
