+++
title = "Tools"
weight = 2
updated = 2022-04-24
+++

Here are some tools we think will help streamline your workflow, and make you a
more efficient developer.

## gh

`gh` is the CLI (command-line interface) for GitHub. It is a flexible, powerful
tool that allows you to manage most (if not all) of the features you're provided
with by GitHub for your account.

Why you should care: `gh` makes it trivially easy for you to create repos, push
whatever commits you've made in your local repo to it, and will keep you in the
flow of your work. At Epicodus it means you can start a project, init it's repo,
make a change, commit, then create a repo without having to click out of VSCode.

### Installation

**macOS**
```sh
# Homebrew
brew install gh # install
brew upgrade gh # upgrade

# MacPorts
sudo port install gh # install
sudo port selfupdate && sudo port upgrade gh # upgrade
```

**Linux & BSD**

Given the number of options available please visit the documentation for install
methods at [the `gh` repo](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

**Windows**
```ps1
# WinGet
winget install --id GitHub.cli # install
winget upgrade --id GitHub.cli # upgrade

# scoop
scoop install gh # install
scoop update gh # upgrade

# Chocolatey
choco install gh # install
choco upgrade gh # upgrade
```


### Authentication

In order to use `gh` with GitHub you have to authenticate with GitHubs servers.
You'll find an example login session below, but there are other options most of
which you won't need or care about during your time at Epicodus. If you want to
dive in please refer to the documentation link at the bottom of this section.

```sh
# Simple auth login example
$ gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: {your code will appear here}
Press Enter to open github.com in your browser...
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as {username}

# Checking auth status
$ gh auth status
github.com
  ✓ Logged in to github.com as {username} ({path to auth token})
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: *******************

# Logout
$ gh logout
? Are you sure you want to log out of github.com account '{username}'? Yes
✓ Logged out of github.com account '{username}'
```


### Creating a repo

Most of the commands in the example below should be familiar to you after your
first few weeks at Epicodus. This example shows you just how quick and easy it
is to create a GitHub repo from your terminal.

```sh
# Create our project directory & init git
$ cd ~/projects
$ mkdir -p tools_examples/gh/
$ git init tools_examples
Initialized empty Git repository in ~/projects/tools_examples/.git/

# Add a file and create our first commit
$ echo "Hello Epicodians!" > ./tools_examples/gh/README.md
$ git add ./tools_examples
$ git commit -m "First commit"
[main (root-commit) 77755db] First commit
 1 file changed, 1 insertion(+)
 create mode 100644 gh/README.md

# Using `gh` to create our new repo on GitHub
$ cd tools_examples
$ gh repo create
? What would you like to do? Push an existing local repository to GitHub
? Path to local repository (.)
? Repository name (tools_examples)
? Description Examples for different tools Epicodus students should learn to use.
? Visibility Public
✓ Created repository wjwat/tools_examples on GitHub
? Add a remote? Yes
? What should the new remote be called? (origin)
✓ Added remote https://github.com/wjwat/tools_examples.git
? Would you like to push commits from the current branch to the "origin"? Yes
✓ Pushed commits to https://github.com/wjwat/tools_examples.git
```

## Further Exploration

* [`gh` site](https://cli.github.com/)
* [`gh` manual](https://cli.github.com/manual/)
* [Official Installation Instructions](https://github.com/cli/cli#installation)
* [`gh auth login` documentation](https://cli.github.com/manual/gh_auth_login)
* [`gh repo create` documentation](https://cli.github.com/manual/gh_repo_create)


## nvm/pyenv/rvm/asdf

## rg

## git

## curl

## jq
