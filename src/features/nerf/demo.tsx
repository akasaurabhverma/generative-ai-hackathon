import {Dialog, IconButton} from '@mui/material';
import {Close} from '@mui/icons-material';

interface DemoModelProps {
  onClose: () => void;
}
export const DemoModel: React.FC<DemoModelProps> = (props) => {
  return (
    <>
      <Dialog open={true} fullScreen>
        <IconButton
          sx={{position: 'absolute', m: 2, right: 0, top: 0, zIndex: 100}}
          onClick={() => {
            props.onClose();
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
