import React from 'react';
import ReactDOM from 'react-dom';
import AddEnquiry from './AddEnquiry';


function Home() {
    return (
        <div className="home-posts">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <AddEnquiry />
                </div>
            </div>
        </div>

    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
