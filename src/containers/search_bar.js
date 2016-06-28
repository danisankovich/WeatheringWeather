import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this); // for when you have error cannot access props of null
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }
  onFormSubmit(event) {
    event.preventDefault(); // don't submit form
    this.props.fetchWeather(this.state.term);
    this.setState({term:''}); //causes component to rerender and clears form
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder='Enter City for Five Day Forecast'
          className='form-control'
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch); //gives access ot this.props.fetchWeather
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null is first argument to say that this container does not care about state.
