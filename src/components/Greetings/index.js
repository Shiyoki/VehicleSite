import herobanner from "../../images/herobanner.jpg"
import ws from "../../images/ws.jpg"

const Greetings = () => {

    return (
        <div className="hero-content bg-black p-5 flex flex-col items-center full">
            <div className="bg-white p-5 inline-block">
                <h1 className="color">Gracias, acabamos de recibir tu solicitud</h1>
            </div>
            <h1 className="p-5 mt-8 text-white">Puedes contactarnos a través de:</h1>   
            <img src={ws} className="mt-5 w-80"></img> 
        </div>
    )
};

export default Greetings;