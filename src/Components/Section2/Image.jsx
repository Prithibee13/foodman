import foods from "../../assets/pix12.png"

const Image = () =>
{
    return(
        <div>
            <img src={foods} alt='foods' className="w-90 rounded img-fluid"/>
        </div>
    )
}

export default Image