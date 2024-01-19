import { Box } from '@mui/material';
import MyLink from './MyLink';
import MakinaLogo from '../favicon.svg';
import GithubLogo from '../icons/github.svg';

const FooterB = () => (
  <Box
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
      borderWidth: '1px',
    }}
  >
    <MyLink link="https://makinacorpus.com" logo="Makina Corpus logo" src={MakinaLogo} description="Makina Corpus" />
    <MyLink link="https://github.com/makinacorpus" logo="Github logo" src={GithubLogo} description="Github" />
  </Box>
);

export default FooterB;
