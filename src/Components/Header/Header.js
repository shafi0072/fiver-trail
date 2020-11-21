import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Header.css'
import SampPic from '../../image/Screenshot 2020-11-21 021813.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Header = () => {
    return (
        <div className='header_main'>
            <Navbar/>
            <div className="row mt-5 ">
                <div className="col-md-4 BienvenidoRow">
                <h1  style={{fontFamily: "'Oswald', sans-serif"}} className='HeadingSize'>Bienvenido</h1>
                <h3  style={{fontFamily: "'Oswald', sans-serif'"}}>Primera Tienda Filatelica <br/>
                    online del Peru
                </h3>
                <button className="btn btn-dark mt-5 w-5">Comprar ahora</button>
                </div>
                <div className="col-md-6">
                    <img class="StampImage" src={SampPic} alt=""/>
                </div>
                <div className="col-md-1">
                   <div className="buttons">
                   <button className='ArrowButton'><ArrowBackIosIcon/></button>
                   <button className='ArrowButton'><ArrowForwardIosIcon/></button>
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="MainDivForBottom">
                        <div className="BottomContent">
                           <div className="row">
                            <div className="col-md-6">
                            <div className="leftCOl">
                            <h1>Accesorios</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia distinctio sunt nemo quibusdam dolore animi </h5>
                            </div>
                            </div>
                            <div style={{padding: "10px"}} className="col-md-6">
                                <h3>Encuentra Mas te</h3>
                                <h1>1200 accesorios</h1>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Header;