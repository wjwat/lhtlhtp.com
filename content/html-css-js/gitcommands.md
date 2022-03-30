+++
title = "Git Commands"
weight = 4
updated = 2022-03-28
+++

Git can be intimidating at times, but it's actually a pretty neat tool when you
get more familiar with it and how it works with GitHub. (Maybe it's still a little
intimidating. Just a little.)

### Here's some basic git commands:

**$ git init**  
  This will initialize an invisible .git file in the directory your
  terminal/gitbash is in. [Do
  this](https://www.w3docs.com/snippets/git/how-to-delete-git-repository-created-with-init.html)
  if you accidentally 'initted' in the wrong place.

**$ git status**  
  This will compare what you have *saved* in your folder (workspace) to
  everything already git committed. It can also tell you what's staged to be
  committed, what isn't tracked at all, you know -- stuff like that.

**$ git diff** path/to/[filename]  
  This will show you what's been changed in a uncommitted file, in the off-chance
  you forgot. Press "Q" to get out of it.

**$ git add** path/to/[filename]  
  This will add a selected file to a staged area that will be committed with a
  git commit command. You can use "git add ." to add all changed files to that
  staged area.

**$ git restore --staged** path/to/[filename]  
  Accidentally add (stage) something that you didn't mean to? Un-stage
  it using this command. (You can unstage everything by using "git restore
  --staged .")

**$ git commit -m "[your note goes here]"**  
  This will commit what's been added to the staged area (via git add) to be
  semi-permantently tattooed in the git file you created with git init. Commit
  notes should always begin with a present tense verb (ie: add, correct, delete)
  and describe briefly what changes the files underwent. Be sure to shift-enter
  a couple lines down within the note and put "Co-authored-by: Yogi
  &lt;yogi.bear@picnicbasket.net&gt;" so your pal gets street cred too. Example:
  ```bash
  $ git commit -m "add header styling

  Co-authored-by: Felix LastName <felixthecat@meow.mix>"
  ```

**$ git log --oneline**  
  This will show you commits made (in descending order) for the entirety of the
  gitfile's existence. This means make your commit -m note short and sweet,
  because if we need to go back in history using this, it makes it so much
  easier to sort through. ("Q" to get out of this.)

**$git reset HEAD~**  
  This will redo your last commit made if you completely missed the basket and
  need to jump back in time.

  Not seeing the command you want? [There's plenty more.](https://git-scm.com/docs)
  Checkout our section of GitHub for more commands when you start wandering into
  repositories.


