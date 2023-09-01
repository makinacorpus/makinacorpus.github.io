import { Box } from '@mui/material';
import MakinaLogo from '../icons/MakinaOSS-white.svg';

import data from '../data.json';
import PluginList from './PluginList';

const arrayDedup = arr => Array.from(new Set(arr));
const categoryDetails = arrayDedup(data.map(cur => cur.categorie));

const App = () => (
  <>
    <Box width="100%" bgcolor="#20273c">
      <Box component="img" src={MakinaLogo} alt="Makina OSS" width={600} mx="auto" display="block" py={10} />
    </Box>
    <Box maxWidth="700px" mx="auto" my={10}>
      {categoryDetails.map(category => (
        <PluginList category={category} data={data} />
      ))}
    </Box>
  </>
);

export default App;
