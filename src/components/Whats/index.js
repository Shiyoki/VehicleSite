import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { FaWhatsapp } from "react-icons/fa";

export default function Whats(){

    const go = () =>{
         window.open("https://api.whatsapp.com/send?phone=34607362316&text=Hola%2C%20quiero%20vender%20mi%20coche", '_blank');
     }
 
     return(
        <>
         <Fab 
             mainButtonStyles={{background:"#25d366" , fontSize:"30px"}}
             icon={<FaWhatsapp />} 
             onClick={go}
         ></Fab>
        </>
     );
 }