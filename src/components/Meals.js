import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Meals = ((props) => {
    return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
            <div>
                        <li className="morning">
                            {/* <div
                            className="am-pm-night-avatar"
                            style={{
                                backgroundImage: `url(${props.hacker.avatarURL})`
                            }}>
                            </div> */}
                            <div className='hacker-details'>
                                {/* {props.hackers.map((hacker) => (<p> `Breakfast for ${hacker.name}`</p>))} */}
                                {props.hackers.map((hacker) => (<p> Breakfast for {hacker.name} </p>))} 
                            </div>
                            </li>

                        <li className="afternoon">
                            Lunch for insert_hacker_name
                            </li>
                        <li className="night">
                            Dinner for insert_hacker_name
                            </li>
                    </div>
            </ol>
        </div>);
});
export default Meals;
