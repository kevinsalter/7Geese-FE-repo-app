import React, {PropTypes} from 'react';
import RepoItem from './RepoItem.js';

const RepoList = props => {
  props.repos.sort((a, b) => {
    return (b.forks - a.forks);
  });

  const repos = props.repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  if (!props.repos.length) {
    return <div className="App-no-results">No Results 🤐</div>;
  } else {
    return (
      <ul className="App-repo-list">
        {repos}
      </ul>
    );
  }
};

RepoList.propTypes = {
  repos: PropTypes.array,
};

export default RepoList;
