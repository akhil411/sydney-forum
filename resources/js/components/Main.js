import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';


function Main() {
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

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
