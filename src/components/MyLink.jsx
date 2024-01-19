import { Box } from '@mui/material';
import Link from '@mui/material/Link';

const MyLink = ({ link, logo, src, description }) => (
  <Link
    display="flex"
    alignItems="center"
    fontSize="0.9em"
    paddingBottom="6px"
    paddingTop="6px"
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

export default MyLink;
