'use client'
import { useEffect, useState } from "react"
import apiLocalidade from '@/services/ApiLocalidades';

import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const BackgroundBox = styled(Box)({
    backgroundImage: `url('../termometros.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '50%', // Defina a largura e a altura conforme necessário
    height: '100%',
  });

export default function cityPage({params}) {
    const [cidade, setCidade] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await apiLocalidade.ApiCidadesPorEstado(params.slug);    
                setCidade(data);
                setLoading(false);
            } catch(error) {
                console.error("Erro ao obter dados das cidades", error);
            }
        }
        fetchData() 
    }, [params]);


    return (
      <div className="h-4/5 w-full flex flex-col justify-center items-center">
        <Card sx={{ display: "flex", height: "80%", width: "90%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {loading ? (
                <Typography variant="body1">Carregando...</Typography>
              ) : (
                cidade && (
                  <>
                    <Typography component="div" variant="h5">
                      {cidade.nome}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    ></Typography>
                  </>
                )
              )}
            </CardContent>

            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <BackgroundBox sx={{ width: "50%" }} />
        </Card>
      </div>
    );
}


{/* <CardMedia
                    component="img"
                    sx={{ width: '50%' }}
                    image="../termometros.png"
                    alt="termometros"
                /> */}