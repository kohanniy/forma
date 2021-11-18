import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { drawerWidth } from '../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
  })
);

interface IProps {
  onDrawerOpen: () => void;
  drawerOpen: boolean;
}

const Header = (props: IProps) => {
  const { onDrawerOpen, drawerOpen } = props;

  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
