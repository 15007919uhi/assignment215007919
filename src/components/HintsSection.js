import Video from './Video'

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
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <Video />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HintsSection;