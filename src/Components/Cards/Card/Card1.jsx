import pix2 from "../../../assets/pix2.png"

const Card1 = () => {
    return (
        <div>
            <div class="card border-0 h-100  p-3" >
                <img src={pix2} className="card-img-top cardImg mx-auto w-100 " alt="..." />
                <h4>Chicken Veg Mix</h4>
                <div className="card-body">
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga hic voluptatibus suscipit!</p>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <h5 className="me-3">$15.50</h5>
                    <button className="cardBtn btn rounded-pill">Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export default Card1