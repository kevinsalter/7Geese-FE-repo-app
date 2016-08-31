import React, {PropTypes} from 'react';

const RepoItem = props => {
  const normalizeNames = name => {
    const words = name.split('-');
    const titleCasedWords = words.map(word => {
      if (word !== 'as' && word !== 'on') {
        word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      }
      return word;
    })
    return titleCasedWords.join(' ');
  }

  return (
    <li className="App-repo-list-item">
      <ul className="App-repo-list-item--details">
        <li>
          <strong>Name:</strong> {normalizeNames(props.repo.name)}
        </li>
        <li>
          <strong>Fork count:</strong> {props.repo.forks}
        </li>
        <li>
          <strong>Language:</strong> {props.repo.language}
        </li>
        <li>
          <strong>Created date:</strong> {props.repo.created_at}
        </li>
      </ul>
    </li>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object,
};

export default RepoItem;
