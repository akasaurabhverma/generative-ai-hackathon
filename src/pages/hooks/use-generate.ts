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

  /**Chat-gpt */

  const generate = (props: ProductDetails) => {
    setData({
      ...initialState,
      loading: true,
    });
    const responses = Promise.all([
      handleGetDescription(props.productDescription),
      removeBG(props.image as File),
      replaceBG(props.image as File, props.prompt),
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

const IMAGE_FILE = 'image_file';
const PROMPT = 'prompt';

function removeBG(image: File): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append(IMAGE_FILE, image);
    // formData.append('size', 'auto');
    fetch(import.meta.env.VITE_RM_API_URL, {
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
}

function replaceBG(image: File, prompt: string): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append(IMAGE_FILE, image);
    formData.append(PROMPT, prompt);

    fetch(import.meta.env.VITE_RG_API_KEY, {
      method: 'POST',
      headers: {
        'x-api-key': import.meta.env.VITE_RG_API_KEY,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then(URL.createObjectURL)
      .then(resolve)
      .catch(reject);
  });
}
