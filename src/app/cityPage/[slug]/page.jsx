'use client'
import { useEffect, useState } from "react"
import apiLocalidade from "@/services/ApiLocalidades";
import apiMetereologia from "@/services/ApiMetereologia";

import { Box, Card, CardContent } from '@mui/material';
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
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Card sx={{ display: "flex", height: "90%", width: "90%",borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <Box sx={{ display: "flex", flexDirection: "column", width:'70%', textAlign:'center' }}>
            <CardContent sx={{ flex: "1 0 auto", justifyContent:'center', gap:'50px'}}>
              {loading ? (
                <div className="mt-5 mb-5 text-xlg font-bold text-secondaryGreen">
                  <p>Carregando...</p>
                </div>
              ) : (
                <div>
                  <h1 className="mt-5 text-xlg font-bold text-primaryGreen">{cityName.nome}</h1>
                </div>
              ) }

              {
                weatherData && weatherData.main ? (
                <div className="text-left text-base md:text-base lg:text-lg mt-3 flex-col gap-3">
                  <div className="flex gap-1 items-center ml-0 py-2">
                    <img className="w-8 h-8" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-weather-summer-party-smashingstocks-flat-smashing-stocks.png" alt="external-weather-summer-party-smashingstocks-flat-smashing-stocks"/>
                    <p><strong className="font-extrabold text-primaryOrange">Temperatura Atual:</strong> {weatherData.main.temp}°C</p>
                  </div>
                  <div className="flex gap-1 items-center ml-0 py-2">
                    <img className="w-8 h-8" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-weather-vacation-planning-cycling-tour-flaticons-flat-flat-icons.png" alt="external-weather-vacation-planning-cycling-tour-flaticons-flat-flat-icons"/>
                    <p><strong className="text-primaryPurple">Sensação térmica:</strong> {weatherData.main.feels_like}°C</p>
                  </div>
                  <div className="flex gap-1 items-center ml-0 py-2">
                    <img className="w-8 h-8"  src="https://img.icons8.com/stickers/100/temperature-high.png" alt="temperature-high"/>
                    <p><strong className="text-primaryRed">Máxima:</strong> {weatherData.main.temp_max}°C</p>
                  </div>
                  <div className="flex gap-1 items-center ml-0 py-2">
                    <img className="w-8 h-8" src="https://img.icons8.com/stickers/100/temperature-low.png" alt="temperature-low"/>
                    <p><strong className="text-primaryBlue">Mínima:</strong> {weatherData.main.temp_min}°C</p>
                  </div>                 
                  
                </div> 
                ) : (
                  <div className="text-left text-base md:text-base lg:text-lg mt-3">
                    <p>Informações meteorológicas não disponíveis!</p>
                  </div>
                )
              }
            </CardContent>
          </Box>    
          <BackgroundBox sx={{ width: "50%" }} />
        </Card>
      </div>
    );
}

            



// {loading ? (
//   <Typography variant="body1">Carregando...</Typography>
// ) : (

//   <Typography variant="body1">
//     <h1 className="mt-5 text-xlg">{cityName.nome}</h1>
//   </Typography>

//     <Typography component="div" variant="h5">

      
      
//       {weatherData && weatherData.main ? (
//         <div className="text-left text-base md:text-base lg:text-lg mt-3">
//           <p><strong>Temperatura Atual:</strong> {weatherData.main.temp}°C</p>
//           <p><strong>Sensação térmica:</strong> {weatherData.main.feels_like}°C</p>
//           <p><strong>Máxima:</strong> {weatherData.main.temp_max}°C</p>
//           <p><strong>Mínima:</strong> {weatherData.main.temp_min}°C</p>
//         </div>
//       ) : (
//         <Typography variant="body1"></Typography>
//       )}
//     </Typography>
  
// )}          
  