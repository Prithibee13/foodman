import Checkbox from "../Checkbox/Checkbox"

const Text = () => {
    return (
        <div>
            <h3 className="sectionText">Cooked By the Best Chefs in the World.</h3>
            <div className="mt-3 mb-3">
                <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse illum eaque magnam harum beatae, officia aspernatur similique vero eum.</p>
            </div>

            <div className="">
                <div className="">

                    <Checkbox color="#54B435">A garunteed delicious meal</Checkbox>
                    
                </div>


                <div className="">

                <Checkbox color="#D21312">Food is garunteed hygenic</Checkbox>
                </div>

                <div className="">
                    <Checkbox color="#4942E4">Cooked quickly</Checkbox>
                </div>


            </div>
        </div>
    )
}

export default Text