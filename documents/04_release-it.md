## Install

https://github.com/release-it/release-it
https://github.com/release-it/conventional-changelog

```bash
$ yarn add --dev release-it @release-it/conventional-changelog
```

## Configuration

Out of the box, release-it has sane defaults, and plenty of options to configure it. Most projects use a
.release-it.json in the project root, or a release-it property in package.json.

→ See Configuration for more details.

Here's a quick example .release-it.json:

```json
{
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  "github": {
    "release": true
  }
}
```

## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `perf`: (A code change that improves performance)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (changes to the build process or auxiliary tools and libraries such as documentation generation etc; no
  production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md

## Github token

https://github.com/release-it/release-it/blob/master/docs/github-releases.md

```bash
touch .env
```

### generate token for release-it

https://github.com/settings/tokens/new?scopes=repo&description=release-it

### .release-it.json

```json
{
  "github": {
    "tokenRef": "GITHUB_TOKEN"
  }
}
```

### .env

```dotenv
# .env
GITHUB_TOKEN="github_token"
```
