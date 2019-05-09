import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    console.log('PROPS!!!!!', this.props);

    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => (
            <li className="list-group-item" key={character.id}>
              <div className="list-item">{character.name}</div>

              <button
                className="list-item right-button"
                onClick={() => this.props.addCharacterById(character.id)}
              >
                add
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ addCharacterById }, dispatch);
// };

export default connect(
  mapStateToProps,
  { addCharacterById }
)(CharacterList);
