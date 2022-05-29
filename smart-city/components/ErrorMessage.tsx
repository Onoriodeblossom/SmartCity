
import {Alert, Fade} from '@mui/material';

interface Props {
  message: string;
}

const ErrorMessage:React.FC<Props> = ({ message }) => {
  return (
    <Fade in= {true}>
      <Alert severity="error">
        {message}
      </Alert>
    </Fade>
   
  );
}

export default ErrorMessage;
