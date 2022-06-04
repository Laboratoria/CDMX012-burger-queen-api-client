import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogOut from '../botones/logOut/LogOut';
import './AdminHome.scss';
import Home from '../botones/home-admin/Home';
import Edit from '../botones/editEmploye/Edit';
import Empleados from '../botones/crear empleados/Empleados';
import Platillos from '../botones/platillos/Platillos';
import Chart from '../botones/charts/Chart';

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <section className='container__home'>
      <div className='bar'>
        <div className='bar__btns--opciones'>
          <Home />
          <Empleados />
          <Platillos />
          <Chart />
        </div>
        <div className='bar__btn--log'>
          <LogOut></LogOut>
        </div>
      </div>
      <div className='dashboard__home'>
        <h1 className='dashboard__home--title'>{'bienvenido'.toUpperCase()}</h1>
        <div className='dashboard__home--opciones'>
          <button className='opcion' onClick={() => navigate('/registro')}>
            <img src='/assets/registro-empleados.svg' alt='' />
            <h3 className='opcion__text'>{'administrar empleados'.toUpperCase()}</h3>
          </button>
          <button className='opcion' onClick={() => navigate('/platillos')}>
            <img src='/assets/platillos.svg' alt='' />
            <h3 className='opcion__text'>{'administrar pedidos'.toUpperCase()}</h3>
          </button>
          <button className='opcion' onClick={() => navigate('/informacion-pedidos')}>
            <img src='/assets/info-pedidos.svg' alt='' />
            <h3 className='opcion__text'>{'información pedidos'.toUpperCase()}</h3>
          </button>
        </div>
      </div>
    </section>
  );
}
