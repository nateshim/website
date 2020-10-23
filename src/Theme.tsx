import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 340,
          sm: 375,
          md: 760,
          lg: 1280,
          xl: 1920,
        },
      },
    typography: {
        fontFamily: 'Montserrat',
        
    }
});

export default theme;