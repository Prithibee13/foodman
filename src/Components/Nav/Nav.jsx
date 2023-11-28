const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-transparent">
                <div class="container p-2">
                    <a class="navbar-brand" href="#">Food<span className="spantext">man</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link mx-2" aria-current="page" href="#">Why us?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2" href="#">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Contact Us?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navIcon d-flex align-items-center justify-content-center">
                        <div className="text-white text-center">
                            <span className="">
                                
                                <i class="fa-solid fa-bag-shopping my-auto  "></i></span>
                            </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav