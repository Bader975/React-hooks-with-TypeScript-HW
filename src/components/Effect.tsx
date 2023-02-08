import React, { useState } from "react";
import axios from 'axios';
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Input, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import { TiWeatherCloudy } from 'react-icons/ti';
function effect() {
    const [data , setData] =React.useState<any>()
    const [city, setCity] = useState('')


  //   React.useEffect(() => {
  //     axios.get(`http://api.weatherapi.com/v1/current.json?key=a89be5f3d64d4d0ea5c184920230702&q=${city}&aqi=no`).then(res=>{
           
  //     console.log(res.data) 
  //  setData(res.data)
  //  })
  //   },[])
    
    const getcity=(city: string) => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a89be5f3d64d4d0ea5c184920230702&q=${city}&aqi=no`).then(res=>{
           
      console.log(res.data)
      setData(res.data)
     
    }
        
    ) }

    return (
        <>
        <SimpleGrid>
        <Box>
         <Input mt='20'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='Search for a City to see the Weather'
        width='350px'
        variant='outline'
        size='lg' />
 <Button width='200px' ml='5'  onClick={() => getcity(city)}  bg='gray.600' color={"#fff"}>Search For City</Button>
 </Box>
 </SimpleGrid>


 <Card maxW='sm' mx={'auto'} my={'20'} shadow='lg' rounded='lg' bg={'gray.300'} color={"#fff"} fontSize='lg' mb='180'>
  <CardBody>
    <Stack mt='6' spacing='2'>
      <Heading size='md'>{city}</Heading>
      {data && <Image w={100} src = {data && data.current &&data.current.condition&&data.current.condition.icon} />}
     <Text>
     { data && data.location && "Locted in : "+ data.location.region} 
     </Text>
      <Text>
      {data && data.current&&data.current.temp_c + " C" } 
      </Text>
      <Text>
      { data && data.current && "Humidity: " + data.current.humidity + "%"  }  
      </Text>
      <Text>
        
{data && data.current && " Wind Speed: "+  data.current.wind_kph+" km/h"}  
      </Text>
    </Stack>
  </CardBody>

</Card>
     
      </>
    )
  }
  
  export default effect;



