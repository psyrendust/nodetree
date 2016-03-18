# Contributing

We'd love for you to contribute to our source code and to make our projects better than they are today! Here are the guidelines we'd like you to follow:

 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)
 - [Further Info](#info)

## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to our [GitHub Repository][github]. Even better you can submit a Pull Request
with a fix.

**Please see the Submission Guidelines below**.

## <a name="feature"></a> Want a Feature?
You can request a new feature by submitting an issue to our [GitHub Repository][github].  If you
would like to implement a new feature then consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be discussed first by submitting an
issue to the [GitHub Repository][github] so that we can better coordinate our efforts, prevent duplication
of work, and help you to craft the change so that it is successfully accepted into the project.
* **Small Changes** can be crafted and submitted to the [GitHub Repository][github] as a Pull Request.


## <a name="docs"></a> Want a Doc Fix?
If you want to help improve the docs, it's a good idea to let others know what you're working on to
minimize duplication of effort. Before starting, check out the issue queue for
[Milestone:Docs Only][milestone-docs-only].
Comment on an issue to let others know what you're working on, or create a new issue if your work
doesn't fit within the scope of any of the existing doc fix projects.

For large fixes, please build and test the documentation before submitting the PR to be sure you haven't
accidentally introduced any layout or formatting issues. You should also make sure that your commit message
is labeled "docs:" and follows the **Git Commit Guidelines** outlined below.

If you're just making a small change, don't worry about filing an issue first. Fork the repository and make a quick change on the fly. When naming the commit, it is advised to still label it according to the commit guidelines below, by starting the commit message with **docs** and referencing the filename. Since this is not obvious and some changes are made on the fly, this is not strictly necessary and we will understand if this isn't done the first few times.

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue
Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features, by not reporting duplicate issues.  Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Motivation for or Use Case** - explain why this is a bug for you
* **Project Version(s)** - is it a regression?
* **Environment, browsers and Operating System** - is this a problem with all browsers or only IE8 or a specific version of Node.js?
* **Reproduce the Error** - provide a live example (using [Plunker][plunker] or
  [JSFiddle][jsfiddle]) or an unambiguous set of steps.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

Here is a great example of a well defined issue: https://github.com/angular/angular.js/issues/5069

**If you get help, help others. Good karma rulez!**

### Submitting a Pull Request
Before you submit your pull request consider the following guidelines:

* Search [GitHub][pulls] for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch develop
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full project test suite by running `npm run test` and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit-message-format). Adherence to the [commit message conventions](#commit-message-format) is required because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Build your changes locally to ensure all the tests pass:

    ```shell
    npm run build
    ```

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `develop` branch.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the project test suite to ensure tests are still passing.
  * Commit your changes to your branch (e.g. `my-fix-branch`).
  * Push the changes to your GitHub repository (this will update your Pull Request).

If the PR gets too outdated we may ask you to rebase and force push to update the PR:

    ```shell
    git checkout develop
    git pull --rebase upstream develop
    git checkout my-fix-branch
    git rebase develop -i
    git push origin my-fix-branch -f
    ```

*WARNING. Squashing or reverting commits and forced push thereafter may remove GitHub comments
on code that were previously made by you and others in your commits.*

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the develop branch:

    ```shell
    git checkout develop -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your develop with the latest upstream version:

    ```shell
    git pull --rebase upstream develop
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more [specs][unit-testing].
* All public API methods **must be documented** with esdoc. To see how we document our APIs, please check
  out the existing [docs][dev-doc].
* With the exceptions listed below, we follow the rules contained in
  [AirBnB's JavaScript Style Guide][js-style-guide]:
    * Wrap all code at **160 characters**.
    * To write concise code that can be better minified, we **use aliases internally** that map to the
      external API. See our existing code to see what we mean.
    * The best guidance is to do what makes the most sense.

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run `npm run commit` in your terminal after staging your changes in git.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 80 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example `index`,
`app`, `utils`, `core`, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

A few references to help:

* http://365git.tumblr.com/post/3308646748/writing-git-commit-messages
* http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

#### Breaking changes
All **Breaking Changes** have to be mentioned as a breaking change block in the footer, which should start with the word `BREAKING CHANGE:`` with a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes.

```markdown
    BREAKING CHANGE: LoadManager now only exposes 2 static methods `get` and `put`.


    The exposed methods now return a Promise vs passing it a callback method.

    To migrate the code follow the example below:

    Before:

    ```js
    LoadManager.load('url', {
      parser: JSON.parse,
      onComplete: (results) => {
        console.log(results);
      },
    });
    ```

    After:

    ```js
    LoadManager
      .get('url', {
        parser: JSON.parse,
      })
      .then((results) => {
        console.log(results);
      }, (err) => {
        console.error(err);
      });
    ```

    Or with Async functions:

    ```js
    async function loadAll() {
      try {
        var result1 = await LoadManager.get('url1', {parser: JSON.parse});
        var result2 = await LoadManager.get('url2', {parser: JSON.parse});
        console.log(result1);
        console.log(result2);
      } catch (e) {
        console.warn(e);
      }
    }
    loadAll();
    ```
```

#### Referencing issues
Closed bugs should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

```
Closes #234
```

or in case of multiple issues:

```
Closes #123, #245, #992
```

### Examples
```md
feat(url): Update url to use fooId instead barId

In an effort to reduce the dependency on `foo.bar.io` the hash string
in the url now uses `fooId` as the identifier for a foobar.

Affects:
* scripts/templates/index.html
* scripts/templates/test.js
* src/core/utils/index.js
```

```md
feat(utils): Update utils method from `load` to `get`

BREAKING CHANGE: `utils.load` is now `utils.get`
```

```md
fix(babel): Parent constructor calls do not work in IE <= 10

Calling super for a parent constructor does not work on IE <= 10 when
using Babel 6. More info can be found here:
https://phabricator.babeljs.io/T3041

Setting 'loose' to true with the Babel plugin 'transform-es2015-classes'
when creating a build fixes the issue in IE 10.
```

```md
refactor(core): Update sort order of properties in `core`
```

```md
chore(app): Remove unused `import` statement from `core/app`
```

```md
perf(Button): Remove transparency from buttons to increase rendering performance
```

```md
docs(README): Add `README.md` to project
```

```markdown
    feat(LoadManager): Update to use `request`, Promises, and async functions

    BREAKING CHANGE: LoadManager now only exposes 2 static methods `get` and `put`.


    The exposed methods now return a Promise vs passing it a callback method.

    To migrate the code follow the example below:

    Before:

    ```js
    LoadManager.load('url', {
      parser: JSON.parse,
      onComplete: (results) => {
        console.log(results);
      },
    });
    ```

    After:

    ```js
    LoadManager
      .get('url', {
        parser: JSON.parse,
      })
      .then((results) => {
        console.log(results);
      }, (err) => {
        console.error(err);
      });
    ```

    Or with Async functions:

    ```js
    async function loadAll() {
      try {
        var result1 = await LoadManager.get('url1', {parser: JSON.parse});
        var result2 = await LoadManager.get('url2', {parser: JSON.parse});
        console.log(result1);
        console.log(result2);
      } catch (e) {
        console.warn(e);
      }
    }
    loadAll();
    ```
```


## <a name="info"></a> Further Information
You can find out more detailed information about contributing in the
[project documentation][contributing].



[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[contributing]: https://github.com/psyrendust/nodetree/blob/master/CONTRIBUTING.md
[dev-doc]: https://github.com/psyrendust/nodetree/blob/master/README.md
[github]: https://github.com/psyrendust/nodetree
[js-style-guide]: https://github.com/airbnb/javascript
[jsfiddle]: http://jsfiddle.net/
[milestone-docs-only]: https://github.com/psyrendust/nodetree/issues?milestone=24&state=open
[plunker]: http://plnkr.co/edit
[pulls]: https://github.com/psyrendust/nodetree/pulls
[unit-testing]: https://github.com/psyrendust/nodetree/blob/master/README.md
