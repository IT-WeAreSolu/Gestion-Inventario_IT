import { Box, HStack, Input } from "@chakra-ui/react"
import TableComponent from "./TableComponent"
import React from "react"
import { useState } from "react"
import {adaptadorGestiones} from "../adapter/dataAdapter"
import ButtonsContainer from "./ButtonsContainer"


export default function MainContent () {

//El contenido de la tabla debería ser distinto dependiendo la página (gestiones, usuarios, equipos)

 // Datos hardcodeados, la idea es que esté vacio y usar setData con los datos exportados dependiendo si es usuarios/equipos o gestiones
    const data = [
        {   
            ID: "ID",
            Movimiento: "Movimiento",
            Nro_Inventario: "Nro_Inventario",
            Nro_Serie: "Nro_Serie",
            Marca: "Marca",
            Modelo: "Modelo",
            Tipo_de_Dispositivo: "Tipo_de_Dispositivo",
            Origen: "Origen",
            Fecha_In: "Fecha_In",
            Costo_Movimiento: "Costo_Movimiento",
            ID_Traking: "ID_Traking",
            Destino: "Destino",
            Status: "Status",
            Comodato_firmado: "Comodato_firmado",
            Observaciones: "Observaciones",
            LinkWS: "LinkWS",
            Link_Tracking: "Link_Tracking"  
        },
        {
            ID: "1",
            Movimiento: "Envio",
            Nro_Inventario: "001",
            Nro_Serie: "11111",
            Marca: "Lenovo",
        },
        {ID: "2",
            Movimiento: "Retiro",
            Nro_Inventario: "001",
            Marca: "Lenovo",
            Destino: "data.Destino" || "",
            Status: "#" || "",
            Comodato_firmado: "data.Comodato_firmado" || false,
            Observaciones: "data.Observaciones" || "",
            LinkWS: "data.LinkWS" || "",
            Link_Tracking: "data.Link_Tracking"} 
      
    ];

    //Usamos el adaptador, por ahora sin validación dependiendo que tipo de datos o tabla usemos
    const [dataAdapted, setDataAdapted] = useState(data.map(adaptadorGestiones))


    //Buscador, por ahora no está funcionando
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    
    //No puedo pasar filteredData a la tabla si los botones los uso para hacer modificaciones
    //Lo que termina pasando es que la info de la tabla no se actualiza con las modificaciones de los botones
    const filteredData = searchTerm
       ? data.filter((item) =>
           item.ID.toLowerCase().includes(searchTerm.toLowerCase())
         )
       : data;
   
    //

    return (
        <Box flex="1" p={5} overflowY="auto">
            <ButtonsContainer  data={dataAdapted} setData={setDataAdapted}/>
            <Input 
                placeholder='Buscar'
                value={searchTerm}
                onChange={handleSearch}
                mb={4}
                htmlSize={50}
                width='auto'
            />
            <TableComponent data={dataAdapted} />
        </Box>
    )
}

