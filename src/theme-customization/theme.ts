import {createTheme} from '@mui/material';
import {purple} from '@mui/material/colors';
import {DefaultTransition} from './transition-component';

export const gradient = {
  primary: 'linear-gradient(90deg, #4229A9 0%, #9827CE 102.6%)',
};

export const fontColor = {
  primary: '#7A0494',
  secondary: '#E4B5EE',
};
export const backgroundColor = {
  primary: '#730293',
  secondary: '#FEF5FD',
};

/**don't change the color in this theme*/
export const theme = createTheme({
  palette: {
    primary: {
      main: '#730293',
    },
    secondary: {
      main: '#FEF5FD',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        color: 'primary',
        sx: {
          textTransform: 'none',
          fontWeight: '700',
          py: 1.5,
          px: 2,
        },
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: purple[50],
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
        color: 'primary',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: 15,
          color: 'MenuText',
          fontWeight: 600,
          mb: 0.5,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
    MuiMenu: {
      defaultProps: {
        PaperProps: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            borderRadius: '6px',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        TransitionComponent: DefaultTransition,
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          fontSize: '10px',
          // padding: '0px',
          // margin: '0px',
        },
        titleWrap: {
          padding: '0px 6px',
          margin: '0px',
        },
        actionIcon: {
          margin: '2px 2px -4px 0',
        },
        positionBottom: {
          background: 'none',
          alignItems: 'flex-end',
          marginBottom: 6,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    MuiTreeItem: {
      styleOverrides: {
        content: {
          boxSizing: 'border-box',
          flexDirection: 'row-reverse',
        },
        label: {
          padding: '4px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&::before': {
            backgroundColor: 'unset',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          margin: 'unset',
          minHeight: 'unset',
        },
        content: {
          margin: 'unset',
          minHeight: 'unset',
          '&.Mui-expanded': {
            margin: 'unset',
            minHeight: 'unset',
          },
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'white',
            backgroundColor: backgroundColor.primary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            background: 'white',
            borderRadius: '8px 8px 0 0',
          },
          margin: '0 8px',
          padding: '12px',
          fontWeight: 500,
          minWidth: 'unset',
          minHeight: 'unset',
        },
      },
    },
  },
});
