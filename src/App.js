import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

class App extends Component {
    state = {
        hackers: [
            {
                id: 'tyler',
                name: 'Tyler McGinnis',
                handle: '@tylermicginnis',
                avatarURL: 'http://localhost:5001/tyler.jpg'
            },
            {
                id: 'karen',
                name: 'Karen McGinnis',
                handle: '@karenmicginnis',
                avatarURL: 'http://localhost:5001/karen.jpg'
            },
        ]
    }

    createHacker(hacker) {
        // HackersAPI.create(hacker).then(hacker => {
        //     this.setState(state => ({
        //         hackers: state.hackers.concat([ hacker ])
        //     }))
        // })
    }

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Yo Yo Hostel</h2>
            </center>
            <div className="container">
                <Bookings></Bookings>
                <Error hackers={this.state.hackers}></Error>
                <Meals hackers={this.state.hackers}></Meals>
            </div>
        </div>);
    }
}

export default App;