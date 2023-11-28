import foods from "../../assets/pix5.jpg"

const Image = () =>
{
    return(
        <div>
            <img src={foods} alt='foods' className="w-90 rounded img-fluid"/>
        </div>
    )
}

export default Image