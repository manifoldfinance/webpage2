import React from 'react';

/**
 * This is the commit message of the last commit before building or running this project
 * @see ./package.json git-info for how to generate this commit
 */
import GitCommit from '../_git_commit';

const VersionComponent = () => (
  <div>
    <h1>version: {GitCommit.logMessage}</h1>
  </div>
);

export default VersionComponent;
