export const Card = (props) => {
    return (

            <div className="col mt-4 d-flex align-items-stretch">
                <div className="card" style={{ width: "18rem" }}>
                    {props.emoji}
                    <div className="card-body">
                        <h5 className="card-title">{props.id}</h5>
                        <div className="card-text">{props.meaning}</div>
                    </div>
                </div>

            </div>

    )
}