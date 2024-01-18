import { Box } from '@mui/material';
import Link from '@mui/material/Link';

const Lien = ({ link, logo, src, description }) => (
  <Link
    display="flex"
    alignItems="center"
    paddingBottom="10px"
    paddingTop="10px"
    href={link}
    variant="h7"
    underline="hover"
    sx={{
      color: 'white',
    }}
  >
    {src && (
      <Box
        component="img"
        className="img"
        src={src}
        alt={logo}
        width={25}
        paddingRight="7px"
      />
    )}
    {description}
  </Link>
);

export default Lien;
