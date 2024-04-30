import { useEffect, useState } from "react"
import Link from "next/link";
import apiLocalidade from '../services/ApiLocalidades.jsx'

import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ListOfCities({estadoSelecionado, filtroCidade}) {
  // Config de estilo:
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  // Conf de API
  const [cidades, setCidades] = useState([]);
  const [cidadesOriginais, setCidadesOriginais] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const data = await apiLocalidade.ApiCidadesPorEstado(estadoSelecionado);    
            setCidades(data);
            setCidadesOriginais(data); // Salva os dados originais
        } catch(error) {
            console.error("Erro ao obter dados das cidades", error);
        }
    }
    fetchData() 
}, [estadoSelecionado]);

    useEffect(() => {
        // Aplica o filtro após o carregamento dos dados
        const cidadesFiltradas = filtroCidade
            ? cidadesOriginais.filter((cidade) =>
                cidade.nome.toLowerCase().includes(filtroCidade.toLowerCase())
            )
            : cidadesOriginais;
            setCidades(cidadesFiltradas);
    }, [filtroCidade, cidadesOriginais]);

  return (
    <div className="flex justify-center text-center p-1.5">
      <div className="max-h-96 w-full overflow-auto shadow-lg rounded-lg">
        <Demo>
          <List dense={dense}>
            {cidades.map((cidade, index) => (
              <Link key={cidade.id} href={`../cityPage/${cidade.nome}`} >
                <ListItem key={index}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={cidade.nome}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Demo>
      </div>
    </div>
  );
}
