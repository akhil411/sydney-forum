import React, { Component } from "react";
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

class Posts extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
    }



    render() {

        return (
            <div>
                <Card >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className="avatar"></Avatar>
                        }
                        title="test"
                        subheader="test"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            "sample text"
								</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Posts;
