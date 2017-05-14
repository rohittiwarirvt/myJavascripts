import React  from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render () {
    return (<div>
              <p> Please choose a repository from the list below.</p>
              <ul>
                <li> <Link to="/detail">React</Link></li>
                <li> <Link to="/unknown">Not Found</Link></li>
              </ul>
            </div>);
  }
}

export default List;
