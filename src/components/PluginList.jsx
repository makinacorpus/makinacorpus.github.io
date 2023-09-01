import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Collapse, IconButton, Stack, Tooltip } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import PluginCard from './PluginCard';

const PluginList = ({ category, data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const plugins = data.filter(plugin => plugin.categorie === category);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h2">{category}</Typography>
        <Tooltip title={isOpen ? `Hide ${plugins.length} elements` : `Show ${plugins.length} elements`}>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Tooltip>
      </Stack>
      <Collapse in={isOpen}>
        <Stack spacing={3}>
          {plugins.map(plugin => (
            <PluginCard plugin={plugin} />
          ))}
        </Stack>
      </Collapse>
    </>
  );
};

export default PluginList;
