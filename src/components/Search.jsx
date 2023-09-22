import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://rukminim2.flixcart.com/image/850/1000/kvgzyq80/poster/j/2/j/medium-harvey-specter-suits-tv-series-matte-finish-poster-original-imag8d6ugth5nueg.jpeg?q=90" alt=""/>
        <div className="userChatInfo">
          <span>Shlok</span>
        </div>
      </div>
    </div>
  )
}

export default Search