import React, { useContext } from 'react';
import "./ItemDetial.css";
import { CarritoContext } from '../../Context/CarritoContext';

const ItemDetial = ({ id, nombre, categoria, precio, especificaciones, img }) => {
  const { agregarCarrito } = useContext(CarritoContext);

  const producto = { id, nombre, categoria, precio, img }; // Asumo que 'producto' es un objeto con esos valores

  return (
    <section className="layout">
      <div className="Imagen">
        <img src={img} alt={nombre} className="img" />
      </div>
      
      <div className="Titulo">
        <p className="titulo-text">{nombre}</p>
        <div className="Categoria">
          <p>{categoria}</p>
        </div>
      </div>

      <div className="informacion">
        <Especificaciones esp={especificaciones} />
      </div>

      <div className="precio">
        <p>US$ {precio}</p>
      </div>

      <div className="Boton">
        <button className="btn-detial now">
          <p className="btn-text-detial">Comprarlo ahora</p>
        </button>

        <button className="btn-detial" onClick={() => agregarCarrito({ ...producto }, 1)}>
          <p className="btn-text-detial">Añadir al carrito</p>
        </button>
      </div>
    </section>
  );
};

function Especificaciones({ esp }) {
  const especificaciones = esp ? esp.split(',').map((item, index) => (
    <div key={index} className="especificacion">{item.trim()}</div>
  )) : null;
  return <div className="Especificaciones">{especificaciones}</div>;
}

export default ItemDetial;
