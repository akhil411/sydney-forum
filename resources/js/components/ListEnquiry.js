import React, { Component } from "react";
import ReactDOM from 'react-dom';
import moment from 'moment';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Snackbar from '@material-ui/core/Snackbar';

class ListEnquiry extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
            replies:[],
            submitSuccess: false,
        }
        this.getReplies = this.getReplies.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.getReplies();
    }
    
    getReplies () {
        const reply = {
            enquiry_id :this.props.id
        }
        let uri = '/reply/get_reply/' + this.props.id;
        axios.get(uri, reply).then((response) => {
            console.log(response.data.data)
             this.setState({ replies: response.data.data })
        });
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newReply = {
            enquiry_id: this.props.id,
            reply: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        };
        console.log(newReply)
        let uri = '/reply/post_reply';
        axios.post(uri, newReply).then((response) => {
            this.setState({ editorState: '', submitSuccess: true }, () => {
                this.getReplies();
            })
            
        });
    };

    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ submitSuccess: false })
    };

    render() {

        const enquiry = this.props;
        const content = JSON.parse(enquiry.enquiry);

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title card-enquiry-subject">{content.subject}</h3>
                                <div dangerouslySetInnerHTML={{ __html: content.description }} />
                                <p>{content.user_name + " posted on " + moment(content.created_at).format('MMMM Do YYYY, h:mm a')}</p>
                            </div>
                        </div>
                        <div className="enquiry-replies">
                            {this.state.replies.map( (reply, index) => (
                                <div className="card" key={index}>
                                    <div className="card-body">
                                        <div dangerouslySetInnerHTML={{ __html: reply.reply }} />
                                        <p>{reply.user_name + " replied on " + moment(reply.created_at).format('MMMM Do YYYY, h:mm a')}</p>
                                    </div>
                                </div>   
                            ))}
                        </div>
                        { enquiry.auth === "" ? (
                            <div className="message-login">
                                <h4>Please Login to Reply</h4>
                            </div>
                        ):(
                            <div className="submit-reply"> 
                                <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                                    <Editor
                                        editorState={this.state.editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                    />
                                    <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                                </form>
                            </div>
                        )}
                        <Snackbar
                            open={this.state.submitSuccess}
                            autoHideDuration={3000}
                            onClose={this.handleClose}
                            message="&#10004; Reply Submitted Successfully"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEnquiry;

if (document.getElementById('enquiry')) {
    const element = document.getElementById('enquiry')
    const props = Object.assign({}, element.dataset)
    ReactDOM.render(<ListEnquiry {...props}/>, element);
}
