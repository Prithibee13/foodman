import Text from "./Text"
import Image from "./image"

const Banner = () => {
    return (
        <article className="container mt-5 mb-5 ">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col-6">
                    <Image></Image>
                </div>
                <div className="col-6">
                    <Text></Text>
                </div>


            </div>


        </article>
    )
}

export default Banner