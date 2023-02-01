function FlipCard(){
    return (
        <div className="flip-card-outer">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <p className="card-text">Some text</p>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <p className="card-text">Some text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FlipCard;
