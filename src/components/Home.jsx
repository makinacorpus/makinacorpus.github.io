import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import PluginCard from './PluginCard';

import MakinaLogo from '../icons/MakinaOSS.svg';

import data from '../data.json';

const PluginList = ({ category }) => (
  <Stack spacing={3}>
    {data
      .filter(plugin => plugin.categorie === category)
      .map(plugin => (
        <PluginCard plugin={plugin} />
      ))}
  </Stack>
);

const arrayDedup = arr => Array.from(new Set(arr));
const categoryDetails = arrayDedup(data.map(cur => cur.categorie));

const App = () => (
  <>
    <Box component="img" src={MakinaLogo} alt="Makina OSS" width={600} mx="auto" display="block" py={10} />
    <Box maxWidth="700px" mx="auto" mb={10}>
      {categoryDetails.map(categories => (
        <>
          <Typography variant="h2">{categories}</Typography>
          <PluginList category={categories} />
        </>
      ))}
    </Box>
  </>
);

export default App;
