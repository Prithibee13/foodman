const Checkbox = (props) => {
    const { color } = props
    return (
        <div className="d-flex align-items-center gap-3 mt-2 mb-2">
            <div className="">

                <span style={{ color: color }}><i className="fa-solid fa-square-check fa-2x" style={{}}></i></span>
            </div>

            <div className="">
                <p className="">{props.children}</p>
            </div>

        </div>)
}

export default Checkbox