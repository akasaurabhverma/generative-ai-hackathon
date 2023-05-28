import {AutoFixHigh} from '@mui/icons-material';
import {Autocomplete, Box, Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {GeneratedData} from '../features/generated/generated-data';
import {FullScreenOverlayLoader, InputField} from '../features/ui';
import {UploadBox} from '../features/upload';
import {gradient} from '../theme-customization';
import {useGenerate} from './hooks';
import {useSnackbar} from 'notistack';
export const categoryList = [
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

export interface ProductDetails {
  image: File | null;
  productId: string;
  productCategory: null | string;
  productDescription: string;
}

export const AddProduct = () => {
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null | undefined>(
    null
  );

  const {enqueueSnackbar} = useSnackbar();
  /**custom hooks */
  const {generate, data, error, loading} = useGenerate();
  console.log(error);

  const [generatedProductDetails, generatedImage] = data || [];

  const [productDetails, setDetails] = useState<ProductDetails>({
    productId: '',
    productCategory: null,
    productDescription: '',
    image: null,
  });

  console.log(data);
  return (
    <>
      {loading && <FullScreenOverlayLoader />}
      {!data && (
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
            <Typography color="primary" fontWeight={600} variant="h6" mb={1}>
              Product Images
            </Typography>

            <Box display={'flex'} id="upload-and-preview">
              <UploadBox
                onFileUpload={(files: FileList) => {
                  const image = files[0];
                  setDetails({
                    ...productDetails,
                    image,
                  });

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
                <Typography
                  color="primary"
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                >
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
                <Typography
                  color="primary"
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                >
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
              <Typography color="primary" variant="h6" fontWeight={600} mb={1}>
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

            <Box mt={3}>
              <Button
                startIcon={<AutoFixHigh />}
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.5,
                  mt: 1,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: 15,

                  background: gradient.primary,
                }}
                onClick={() => {
                  for (let product of Object.keys(productDetails)) {
                    //@ts-ignore
                    if (!productDetails[product])
                      return enqueueSnackbar({
                        message: 'please fill the required field ',
                        variant: 'error',
                      });
                  }

                  generate(productDetails);
                }}
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
            <Typography color="primary" fontWeight={600} variant="h6" mb={1}>
              Generate 3D model
            </Typography>
            <UploadBox
              onFileUpload={(files: FileList) => {
                return files;
                // var oFReader = new FileReader();
                // oFReader.readAsDataURL(files[0] as Blob);
                // oFReader.onload = function (oFREvent) {
                //   setImgSrc(oFREvent?.target?.result);
                // };
              }}
            />
          </Box>
        </Box>
      )}
      {data && (
        <GeneratedData
          category={productDetails.productCategory as string}
          description={generatedProductDetails.description}
          heading={generatedProductDetails.heading}
          key_points={generatedProductDetails.keyPoints}
          image={generatedImage}
          productID={productDetails.productId}
        />
      )}
    </>
  );
};
