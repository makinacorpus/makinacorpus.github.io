import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { IconButton, Stack, Tooltip } from '@mui/material';
import NpmIcon from '../icons/NpmIcon';

const PluginCard = ({ plugin }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: {
        sm: 'row',
        xs: 'column',
      },
    }}
  >
    <CardContent sx={{ width: '100%' }}>
      <Typography gutterBottom variant="h5">
        {plugin.name}
      </Typography>
      <Typography variant="body" color="text.secondary">
        {plugin.description}
      </Typography>
      <Stack
        direction="row"
        spacing={{
          sm: 1,
          xs: 0,
        }}
        mt={2}
        sx={{
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
        }}
      >
        {plugin.github && (
          <a href={plugin.github}>
            <img
              alt="npm"
              src={`https://img.shields.io/github/stars${
                new URL(plugin.github).pathname
              }?style=flat&logo=github&logoColor=white&labelColor=8a32a9&color=555555`}
            />
          </a>
        )}
        {plugin.npm && (
          <>
            <a href={`https://www.npmjs.com/package/${plugin.npm}`}>
              <img
                alt="npm"
                src={`https://img.shields.io/npm/v/${plugin.npm}?style=flat&logo=npm&logoColor=white&label=${plugin.npm}&labelColor=CB3837&color=555555`}
              />
            </a>
            <a href={`https://www.npmjs.com/package/${plugin.npm}`}>
              <img
                alt="npm"
                src={`https://img.shields.io/npm/dt/${plugin.npm}?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=555555`}
              />
            </a>
          </>
        )}
      </Stack>
    </CardContent>
    <CardActions>
      {plugin.github && (
        <Tooltip title="Github">
          <IconButton href={plugin.github}>
            <GitHubIcon size="small" />
          </IconButton>
        </Tooltip>
      )}
      {plugin.npm && (
        <Tooltip title={plugin.npm}>
          <IconButton href={`https://www.npmjs.com/package/${plugin.npm}`}>
            <NpmIcon size="small" />
          </IconButton>
        </Tooltip>
      )}
      {plugin.demo && (
        <Tooltip title="Demo">
          <IconButton href={plugin.demo}>
            <SlideshowIcon size="small" />
          </IconButton>
        </Tooltip>
      )}
    </CardActions>
  </Card>
);

export default PluginCard;
