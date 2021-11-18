import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

interface IProps {
  drawerOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const Main = (props: IProps) => {
  const { drawerOpen, children } = props;

  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawerOpen,
      })}
    >
      {children}
    </main>
  );
};

export default Main;
