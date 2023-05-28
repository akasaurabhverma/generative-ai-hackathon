import {useState} from 'react';
import {handleGetDescription} from '../../features/description';
import {ProductDetails} from '../add-product.page';

interface ResponseGenerateData {
  loading: boolean;
  data: any;
  error: any;
}
const initialState: ResponseGenerateData = {
  data: null,
  error: null,
  loading: false,
};

export const useGenerate = () => {
  const [responseGenerateData, setData] =
    useState<ResponseGenerateData>(initialState);

  /**remove background */
  const removeBG = (image: File): Promise<string | undefined> =>
    new Promise((resolve, reject) => {
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
        .then(resolve)
        .catch(reject);
    });

  /**Chat-gpt */

  const generate = (props: ProductDetails) => {
    setData({
      ...initialState,
      loading: true,
    });
    const responses = Promise.all([
      handleGetDescription(props.productDescription),
      removeBG(props.image as File),
    ]);

    responses
      .then((res) => {
        setData({
          ...initialState,
          data: res,
        });
      })
      .catch((err) =>
        setData({
          ...initialState,
          error: err,
        })
      );
  };

  return {generate, ...responseGenerateData};
};
