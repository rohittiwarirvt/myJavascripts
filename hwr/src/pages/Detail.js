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
        <button onClick={this.showCommits.bind(this)}>Show Commits</button>
        <button onClick={this.showPulls.bind(this)}>Show Pulls</button>
        <button onClick={this.showForks.bind(this)}>Show Forks</button>
        {content}
      </div>

      )
  }

  showCommits() {
    this.setState({mode:'commits'});
  }

  showPulls() {
    this.setState({mode:'pulls'});
  }

  showForks() {
    this.setState({mode: 'forks'});
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
    ajax
      .get('https://api.github.com/repos/facebook/react/commits')
      .end((error, response) => {
        if( !error && response) {
          console.dir(response.body);
          this.setState({commits: response.body});
        } else {
          console.log("There was an error fethching from github", error);
        }
      });
    ajax
      .get('https://api.github.com/repos/facebook/react/forks')
      .end((error, response) => {
        if( !error && response) {
          console.dir(response.body);
          this.setState({forks: response.body});
        } else {
          console.log("There was an error fethching from github", error);
        }
      });
    ajax
      .get('https://api.github.com/repos/facebook/react/pulls')
      .end((error, response) => {
        if( !error && response) {
          console.dir(response.body);
          this.setState({pulls: response.body});
        } else {
          console.log("There was an error fethching from github", error);
        }
      });
  }
}

export default Detail;
