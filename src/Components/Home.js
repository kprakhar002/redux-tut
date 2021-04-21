import React from 'react'

function Home(){
    return(
        <div className="cart-warpper">
            <img id="cartstl" src="https://cdn.pixabay.com/photo/2014/03/24/13/50/shopping-cart-294547_640.png"></img>
            <div className ="img-wrapper item">
                <img id="image" src="https://images.macrumors.com/article-new/2017/09/iphonexdesign-800x669.jpg"></img>
            </div>
            <div className="text-warpper item">
                <span>I-Phone</span>
            </div>
            <div className="text-warpper item">
                <span>I-Phone Price - $1000</span>
            </div>
            <div className="btn-warpper item">
                <button>Add To Cart</button>
            </div>
                
            
        </div>
    )
}

export default Home