import { Drawer, IconButton, Divider } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { drawerWidth } from '../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  })
);

interface IProps {
  onDrawerClose: () => void;
  drawerOpen: boolean;
}

const Menu = (props: IProps) => {
  const { onDrawerClose, drawerOpen } = props;
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
    </Drawer>
  );
};

export default Menu;
