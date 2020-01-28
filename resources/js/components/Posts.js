import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Pagination from './Pagination';


class Posts extends Component {
    constructor() {
        super();
        this.state = {
            enquiries:[],
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.getEnquiries();
    }

    getEnquiries() {
        let uri = '/enquiry/get_enquiries';
        axios.get(uri).then((response) => {
            console.log(response.data.data)
            this.setState({ enquiries: response.data.data })
        });
    }
    onChangePage (pageOfItems) {
		this.setState({ pageOfItems: pageOfItems });
	}

    render() {

        return (
            <div>
                {this.state.pageOfItems.map( (enquiry, index) => (
                    <div key={index}> 
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className="avatar">{enquiry.user_name.charAt(0).toUpperCase()}</Avatar>
                                }
                                title={enquiry.subject}
                                subheader={enquiry.user_name + " posted on " + moment(enquiry.created_at).format('MMMM Do YYYY, h:mm a')}
                            />
                            <CardActions>
                                <a href={enquiry.enquiry_route}>
                                    <Button size="small" color="primary">
                                    Read More
                                    </Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                    
                ))}
                <div className="main-pagination">
                    <Pagination items={this.state.enquiries} onChangePage={this.onChangePage} />
                </div>
            </div>
        )
    }
}

export default Posts;
