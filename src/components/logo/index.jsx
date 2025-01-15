import React from 'react'
import { Link } from 'react-scroll'

//import * as C from './style';

const Logo = ({ size }) => {
  return (
    <div>
      <Link
        style={{ textDecoration: 'none', cursor: 'pointer' }}
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={800}
      >
        <img
          style={{ width: size }}
          src="img/logo.svg"
          alt="Logo Marcius Code"
        />
      </Link>
    </div>
  )
}

export default Logo
