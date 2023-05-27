import {Button, TextField, Typography} from '@mui/material';
import {handleGetDescription} from './api';
import {useState} from 'react';

export const UserInput: React.FC<{name: string}> = ({name}) => {
  const [inputText, setInputText] = useState('');

  const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Typography>{name}</Typography>
      <TextField value={inputText} onChange={handleChangeInputText} />
      <Button
        onClick={() => {
          inputText.trim()
            ? handleGetDescription(inputText)
                .then(() => {
                  console.log('then');
                })
                .catch(() => {
                  console.log('catch');
                })
            : console.log('No text');

          setInputText('');
        }}
      >
        Submit
      </Button>
    </>
  );
};
