import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1
  }
}))

export default function AppBarOffset() {
  const classes = useStyles();
  return <div className={classes.offset} />;
}
