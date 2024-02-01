import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>1,406 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Pondicherry</h1>
                <h2>689 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/786904.jpg?k=ded708831ab55bb2a028de7bf266af5f81aa051832a7ca7f5e3c7a5a6230ae91&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mahabalipuram</h1>
                <h2>95 Properties</h2>
            </div>
        </div>
        {/* <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Bangalore</h1>
                <h2>2,042 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>2,550 Properties</h2>
            </div>
        </div> */}
    </div>
  )
}

export default Featured