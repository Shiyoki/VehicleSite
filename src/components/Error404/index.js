import error404 from "../../images/error404.jpg"

const Error404 = () => {

    return (
        <div className="error-container w-full bg-white">
            <div className="404 flex justify-center">
                <img src={error404}></img>
            </div>
            <h1 className="text-center font-bold text-3xl">Parece que el sitio al que intentas acceder no esta disponible.</h1>
        </div>
    )
};

export default Error404