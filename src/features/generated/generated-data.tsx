import {
  ContactsOutlined,
  ContentCopyOutlined,
  Download,
  RefreshOutlined,
  ThreeDRotationOutlined,
  ViewInArOutlined,
} from '@mui/icons-material';
import {Autocomplete, Box, Button, TextField, Typography} from '@mui/material';
import {Children} from 'react';
import {categoryList} from '../../pages';
import {Product} from '../description';
import {InputField} from '../ui';

interface GeneratedDataProps extends Product {
  image: string;
  productID: string;
  category: string;
}

export const GeneratedData = (props: GeneratedDataProps) => {
  return (
    <Box
      maxWidth="lg"
      margin={'auto'}
      display="flex"
      justifyContent={'space-between'}
      //   flexWrap={'wrap'}
      //   border="1px solid red"
      flexDirection={{xs: 'column', lg: 'row'}}
    >
      <Box
        id="product-images"
        flexBasis={{sm: '100%', lg: '50%'}}
        // border="1px solid red"
      >
        <Box display={'flex'} alignItems="center">
          <Typography color="primary" variant="h6" fontWeight={600}>
            Product Images
          </Typography>
          <Button startIcon={<Download />}>Download</Button>
          <Button startIcon={<ContactsOutlined />}>Mockup</Button>
        </Box>

        <Box display={'flex'} id="upload-and-preview">
          <Box
            width="100px"
            height="100px"
            // border="1px solid red"
            borderRadius={1}
            bgcolor="#eee"
            mx={1}
            sx={{
              backgroundImage: `url(${props.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></Box>
          <Box
            width="100px"
            height="100px"
            // border="1px solid red"
            borderRadius={1}
            bgcolor="#eee"
            mx={1}
          ></Box>
          <Box
            width="100px"
            height="100px"
            // border="1px solid red"
            borderRadius={1}
            bgcolor="#eee"
            mx={1}
          ></Box>
        </Box>
        <Box display="flex" justifyContent={'space-between'} mt={2}>
          <Box flexBasis={'49%'}>
            <Typography color="primary" variant="h6" fontWeight={600}>
              Product ID
            </Typography>
            <InputField value={props.productID} readOnly />
          </Box>
          <Box flexBasis={'49%'}>
            <Typography color="primary" variant="h6" fontWeight={600}>
              Category
            </Typography>
            <Box>
              <Autocomplete
                readOnly
                value={props.category}
                disablePortal
                id="combo-box-demo"
                options={categoryList}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </Box>
        </Box>

        <Box mt={2}>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <Typography color="primary" variant="h6" fontWeight={600}>
              Describe about your product
            </Typography>
            <Button startIcon={<RefreshOutlined />}>Regenerate</Button>
            <Button startIcon={<ContentCopyOutlined />}>Copy</Button>
          </Box>

          <Box
            maxHeight={'250px'}
            overflow="scroll"
            border="1px solid #eee"
            p={1}
            borderRadius={1}
          >
            <Typography variant="h6" fontWeight={600}>
              {props.heading}
            </Typography>

            <Typography>{props.description}</Typography>

            <ul>
              {Children.toArray(
                props.key_points?.map((point) => <li> {point}</li>)
              )}
            </ul>
          </Box>
        </Box>
      </Box>
      <Box
        id="Generate-3D-model"
        flexBasis={{sm: '100%', lg: '50%'}}
        // border="1px solid red"
      >
        <Typography color="primary" fontWeight={600} variant="h6">
          Generate 3D model
        </Typography>
        <Box display={'flex'} alignItems="center">
          <Box
            width="100px"
            height="100px"
            // border="1px solid red"
            borderRadius={1}
            bgcolor="#eee"
            mx={1}
            sx={{
              backgroundImage: `url(${props.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></Box>
          <Box>
            <Typography color="primary" ml={1}>
              View In
            </Typography>

            <Button startIcon={<ThreeDRotationOutlined />}>3D</Button>
            <Button startIcon={<ViewInArOutlined />}>AR</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// {
//     "heading": "Grab attention with our stunning banners",
//     "description": "Our banners are the perfect way to showcase your brand and products. With eye-catching designs and high-quality printing, your message will stand out and grab the attention of potential customers.",
//     "keyPoints": [
//         "Customizable designs to fit your brand",
//         "High-quality printing for a professional look",
//         "Durable materials for long-lasting use",
//         "Easy to hang and display in a variety of settings"
//     ]
// }
