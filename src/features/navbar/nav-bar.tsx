import {
  AccountCircleOutlined,
  NotificationAddOutlined,
} from '@mui/icons-material';
import {Box, IconButton} from '@mui/material';
import {logo} from './logo';

export const Navbar = () => {
  return (
    <Box
      height={80}
      display="flex"
      alignItems={'center'}
      justifyContent="space-between"
      mb={4}
    >
      <Box
        width="150px"
        height={'100%'}
        ml={5}
        sx={{cursor: 'pointer'}}
        onClick={() => window.location.reload()}
      >
        <img src={logo} alt="" width={'100%'} height="100%" />
      </Box>

      <Box mr={5}>
        <IconButton>
          <NotificationAddOutlined fontSize="large" />
        </IconButton>
        <IconButton>
          <AccountCircleOutlined fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};
