const Cards = () => {
    return (
        <article className="container ">


            <div className="px-5 py-5 text-center">
                <h2 className="">Get Your Favourite Food in  Just 25 Minuets</h2>
            </div>
            <div className="row gap-5">
                <div className="col shadow-lg p-4 rounded">
                    <div className="p-3 shadow-lg w-25 text-center rounded" style={{ backgroundColor: "#FC2947" }}>
                        <span className="text-white"><i class="fa-solid fa-gift fa-2x"></i></span>
                    </div>

                    <h4 className="mt-3 mb-3">Order Your Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis tempora deleniti consequatur maiores voluptatibus accusantium.</p>
                    <a>Read More</a>
                </div>
                <div className="col shadow-lg p-4 rounded">

                    <div className="p-3 shadow-lg w-25 text-center rounded" style={{ backgroundColor: "#FF9209" }}>
                        <span className="text-white"> <i class="fa-solid fa-truck-pickup fa-2x"></i></span>
                    </div>
                    <h4 className="mt-3 mb-3">Pickup Your Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt laudantium cumque aut voluptatibus. Officia, maxime dolorum.</p>
                    <a>Read More</a>
                </div>
                <div className="col shadow-lg p-4 rounded">
                    <div className="p-3 shadow-lg w-25 text-center rounded" style={{ backgroundColor: "#3CCF4E" }}>

                        <span className="text-white">
                            <i class="fa-brands fa-apple fa-2x"></i>
                        </span>
                    </div>
                    <h4 className="mt-3 mb-3">Enjoy Your Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo expedita facere aperiam quibusdam optio iste distinctio.</p>
                    <a>Read More</a>
                </div>
            </div>

        </article>
    )
}


export default Cards