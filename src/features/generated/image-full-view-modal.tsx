import {Dialog, DialogContent} from '@mui/material';

interface ImageViewerProps {
  onClose: () => void;
  image: string;
}

export const ImageViewer = (props: ImageViewerProps) => {
  return (
    <Dialog open={true} maxWidth="sm" onClose={props.onClose}>
      <DialogContent>
        <img src={props.image} />
      </DialogContent>
    </Dialog>
  );
};
