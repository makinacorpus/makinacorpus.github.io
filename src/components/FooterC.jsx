import { Box } from '@mui/material';
import Lien from './Link';

const FooterC = () => (
  <Box
    width="100%"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Lien link="https://github.com/makinacorpus/makinacorpus.github.io" description="Edit this page" />
    <Lien link="https://github.com/orgs/makinacorpus/repositories?type=source" description="Repositories list" />
  </Box>
);

export default FooterC;
