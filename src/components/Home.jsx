import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { IconButton, Stack, Tooltip } from '@mui/material';
import NpmIcon from '../icons/NpmIcon';
import data from '../data.json';

const MediaCard = ({ plugin }) => (
  <Card sx={{ display: 'flex' }}>
    <CardContent sx={{ width: '100%' }}>
      <Typography gutterBottom variant="h5">
        {plugin.name}
      </Typography>
      <Typography variant="body" color="text.secondary">
        {plugin.description}
      </Typography>
      <Stack direction="row" spacing={1} mt={2}>
        {plugin.github && (
          <a href={plugin.github}>
            <img alt="npm" src={`https://img.shields.io/github/stars${(new URL(plugin.github)).pathname}?style=flat&logo=github&logoColor=white&labelColor=8a32a9&color=555555`} />
          </a>
        )}
        {plugin.npm && (
          <>
            <a href={`https://www.npmjs.com/package/${plugin.npm}`}>
              <img alt="npm" src={`https://img.shields.io/npm/v/${plugin.npm}?style=flat&logo=npm&logoColor=white&label=${plugin.npm}&labelColor=CB3837&color=555555`} />
            </a>
            <a href={`https://www.npmjs.com/package/${plugin.npm}`}>
              <img alt="npm" src={`https://img.shields.io/npm/dt/${plugin.npm}?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=555555`} />
            </a>
          </>
        )}
      </Stack>
    </CardContent>
    <CardActions>
      {plugin.github
        && (
          <Tooltip title="Github">
            <IconButton href={plugin.github}>
              <GitHubIcon size="small" />
            </IconButton>
          </Tooltip>
        )}
      {plugin.npm
        && (
          <Tooltip title={plugin.npm}>
            <IconButton href={`https://www.npmjs.com/package/${plugin.npm}`}>
              <NpmIcon size="small" />
            </IconButton>
          </Tooltip>
        )}
      {plugin.demo
        && (
          <Tooltip title="Demo">
            <IconButton href={plugin.demo}>
              <SlideshowIcon size="small" />
            </IconButton>
          </Tooltip>
        )}
    </CardActions>
  </Card>
);

const PluginList = ({ category }) => (
  data.filter(plugin => plugin.categorie === category).map(
    plugin => <MediaCard plugin={plugin} />,
  )
);

const arrayDedup = arr => Array.from(new Set(arr));
const categoryDetails = arrayDedup(data.map(cur => cur.categorie));

const App = () => (
  <>
    {categoryDetails.map(categories => (
      <>
        <Typography variant="h2">{categories}</Typography>
        <PluginList category={categories} />
      </>
    ))}
  </>
);

export default App;
