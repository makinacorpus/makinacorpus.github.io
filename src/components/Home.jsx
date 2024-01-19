import { Box } from '@mui/material';
import MakinaOSSLogo from '../icons/MakinaOSS-white.svg';
import data from '../data.json';
import PluginList from './PluginList';
import FooterA from './FooterA';
import FooterB from './FooterB';
import FooterC from './FooterC';

const arrayDedup = arr => Array.from(new Set(arr));
const categoryDetails = arrayDedup(data.map(cur => cur.categorie));

const App = () => (
  <>
    <Box width="100%" bgcolor="#20273c">
      <Box
        component="img"
        src={MakinaOSSLogo}
        alt="Makina OSS"
        mx="auto"
        display="block"
        py={10}
        sx={{
          maxWidth: {
            sm: '600px',
            xs: '85%',
          },
        }}
      />
    </Box>
    <Box width="100%" maxWidth="700px" mx="auto" my={10}>
      {categoryDetails.map(category => (
        <PluginList category={category} data={data} />
      ))}
    </Box>
    <Box
      className="footer"
      width="100%"
      bgcolor="#20273c"
    >
      <Box
        maxWidth="800px"
        marginX="auto"
        width="100%"
        sx={{
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          height: '100%',
          padding: '40px',
        }}
      >
        <FooterA />
        <FooterB />
        <FooterC />
      </Box>
    </Box>
  </>
);

export default App;
