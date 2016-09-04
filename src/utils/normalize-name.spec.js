import normalizeName from './normalize-name.js';

describe('normalizeName', () => {
  it('should return a title cased version of the snake cased repo name', () => {
      const repoName = 'this-is-a-repo-name';

      expect(normalizeName(repoName)).toBe('This Is A Repo Name');
  });
});
