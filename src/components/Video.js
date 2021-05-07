function Video() {
    return (
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


    )
}

export default Video;