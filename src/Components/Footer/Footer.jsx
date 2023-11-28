const Footer = () =>
{
   return( 
   <footer className="container">
        <div className="row gap-5">
            <div className="col">
                <h4><span>Food</span><span>man</span></h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veritatis saepe facere repellendus totam consectetur?</p>
                <i class="fa-brands fa-facebook-f fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
            <div className="col">
                <h5>Products</h5>
            </div>
            <div className="col">
                <h5>Information</h5>
            </div>
            <div className="col">
                <h5>Company</h5>
            </div>
        </div>
    </footer>
    );
}

export default Footer