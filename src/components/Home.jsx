import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import data from '../data.json';

const MediaCard = ({ plugin }) => (
  <Card sx={{ display: 'flex' }}>
    <CardContent sx={{ width: '510px' }}>
      <Typography gutterBottom variant="h3">
        {plugin.name}
      </Typography>
      <Typography variant="h4" color="text.secondary">
        {plugin.description}
      </Typography>
    </CardContent>
    <CardActions>
      {plugin.github
        && (
          <Button href={plugin.github} startIcon={<GitHubIcon size="small" />}>
            Github
          </Button>
        )}
      {plugin.npm
        && (
          <Button href={`https://www.npmjs.com/package/${plugin.npm}`} startIcon={<DownloadIcon size="small" />}>
            {plugin.npm}
          </Button>
        )}
      {plugin.demo
        && (
          <Button href={plugin.demo} startIcon={<SlideshowIcon size="small" />}>

            demo
          </Button>
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
