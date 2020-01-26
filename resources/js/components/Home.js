import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';


function Home() {
    return (
        <div className="home-container">
            <div className="row ">
                <div className="col-md-8">
                    <Posts />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}