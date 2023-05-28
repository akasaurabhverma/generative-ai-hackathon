const LUMA_API_KEY = import.meta.env.VITE_NERF_API_KEY;

export const getCredits = () => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `luma-api-key=${LUMA_API_KEY}`);

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    mode: 'no-cors',
  };

  fetch(
    'https://webapp.engineeringlumalabs.com/api/v2/capture/credits',
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export const createCapture = (title: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `luma-api-key=${LUMA_API_KEY}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append('title', title);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  fetch('https://webapp.engineeringlumalabs.com/api/v2/capture', requestOptions)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export const uploadCapture = (file: any) => {
  const requestOptions: RequestInit = {
    method: 'PUT',
    body: file,
    redirect: 'follow',
  };

  fetch('https://storage.googleapis.com/...', requestOptions)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export const triggerCapture = () => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'luma-api-key={key}');

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(
    'https://webapp.engineeringlumalabs.com/api/v2/capture/{slug}',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};
