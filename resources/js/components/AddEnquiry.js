import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class AddPost extends Component {
    constructor() {
        super();

        this.state = {
            subject: '',
            description: '',
            errors: {},
            enquiries: [],
            submitSuccess: false,
            editorState: EditorState.createEmpty()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.getEnquiry = this.getEnquiry.bind(this);

    }

    componentDidMount() {
        this.getEnquiry();
    }

    handleInputChange(event) {
        this.setState({ subject: event.target.value })
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState
        });
    }

    getEnquiry() {
        let uri = '/enquiry/get_enquiry';
        axios.get(uri).then((response) => {
            console.log(response.data.data)
            this.setState({ enquiries: response.data.data })
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newEnquiry = {
            subject: this.state.subject,
            description: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        };
        let uri = '/enquiry/post_enquiry';
        axios.post(uri, newEnquiry).then((response) => {
            this.setState({ submitSuccess: true, subject: '', editorState: '' }, () => {
                this.getEnquiry();
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
        return (
            <div className="enquiry-container">
                <div className="card post-enquiry">
                    <div className="card-header">Post your Enquiry</div>
                    <div className="card-body">
                        <div className="enquiry-form">
                            <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                                <TextField
                                    name="subject"
                                    type="text"
                                    label="Subject"
                                    value={this.state.subject}
                                    // error={errors.name}
                                    onChange={this.handleInputChange}
                                // className={classnames("", {
                                //     invalid: errors.name
                                // })}
                                />
                                <br></br>
                                <Editor
                                    editorState={this.state.editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={this.onEditorStateChange}
                                />
                                <br></br>
                                <br></br>
                                <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                            </form>
                        </div>
                    </div>
                    <Snackbar
                        open={this.state.submitSuccess}
                        autoHideDuration={3000}
                        onClose={this.handleClose}
                        message="&#10004; Enquiry Submitted Successfully"
                    />
                </div>
                <div className="list-enquiry">
                {this.state.enquiries.map( (enquiry, index) => (
                    <a href={enquiry.enquiry_route} key={index}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className="avatar">{index + 1}</Avatar>
                            }
                            title={enquiry.subject}
                            subheader="test"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                "sample text"
                                    </Typography>
                        </CardContent>
                    </Card>
                    </a>
                ))}
                </div>
            </div>
        );
    };
};

export default AddPost;
