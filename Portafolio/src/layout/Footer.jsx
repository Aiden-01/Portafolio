import React from 'react'
import { Container } from 'react-bootstrap'

// Componente Footer

export const Footer = () => {
    // obtener el año actual
    const anioActual = new Date().getFullYear();


  return (
    <footer className='bg-body-secondary text-center py-4 border-top mt-5'>
     <Container>
      <small> 
        {anioActual} Portafolio <strong>Hugo Corado</strong> - Todos los derechos reservados.
      </small>
     </Container>
    </footer>
  )
}
