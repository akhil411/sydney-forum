import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

class AddPost extends Component {
    constructor(){
        super();

        this.state = {
            name: 'hello',
            email: '',
            contactNumber: '',
            subject: '',
            description: '',
            errors: {},
            submitSuccess: false
        };
    }
    
    render() {

        return (
                <div className="card">
                        {/* <div className="card-header">Dashboard</div>
                        <div className="card-body">

                            You are logged in!
                    
                <div className="enquiry-form">
                    <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                        <TextField
                            name="name"
                            type="text"
                            label="Name*"
                            value={this.state.name}
                            error={errors.name}
                            onChange={this.handleInputChange}
                            className={classnames("", {
                                invalid: errors.name
                            })}
                        />
                        <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                    </form>
                </div>
                </div>
                <Snackbar
                    open={this.state.submitSuccess}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="&#10004; Enquiry Submitted Successfully"
                /> */}
                <h1>{this.state.name}</h1>
            </div>
        );
    };
};

export default AddPost;
