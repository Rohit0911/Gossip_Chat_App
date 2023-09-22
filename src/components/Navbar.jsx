import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Gossip</span>
      <div className='user'>
        <img src="https://rukminim2.flixcart.com/image/850/1000/kvgzyq80/poster/j/2/j/medium-harvey-specter-suits-tv-series-matte-finish-poster-original-imag8d6ugth5nueg.jpeg?q=90" alt="" />
        <span>Rohit</span>
        <button>Logout</button>

      </div>
    </div>
  )
}

export default Navbar