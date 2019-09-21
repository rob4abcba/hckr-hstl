import React, { Component, TextInput } from "react";
// import { TextInput } from 'react-native';
import { PropTypes } from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Bookings extends Component {
  // getMealsScheduleYo() {
  //   console.log("getMealsScheduleYo");
  // }

  handleChange = name => ( { target: { value } } ) => {
    this.setState({
      hackers: {
        ...this.state.hackers,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          onChange={this.handleChange('name')}
        />
        <Button
          variant="outlined"
          color="primary"
          className="block-center"
          onClick={this.props.getMealsScheduleYo}
        >
          Get Meals Schedule
        </Button>
      </div>
    );
  }
}

export default Bookings;
