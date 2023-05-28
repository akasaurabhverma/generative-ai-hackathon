import {FileUploadOutlined} from '@mui/icons-material';
import {Box, Button, Typography} from '@mui/material';

interface UploadBoxProps {
  onFileUpload: (files: FileList) => void;
  allMultipleUpload?: boolean;
}

export const UploadBox = (props: UploadBoxProps) => {
  return (
    <Button
      color="primary"
      aria-label="upload picture"
      component="label"
      variant="outlined"
    >
      <input
        hidden
        accept="image/*"
        type="file"
        onChange={(e) => {
          e.target.files?.length &&
            props.onFileUpload(e.target.files as FileList);
        }}
        multiple={Boolean(props.allMultipleUpload)}
      />
      <Box textAlign={'center'}>
        <FileUploadOutlined />
        <Typography>Upload images</Typography>
      </Box>
    </Button>
  );
};
