import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Euclid, sans-serif',
  },
  components: {},
  palette: {
    primary: {
      main: '#007994',
    },
    secondary: {
      main: '#262842',
    },
    error: {
      main: '#D6331F',
    },
    success: {
      main: '#2DB77B',
    },
    warning: {
      main: '#FFA530',
    },
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        border: 'none',
        outline: 'none',
        textTransform: 'none',
        borderRadius: 12,
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: theme.typography.button.fontFamily,
        fontSize: theme.typography.button.fontSize,
        padding: '10px 16px',
      },
      outlined: {
        background: '#FFFFFF',
        color: 'black',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: 'none',
        '&:hover': {
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
        '&:active': {
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
        '&:disabled': {
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
        '&:focused': {
          background: '#FFFFFF',
          color: theme.palette.secondary.main,
        },
      },
    },
  },
};

export default theme;
