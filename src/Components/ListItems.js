import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MusicNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Venha Medo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MusicNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Respirar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MusicNoteIcon />
      </ListItemIcon>
      <ListItemText primary="10%" />
    </ListItem>
  </div>
);

