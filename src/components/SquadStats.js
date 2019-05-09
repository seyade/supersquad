import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Overall strength: {this.strength()}</strong>
          </li>
          <li className="list-group-item">
            <strong>Overall intelligence: {this.intelligence()}</strong>
          </li>
          <li className="list-group-item">
            <strong>Overall speed: {this.speed()}</strong>
          </li>
        </ul>
      </div>
    );
  }

  strength() {
    let strength = 0;

    this.props.heroes.forEach(hero => (strength += hero.strength));

    return strength;
  }

  intelligence() {
    let intelligence = 0;

    this.props.heroes.forEach(hero => (intelligence += hero.intelligence));

    return intelligence;
  }

  speed() {
    let speed = 0;

    this.props.heroes.forEach(hero => (speed += hero.speed));

    return speed;
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes,
});

export default connect(mapStateToProps)(SquadStats);
