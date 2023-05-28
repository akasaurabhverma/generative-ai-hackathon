import {CircularProgress, Dialog, DialogContent} from '@mui/material';

export const FullScreenOverlayLoader = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <CircularProgress size={50} />
      </DialogContent>
    </Dialog>
  );
};
