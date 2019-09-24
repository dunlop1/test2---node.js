import React from 'react';
import '../App.css';




function Header() {
  return (
    <>
    <div className="header">
      <span>Angular 6  MatTable CRUD Example</span>
    <div className='button-wrapper'>
      <p>Reload data:</p>
      <button className='refresh-button'><img className='plus' src={require('../images/refresh.svg')} alt='' /></button>
    </div>
    </div>
    <div className='label-cntr'>
    </div>
    </>
    
  );
}

export default Header;
