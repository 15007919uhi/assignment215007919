import AnswerSection from "../components/AnswerSection";
import QuestionSection from "../components/QuestionSection";
import HintsSection from "../components/HintsSection";
import Chatroom from "../components/Chatroom";

function QuestionPage() {
    return (
        <div className="container">
            <br />
            <button className="btn btn-primary float-end rounded-circle" data-toggle="modal" data-target="#chatModal">Chat</button>
            <h1 className="text-center">Question Page</h1>
            <div className="row">
                <QuestionSection />
                <HintsSection />
            </div>
            <div className="row">
                <AnswerSection />
            </div>
            <div className="modal fade" id="chatModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <Chatroom />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionPage;