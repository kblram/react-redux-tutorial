import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="cart-image" >
                <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-add-to-cart-vector-icon-png-image_3718081.jpg"/>
            </div>
            <h1>Home component</h1>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                        <img src="https://images.unsplash.com/photo-1592898741922-5dd6de5f698c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"/>
                </div>

                <div className="text-wrapper item">
                       <span>I-Phone </span>
                       <span>Price: $1000.00 </span>
                </div>

                <div className="btn-wrapper item">
                        <button>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}
