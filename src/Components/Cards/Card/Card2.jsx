import pix3 from '../../../assets/pix3.png'

const Card2 = () => {

    return (
        <div>
            <div className="card border-0 h-100 shadow-lg p-3 rounded " >
                <img src={pix3} className="card-img-top w-100" alt="..." />
                <h4>Chicken Veg Mix</h4>
                <div className="card-body">
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates corrupti enim.</p>
                    <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                    <sup>[29]</sup>
                </div>
                
                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="me-3">$15.50</h5>
                    <button className="cardBtn btn rounded-pill p-3">Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export default Card2