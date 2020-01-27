import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

class ListEnquiry extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const enquiry = this.props;
        const content = JSON.parse(enquiry.enquiry);
        console.log(content)

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title card-enquiry-subject">{content.subject}</h3>
                                <div dangerouslySetInnerHTML={{ __html: content.description }} />
                            </div>
                        </div>
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
