import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import av1 from '../../assets/pix9.jpg'
import av2 from '../../assets/pix10.jpg'
import av3 from '../../assets/pix11.jpg'


const Slide = () => {
    return (
        <div className="container  mt-5 mb-5 slide-container">
            <div className="row ">
                <div className="col-8 mx-auto mb-5">
                    <Swiper pagination={{
                        dynamicBullets: true
                    }}

                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <div className="p-5 text-center">
                                <p className="px-2 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quae tempore enim odit adipisci quidem est quia eum reiciendis maxime.</p>

                                <div className="slide-img">
                                    <div>
                                        <img src={av1} alt="av1" />
                                    </div>

                                    <div className="d-flex justify-content-center gap-2">
                                        <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                                        <p>4/5</p>
                                    </div>

                                    <h3>Kevin Andrew</h3>
                                    <p className="section-paragraph">Happy Customer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-5 text-center">
                                <p className="px-2 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quae tempore enim odit adipisci quidem est quia eum reiciendis maxime.</p>
                                <div className="slide-img">
                                    <img src={av2} alt="av1" />
                                    <div className="d-flex justify-content-center gap-2">
                                        <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                                        <p>4/5</p>
                                    </div>
                                    <h3>Kevin Andrew</h3>
                                    <p className="section-paragraph">Happy Customer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-5 text-center">
                                <p className="px-2  mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quae tempore enim odit adipisci quidem est quia eum reiciendis maxime.</p>
                                <div className="slide-img">
                                    <img src={av3} alt="av1" />
                                    <div className="d-flex justify-content-center gap-2">
                                        <span style={{color : '#FFB100'}}><i class="fa-solid fa-star"></i></span>
                                        <p>4/5</p>
                                    </div>
                                    <h3>Kevin Andrew</h3>
                                    <p className="section-paragraph">Happy Customer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Slide