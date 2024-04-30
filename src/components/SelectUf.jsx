import { useState, useEffect } from 'react';
import apiLocalidade from '../services/ApiLocalidades.jsx';
import ListOfCities from './ListOfCities.jsx';
import SearchInput from './SearchInput.jsx';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function SelectUf() {

    const [uf, setUf] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState(null)
    const [filtroCidade, setFiltroCidade] = useState('');

    useEffect( () => {
        async function fetchData() {
            try {
                const data = await apiLocalidade.ApiEstado();
                setUf(data);
            } catch(error) {
                console.error("Erro ao obter dados dos estados", error);
            }
        }
        fetchData()
    }, []);

    const changeUf = async (evento) => {
      const valorEstadoSelecionado = evento.target.value;
      setEstadoSelecionado(valorEstadoSelecionado);
    }
  
    return (
        <div className='w-full h-full flex flex-col'>
            <div className="w-full flex justify-between gap-10 bg-amber-200">
                <FormControl sx={{ m: 1, width:'50%' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">UF</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={estadoSelecionado}
                        onChange={changeUf}
                        autoWidth
                        label="UF"
                    >
                        <MenuItem value="">
                        <em>Selecionar...</em>
                        </MenuItem>
                            {uf.map((estado, posicao) => (
                                <MenuItem key={posicao} value={estado.sigla} sx={{width: '300px' }}>
                                {`${estado.nome} - ${estado.sigla}`}
                                </MenuItem>
                            ))
                            }
                    </Select>
                </FormControl>
                <SearchInput onChange={(e) => setFiltroCidade(e.target.value)} />
            </div>

            <div className="flex justify-center">
                {estadoSelecionado && <ListOfCities estadoSelecionado={estadoSelecionado} filtroCidade={filtroCidade} />}
            </div>    
      </div>
    )
}