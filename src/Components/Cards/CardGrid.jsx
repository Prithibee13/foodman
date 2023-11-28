import Card1 from "./Card/Card1"
import Card3 from "./Card/Card3"
import Card2 from "./Card/card2"

const CardGrid = () => {
    return (
        <article className="container mt-5 mb-5  text-center">
            <div className="row flex-lg-row justify-content-center align-items-center g-5">
                <div className="col-md-4">
                    <Card1></Card1>
                </div>
                <div className="col-md-4">
                    <Card2></Card2>
                </div>
                <div className="col-md-4">
                    <Card3></Card3>
                </div>
            </div>
        </article>
    )
}

export default CardGrid