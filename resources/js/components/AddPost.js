import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

class AddPost extends Component {
    constructor(){
        super();

        this.state = {
            subject: '',
            description: '',
            errors: {},
            submitSuccess: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleInputChange (event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit (event) {
        event.preventDefault();
        const newEnquiry = {
            subject: this.state.subject,
            description: this.state.description
        };
        console.log(newEnquiry)
        this.setState({ submitSuccess: true, subject:'', description:'' })
    };

    handleClose (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ submitSuccess: false })
    };

    render() {

        return (
                <div className="card">
                        <div className="card-header">Post your Enquiry</div>
                            <div className="card-body">
                                <div className="enquiry-form">
                                    <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                                        <TextField
                                            name="subject"
                                            type="text"
                                            label="Subject*"
                                            value={this.state.subject}
                                            // error={errors.name}
                                            onChange={this.handleInputChange}
                                            // className={classnames("", {
                                            //     invalid: errors.name
                                            // })}
                                        />
                                        <br></br>
                                        <TextField
                                            name="description"
                                            type="text"
                                            label="More details*"
                                            value={this.state.description}
                                            // error={errors.name}
                                            onChange={this.handleInputChange}
                                            // className={classnames("", {
                                            //     invalid: errors.name
                                            // })}
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
        );
    };
};

export default AddPost;
