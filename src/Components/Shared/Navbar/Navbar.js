import React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logoImg from '../../../image/Screenshot 2020-11-21 003916.png'
const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img className='m-4' src={logoImg} alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse fullMenu" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-5">
            <a class="nav-link menuStyling active" href="#">Incio <span class="sr-only">(current)</span></a>
            <a class="nav-link menuStyling active" href="#">Teinda</a>
            <a class="nav-link menuStyling active" href="#">Subasta</a>
            <a class="nav-link menuStyling active" href="#">Se un distribuidor</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Vender Colecciones</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Catlogo</a>
            <a class="nav-link menuStyling BlackScreen" href="#">Contacto</a>
          </div>
          <div className="CartLogo pr-2">
            <ShoppingCartIcon style={{color:'#fef7a7'}}/>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;