'use client'
import { FormControl, OutlinedInput, InputAdornment} from '@mui/material';    
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
    return (
        <div>
          <FormControl
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' }}
              >
                <OutlinedInput
                        sx={{borderRadius:'10px'}}
                        color="primary"
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                        lebel="Buscar cidade..."
                    />
            
            </FormControl>
  
        </div>
    )
}