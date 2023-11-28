const Footer = () => {
    return (
        <footer className="container p-5">
            <div className="row gap-5">
                <div className="col">
                    <h4 className="fm mt-3"><span className="f">Food</span><span className="m">man</span></h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veritatis saepe facere repellendus totam consectetur?</p>
                    <div className="mt-5 d-flex align-items-center gap-3">
                        <div className="icon-circle-1 d-flex align-items-center justify-content-center ">
                            <i class="fa-brands fa-facebook-f "></i>
                        </div>
                        
                        <div className="icon-circle-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-instagram "></i>
                        </div>
                        <div className="icon-circle-3 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-twitter "></i>
                        </div>
                    </div>



                </div>
                <div className="col">
                    <h5>Products</h5>
                    <div className="mt-3">
                        <p>Employee Database</p>
                        <p>Payroll</p>
                        <p>Absent</p>
                        <p>Time Tracking</p>
                    </div>
                </div>
                <div className="col">
                    <h5>Information</h5>
                    <div className="mt-3">
                        <p>FAQ</p>
                        <p>Blog</p>
                        <p>Support</p>
                        <p>Payroll</p>
                    </div>
                </div>
                <div className="col">
                    <h5>Company</h5>
                    <div className="mt-3">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer