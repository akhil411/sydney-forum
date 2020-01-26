import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from './AddPost';


function Home() {
    return (
        <div className="home-posts">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <AddPost />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Your Submissions</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
