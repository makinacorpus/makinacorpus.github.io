import { Box } from '@mui/material';
import Lien from './Link';
import MakinaLogo from '../favicon.svg';
import GithubLogo from '../icons/github.svg';

const FooterB = () => (
  <Box
    className="BoxB"
    width="100%"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightStyle: {
        sm: 'solid',
        xs: 'unset',
      },
      borderLeftStyle:  {
        sm: 'solid',
        xs: 'unset',
      },
      borderTopStyle: {
        sm: 'unset',
        xs: 'solid',
      },
      borderBottomStyle: {
        sm: 'unset',
        xs: 'solid',
      },
      borderColor: '#d0dd2a',
    }}
  >
    <Lien link="https://makinacorpus.com" logo="Makina Corpus logo" src={MakinaLogo} description="Makina Corpus" />
    <Lien link="https://github.com/makinacorpus" logo="Github logo" src={GithubLogo} description="Github" />
  </Box>
);

export default FooterB;
