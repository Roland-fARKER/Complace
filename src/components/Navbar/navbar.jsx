import React from 'react'
import "./navstilo.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Button } from '@mui/material';
import images from '../../assets/images';

function navbar() {
  
  return (
    <div className='header'>
      <img src={images[1].cam_logo_oscuro} alt="" className='logo'/>
      <div className='container_nav'>
      <ul>
        <li className='text_di'>Inicio</li>
        <li className='text' >sobre nosotros</li>
        <li className='text' >Cursos</li>
        <li className='text' >Capacitaciones</li>
        <AddShoppingCartIcon className='icono'/>
        <NotificationsActiveOutlinedIcon className='icono' />
        <Button variant="contained" color="success" className='btn_sus'>
          Susbrirse
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default navbar