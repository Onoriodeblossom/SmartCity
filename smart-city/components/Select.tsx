import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormControl,FormLabel, FormHelperText, MenuItem} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  firstOption: string;
}

const SelectOption:React.FC<Props> = ({firstOption}) => {
  const [state, setState] = useState(firstOption);

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
    return (
        <div className = 'my-1 mr-2 sm:mr-0'>
          <FormControl sx={{minWidth: 100, border:'none' }} size = 'small'>
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
          name= {state}
          className=" text-gray-400"
        >
          <MenuItem value={firstOption}>
            <em>{firstOption}</em>
          </MenuItem>
          <MenuItem value='Ten'>Ten</MenuItem>
          <MenuItem value='Twenty'>Twenty</MenuItem>
          <MenuItem value='Thirty'>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}

export default SelectOption;