import Image from "./Image"
import Text from "./Text"

const Section2 = () => {
    return (
        <section className="container mt-5 mb-5">
            <article className="row flex-row-reverse align-items-center g-5">
                <div className="col-6">
                    <Text></Text>
                </div>
                <div className="col-6">
                    <Image></Image>
                </div>

            </article>
        </section>
    )
}

export default Section2