'use client'
import { FormControl, OutlinedInput, InputAdornment} from '@mui/material';    
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({onChange}) {
    return (

        <FormControl sx={{ m: 1, width:'50%', color:'blue' }}>
        <OutlinedInput
            color="primary"
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            lebel="procurar"
            onChange={onChange}
        />
        </FormControl>
    )
}

