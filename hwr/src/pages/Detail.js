import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'commits',
      commits: [],
      forks:[],
      pulls:[]
    };

  }

  buttonClicked() {
    console.log("Button was clicked");
    const newState = {
      name: chance.first()
    };

    this.setState(newState);
  }

  render() {
    let content;

    if (this.state.mode === 'commits') {
      content = this.renderCommits();
    } else if (this.state.mode ==='pulls') {
      content = this.renderPulls();
    } else {
      content  = this.renderForks();
    }

    return (
      <div>
        <button onClick={this.selectMode.bind(this,'commits')}>Show Commits</button>
        <button onClick={this.selectMode.bind(this,'pulls')}>Show Pulls</button>
        <button onClick={this.selectMode.bind(this,'forks')}>Show Forks</button>
        {content}
      </div>

      )
  }

  selectMode(mode) {
    this.setState({mode});
  }


  renderCommits() {
    return this.state.commits.map((commit, index) => {
              const author = commit.author ? commit.author.login : 'Anonymous'

             return (<p key={index}>
                 <strong>{author}</strong>:
                 <a href={commit.html_url}>{commit.commit.message}</a>.
               </p>
              )

            })
  }

  renderPulls() {
    return this.state.pulls.map((pull, index) => {
              const user = pull.user ? pull.user.login : 'Anonymous'

             return (<p key={index}>
                 <strong>{user}</strong>:
                 <a href={pull.html_url}>{pull.body}</a>.
               </p>
              )

      })
  }

  renderForks() {
    return this.state.forks.map((fork, index) => {
              const owner = fork.owner ? fork.owner.login : 'Anonymous'

             return (<p key={index}>
                 <strong>{owner}</strong>:
                 <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}
               </p>
              )

      })
  }

  componentWillMount() {
    this.fetchFeed('commits');
    this.fetchFeed('pulls');
    this.fetchFeed('forks')
  }

  fetchFeed(type) {
    const baseUrl = 'https://api.github.com/repos/facebook';
    console.log(`${baseUrl}/${this.props.match.params.repo}/${type}`);
    ajax
      .get(`${baseUrl}/${this.props.match.params.repo}/${type}`)
      .end((error, response) => {
        if( !error && response) {
          console.dir(response.body);
          this.setState({[type]: response.body});
        } else {
          console.log(`There was an error fethching ${type} from github`, error);
        }
      });
  }
}

export default Detail;
