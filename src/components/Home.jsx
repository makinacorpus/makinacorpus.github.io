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
      <Typography gutterBottom variant="h5" component="div">
        {plugin.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {plugin.description}
      </Typography>
    </CardContent>
    <CardActions>
      {plugin.github
        && (
          <Button href={plugin.github}>
            <GitHubIcon size="small" />
            Github
          </Button>
        )}
      {plugin.npm
        && (
          <Button href={`https://www.npmjs.com/package/${plugin.npm}`}>
            <DownloadIcon size="small" />
            {plugin.npm}
          </Button>
        )}
      {plugin.demo
        && (
          <Button href={plugin.demo}>
            <SlideshowIcon size="small" />
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

const categoryDetails = [
  {
    title: 'Leaflet',
  },
  {
    title: 'Django',
  },
];

const App = () => (
  <>
    <h2>Leaflet</h2>
    <PluginList category="Leaflet" />
    <h2>Django</h2>
    <PluginList category="Django" />
  </>
);

export default App;
