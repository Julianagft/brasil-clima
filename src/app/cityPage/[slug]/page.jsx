'use client'
import { useEffect, useState } from "react"
import apiLocalidade from "@/services/ApiLocalidades";
import apiMetereologia from "@/services/ApiMetereologia";

import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";


const BackgroundBox = styled(Box)({
    backgroundImage: `url('../termometros.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '50%',
    height: '100%',
  });

export default function cityPage({params}) {

    const [cityName, setcityName] = useState({});
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await apiLocalidade.ApiGetMunicipio(params.slug);    
                setcityName(data);
                setLoading(false);
            } catch(error) {
                console.error("Erro ao obter dados das cidades", error);
            }
        }
        fetchData() 
    }, [params]);

    useEffect( () => {
      async function fetchData() {
        try {
          if(cityName.nome) {
            const weather = await apiMetereologia.previsaoMunicipio(cityName.nome);
            setWeatherData(weather);
          }
        } catch(error) {
          console.error("Erro ao obter dados metereológicos do município", error);
        }
      }
      fetchData()

    },[cityName.nome]);

    return (
      <div className="h-4/5 w-full flex flex-col justify-center items-center">
        <Card sx={{ display: "flex", height: "90%", width: "90%",borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <Box sx={{ display: "flex", flexDirection: "column", width:'70%', textAlign:'center' }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {loading ? (
                <Typography variant="body1">Carregando...</Typography>
              ) : (
                cityName && (
                  <>
                    <Typography component="div" variant="h5">
                      <h1 className="mt-5 text-xlg">{cityName.nome}</h1>
                      {weatherData && weatherData.main && (
                      <div className="text-left text-base md:text-base lg:text-lg mt-3">
                          <p><strong>Temperatura Atual:</strong> {weatherData.main.temp}°C</p>
                          <p><strong>Sensação térmica:</strong> {weatherData.main.feels_like}°C</p>
                          <p><strong>Máxima:</strong> {weatherData.main.temp_max}°C</p>
                          <p><strong>Mínima:</strong> {weatherData.main.temp_min}°C</p>
                      </div>
                      )}
                    </Typography>
                    
                  </>
                )
              )}
            </CardContent>
          </Box>    
          <BackgroundBox sx={{ width: "50%" }} />
        </Card>
      </div>
    );
}

            