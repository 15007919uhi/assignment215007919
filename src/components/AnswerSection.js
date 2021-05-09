function AnswerSection() {
    return (
        <div className="col-12">
        <h3 className="text-center">Answers</h3>
        <div className="p-3 mb-2 bg-light">
            <div className="row">
                <div className="col-sm d-grid gap-2">
                    <button type="button" className="btn btn-secondary mb-2 p-4">10 kg</button>
                    <button type="button" className="btn btn-secondary mb-2 p-4">1260 kg</button>
                </div>
                <div className="col-sm d-grid gap-2">
                    <button type="button" className="btn btn-secondary mb-2 p-4">1 17/28 kg</button>
                    <button type="button" className="btn btn-secondary mb-2 p-4">62 2/9 kg</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm text-center">
                    <button type="button" className="btn btn-primary p-4">Check my answer</button>
                    <button className="btn btn-primary float-end rounded-circle"><i className="bi bi-percent"></i></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AnswerSection;