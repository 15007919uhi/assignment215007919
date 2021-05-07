function HintsSection() {
    return (
        <div className="col-sm">
            <h3 className="text-center">Hints</h3>
            <div className="p-3 mb-2 bg-light">
                <div className="row">
                    <div className="col-6 text-center">
                        <p>General</p>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-primary mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-primary mb-1 p-2">Summary</button>
                        </div>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-primary mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-primary mb-1 p-2">Summary</button>
                        </div>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-primary mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-primary mb-1 p-2">Summary</button>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <p>Problem Specific</p>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-success mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-success mb-1 p-2">Summary</button>
                        </div>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-success mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-success mb-1 p-2">Summary</button>
                        </div>
                        <div className="mb-5 d-grid gap-2">
                            <button type="button" className="btn btn-success mb-1 p-2" data-toggle="modal" data-target="#hintModal">Video</button>
                            <button type="button" className="btn btn-success mb-1 p-2">Summary</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="hintModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close float-end" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="mb-4 rounded mx-auto d-block" src="https://firebasestorage.googleapis.com/v0/b/assignment215007919.appspot.com/o/balances2.jpg?alt=media&token=740b8178-2915-48c7-b734-c002cd95ba3f" alt="" />
                            <button type="button" className="btn btn-danger float-end">Confused</button>
                            <p>Slide: <span className="text-primary">1 2 3</span> ( <span className="text-primary">prev</span> | <span className="text-primary">replay</span> | <span className="text-primary">next</span> | <span className="text-primary">-5s</span> | <span className="text-primary">+5s</span> )</p>
                            <p>Question: <span className="text-primary">1</span> ( <span className="text-primary">prev</span> | <span className="text-primary">replay</span>  | <span className="text-primary">next</span> )</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HintsSection;