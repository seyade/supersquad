import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map(hero => (
            <li className="list-group-item" key={hero.id}>
              <div className="list-item">{hero.name}</div>
              <button
                className="list-item right-button"
                onClick={() => this.props.removeCharacterById(hero.id)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes,
});

export default connect(
  mapStateToProps,
  { removeCharacterById }
)(HeroList);
