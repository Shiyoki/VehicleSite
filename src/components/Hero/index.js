import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import swal from "sweetalert"
import { isNumber } from 'lodash';
import { useHistory } from "react-router";

const Hero = (props) => {

    const history = useHistory();

    const alertError =()=>{
        swal({
            title: "Error",
            text: "Datos introducidos incorrectamente",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const form = useRef();
    const [result, showResult] = useState(false)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [brand, setBrand] = useState("")
    const [km, setKm] = useState("")
    const [year, setYear] = useState("")

    const handleNameChange = ({ target: {value} }) => setName(value) ;
    const handlePhoneChange = ({ target: {value} }) => setPhone(value) ;
    const handleBrandChange = ({ target: {value} }) => setBrand(value) ;
    const handleKmChange = ({ target: {value} }) => setKm(value) ;
    const handleYearChange = ({ target: {value} }) => setYear(value) ;

    const sendEmail = (e) => {

        if(/([0-9])/.test(name)){
            alertError();
        }

        else if( !(/([0-9])/.test(phone)) || !(/([0-9])/.test(km)) || !(/([0-9])/.test(year)) ) {
            alertError();
        }
        
        else if( (name === "") || (brand === "") || (phone === "") || (km === "") || (year === "") ){
            alertError();
        } 

        else if( (parseInt(km) < 1900) && (parseInt(year) > Date.year) ){
            alertError();
        }

      else{
        emailjs.sendForm("service_xm3t34j","template_22zi2ll", form.current, 'user_xyjmGQwBffOdGd4mFshoM')
          .then((result) => {
              console.log(result.text);
              swal({
                title: "Enviado",
                text: "Mensaje enviado con exito",
                icon: "success",
                button: "Aceptar",
                timer: "5000"
            })
          }, (error) => {
            console.log(error.text);
          });
          showResult(true);
          history.push('/gracias')
      };
      }
    
        
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-wrapper">
                    <div className="hero-text-container self-center">
                        <div className="md:px-3 lg:px-20">
                            <h1 className="hero-title">vender un coche con reserva de dominio</h1>
                            <h2 className="hero-subtitle">Para exportación</h2>
                        </div>
                    </div>
                    <div classname="hero-card-container">
                        <form className="card bg-white shadow-lg" ref={form} >
                            <fieldset className="card-body p-3">
                                <legend className="text-gray-700 font-semibold text-center mb-3">Compramos tu coche con reserva</legend>
                                <div className="input-group mb-3">
                                    <input type="text" placeholder="Nombre" className="input input-info input-bordered w-full" name="nombre" value={name} onChange={handleNameChange}></input>
                                    <input type="text" placeholder="Teléfono" className="input input-info input-bordered w-full" name="telefono" value={phone} onChange={handlePhoneChange}></input>
                                </div>
                                <input type="text" placeholder="Marca y Modelo" className="input input-info input-bordered w-full mb-3" name="modelo" value={brand} onChange={handleBrandChange}></input>
                                <input type="text" placeholder="Kilómetro" className="input input-info input-bordered w-full mb-3" name="kilometro" value={km} onChange={handleKmChange}></input>
                                <input type="text" placeholder="Año" className="input input-info input-bordered w-full mb-3" name="year" value={year} onChange={handleYearChange}></input>
                                <div className="flex justify-center">
                                    <a type="submit" className="btn btn-success hover:bg-green-800" value="Enviar" onClick={sendEmail}>Enviar</a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;