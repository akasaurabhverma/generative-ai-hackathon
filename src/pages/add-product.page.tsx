import {AutoFixHigh} from '@mui/icons-material';
import {Autocomplete, Box, Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {InputField} from '../features/ui';
import {UploadBox} from '../features/upload';
import {gradient} from '../theme-customization';

const categoryList = [
  'Electronics and Gadgets',
  'Fashion and Apparel',
  'Home and Kitchen',
  'Beauty and Personal Care',
  'Health and Fitness',
  'Books and Stationery',
  'Sports and Outdoor',
  'Automotive and Accessories',
  'Furniture and Decor',
  'Jewelry and Accessories',
  'Tools and Home Improvement',
  'Arts and Crafts',
  'Others',
];

export const AddProduct = () => {
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null | undefined>(
    null
  );

  const [productDetails, setDetails] = useState<{
    productId: string;
    productCategory: null | string;
    productDescription: string;
  }>({
    productId: '',
    productCategory: null,
    productDescription: '',
  });
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
        <Typography color="primary" fontWeight={600} variant="h6">
          Product Images
        </Typography>

        <Box display={'flex'} id="upload-and-preview">
          <UploadBox
            onFileUpload={(files: FileList) => {
              const image = files[0];

              /**BG remove code */
              const formData = new FormData();
              formData.append('image_file', image);
              formData.append('size', 'auto');
              fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                headers: {
                  'X-Api-Key': import.meta.env.VITE_RM_API_KEY,
                },
                body: formData,
              })
                .then((res) => res.blob())
                .then(URL.createObjectURL)
                .then(console.log)
                .catch(console.error);

              /**file preview */
              var oFReader = new FileReader();
              oFReader.readAsDataURL(files[0] as Blob);
              oFReader.onload = function (oFREvent) {
                setImgSrc(oFREvent?.target?.result);
              };
            }}
          />

          <Box
            width="100px"
            height="100px"
            // border="1px solid red"
            borderRadius={1}
            bgcolor="#eee"
            mx={1}
            sx={{
              backgroundImage: `url(${imgSrc})`,
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
            <InputField
              value={productDetails.productId}
              onChange={(e) =>
                setDetails({
                  ...productDetails,
                  productId: e.target.value,
                })
              }
            />
          </Box>
          <Box flexBasis={'49%'}>
            <Typography color="primary" variant="h6" fontWeight={600}>
              Category
            </Typography>
            <Box>
              <Autocomplete
                value={productDetails.productCategory}
                onChange={(_e, value) =>
                  setDetails({
                    ...productDetails,
                    productCategory: value,
                  })
                }
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
          <Typography color="primary" variant="h6" fontWeight={600}>
            Describe about your product
          </Typography>
          <InputField
            multiline
            rows={3}
            value={productDetails.productDescription}
            onChange={(e) =>
              setDetails({
                ...productDetails,
                productDescription: e.target.value,
              })
            }
          />
        </Box>

        <Box mt={1}>
          <Button
            startIcon={<AutoFixHigh />}
            variant="outlined"
            sx={{
              px: 3,
              py: 1.5,
              mt: 1,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 15,

              '&:hover': {background: gradient.primary, color: '#fff'},
            }}
            onClick={() => console.log(productDetails)}
          >
            Generate
          </Button>
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
        <UploadBox
          onFileUpload={(files: FileList) => {
            // var oFReader = new FileReader();
            // oFReader.readAsDataURL(files[0] as Blob);
            // oFReader.onload = function (oFREvent) {
            //   setImgSrc(oFREvent?.target?.result);
            // };
          }}
        />
      </Box>
    </Box>
  );
};
