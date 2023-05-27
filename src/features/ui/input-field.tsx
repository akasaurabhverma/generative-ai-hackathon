import {
  InputLabel,
  OutlinedInput,
  InputBaseProps,
  FormHelperText,
  Box,
  FormHelperTextProps,
} from '@mui/material';
import {useId} from 'react';

interface InputProps extends InputBaseProps {
  label?: string;
  height?: number;
  helperText?: string;
  helperTextProps?: FormHelperTextProps;
}

export const InputField: React.FC<InputProps> = ({
  helperText = '',
  label = '',
  height = 50,
  helperTextProps = {},
  ...props
}) => {
  const id = useId();
  return (
    <Box width={'100%'}>
      <InputLabel
        htmlFor={id}
        required={props.required}
        disabled={props.disabled}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        {...props}
        id={id}
        sx={{height: props.multiline ? 'auto' : `${height}px`, width: '100%'}}
      />
      <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
    </Box>
  );
};
