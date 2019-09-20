import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Error = ((props) => {
    return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
            <div id="list">
            <div className="error-msg">
                    <i className="fa fa-times-circle"></i>
                    {props.hackers.map((hacker) => (<p> Error! No menu generated for {hacker.name} </p>))}
            {/* <p>Error! No menu generated for insert_hacker_name</p> */}
                    </div>
            </div>
        </div>);
});

export default Error;
