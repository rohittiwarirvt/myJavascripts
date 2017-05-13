import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const people = [];

    for( let i =0;i < 10; i++){
      people.push({
        name:chance.first(),
        country: chance.country({full:true})
      });
    }
    this.state = {people};

  }

  buttonClicked() {
    console.log("Button was clicked");
    const newState = {
      name: chance.first()
    };

    this.setState(newState);
  }

  render() {
    return (
      <div>
          {
            this.state.people.map((person, index) => (
              <p key={index}> Hello, {person.name} from {person.country}!</p>
              ))
          }
        <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
      </div>
      );
  }
}

export default Detail;
