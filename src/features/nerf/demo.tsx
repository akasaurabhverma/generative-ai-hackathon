import {Button, Dialog, IconButton} from '@mui/material';
import {Close} from '@mui/icons-material';
import {useState} from 'react';

export const DemoModel: React.FC = () => {
  const [view, setView] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setView((view) => !view);
        }}
      >
        Show 3D Demo Model
      </Button>
      <Dialog open={view} fullScreen>
        <IconButton
          sx={{position: 'absolute', m: 2, right: 0, top: 0, zIndex: 100}}
          onClick={() => {
            setView((view) => !view);
          }}
        >
          <Close />
        </IconButton>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <model-viewer
            // src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
            src="/demo_model.glb"
            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls
            style={{width: '100vw', height: '100vh'}}
          />
        }
      </Dialog>
    </>
  );
};
