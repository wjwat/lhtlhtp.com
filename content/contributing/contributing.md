+++
title = "Contributing"
weight = 4
updated = 2022-03-22
+++

We welcome anyone with an interest in contributing to {{ lhtlhtp() }} to please
do so. A community is nothing without the people putting in the work to build 
it. With that said please respect anyone you interact with, and do your best to
assume that everyone is approaching with the best intentions. This document
sets some guidelines to help keep things consistent across the site to make it
easier to contribute in the future.

## Writing The Code & Content

- [Install Zola](https://www.getzola.org/documentation/getting-started/installation/) (we also have [a section](http://127.0.0.1:1111/contributing/built/#zola) on installing Zola on our site.)
- Fork the repo to your account
- Clone the repo to your local machine
- Create a branch to make your changes on.
- Open the file/files you'd like to edit
- In your terminal type `zola serve` in the top level directory of the site.
  This will build a copy of the site and host it for you so you can the changes
  locally as you make them.
- Edit those files
- Push the changes to your forked copy of the site
- Open a pull request to get your changes approved.

## General Guidelines

- If you find yourself needing to style a particular piece of text in a certain 
  way in many different parts of the site consider using a shortcode. This gives
  us the flexibility of changing that text in a singular spot rather than having
  to comb through all the content files to change it in every single location.
  There is a list of current shortcodes in the top level of the {{ repo() }}.

### Cleanup

These are just a few things that should be easy to tackle and get you more
comfortable with using GitHub to open issues and make pull requests:

- Spelling mistakes.
- Sentences that could be reworded to clarify.
- Replacing broken links.
- Adding links to relevant pieces of information.

### Content

- Content should be well written, and easily approachable. If you feel a section
  is becoming too long, or gets too technical, open a  discussion on the {{
  repo() }} and see if another set of eyes can help you break a section down, or
  give a different perspective to help a reader understand.
- Pages should not be too long to read. Anything past the 10 minute mark should
  be a red flag, and should definitely be reviewed to make sure it's all
  necessary, or if the content might be better split into different pages.
- Please only use secondary headers and below for your sections (Ex: ##, ###,
  ...)
- Wrap content on line 80 to make it easier to fit multiple windows side by side.
  Going a little over this is okay, but try not to do it too much. The only
  exception to this should be when using links. Link text & urls that are too
  long are okay to have past the limit, but please break as soon as possible after
  those.

#### Images

- Images can be a great way to communicate information to someone, but can also
  add a lot of overhead to a site. Keep them to a minimum, and if they must be
  included do your best to pare them down as much as possible. SVG images are
  a great source for this.

#### Videos

- Videos are a great way to leverage the knowledge and skill of others to help
  people understand our content. Please do not add too many videos to a page.
  Each section should be easily digestible, and focused on answering a specific
  question, or imparting a specific piece of knowledge.
- We will never host our own videos so it is always good to double check any
  video links to make sure they are still available, and that it's from a
  reputable source.

### Styling

- Unless there is a specific need to change the styling we've done our best to
  style the site in a set it & forget it way.

### Structure & Goals

- Discussing the structure and goals of the site is always welcome, but please
  be prepared for a discussion to not have an immediate resolution. Dialogue is
  always valued!
- Please do not change anything to radically alter the structure or layout of
  the site without discussion first. Doing so will likely result in an immediate
  rejection of your PR, but if you let the community know and make a persuasive
  argument in favor of your change you'll have a better chance of having it
  accepted.

## Details

### Structuring Sections

```bash
./
└───content
    │   _index.md
    │
    ├───contributing
    │       contributing.md
    │       _index.md
    │
    └───welcome
            getting-started.md
            _index.md
```

Each section is a directory located under `content` and each directory contains
an `_index.md` that will describe that section, and various other Markdown files
that represent a page within that section. If you add a section or page please
name it lowercase, and use dashes to separate words.

```bash
# Good
./content/welcome
./content/welcome/getting-started.md
./content/welcome/_index.md
./content/first-steps
./content/how-to-bake-a-cake

# Bad
./content/welcome/-index.md
./content/welcome/Getting-Started.md
./content/FirstSteps
./content/how to bake a cake
```

### _index.md & Front Matter

Each directory, including the top level content directory, contains an `_index.md`
that provides information about the path where it is located in it's front
matter. The front matter for a Markdown file used with Zola is denoted by the
presence of `+++` at the beginning and end of the front matter.

```yaml
+++
title = "Welcome"
updated = 2022-03-22
+++
```

Currently the only thing present in the index front matter for content is a
redirect to the page that we want a visitor to see upon first coming to {{ lhtlhtp() }}.
We've done this to keep the focus on the content, and allow users to dive right
in. There may be content in the file itself, but it will not be displayed to
the user.

Each section should have it's own `_index.md` that tells Zola what the title for
that section is, and it's weight relative to the rest of the content of the site
as well as a redirect to the first page of content for that section. Redirects
are relative and should always point to the page with the lightest weight. Redirects
are relative to the structure located under `content` and do not need preceding
slashes.

```yaml
+++
title = "Welcome"
weight = 1
redirect_to = "welcome/getting-started"
updated = 2022-03-22
+++
```

Zola understands weight as a number where the higher the number the "heavier" it
is and so displays heavier items at the bottom while "lighter" items will float
to the top. For example an section with a weight of 5 is heavier than a section
with a weight of 1 so when it displays these sections in our sidebar that heavier
section will be displayed under lighter items. **We currently weight sections in
increments of one**. If you add a section please be sure to adjust all other
sections accordingly. Pages within a section should have weights as well, and
please note that a page weight only decides it weight for pages in that section,
and has no bearing to the weight set in a sections `_index.md`.

We also provide an `updated` variable that each page can use to display when
the page was last updated in the footer of that page. If it is not present it
will not be displayed. If it does exist please be sure to update it when you make
a change to a page.

### Styling

All styling is contained in the `sass` directory with `site.scss` being where
global variables are defined to be used in any imported SCSS files. The files
themselves are generally broken up to style a small section of the site. Too
small and you risk cluttering up that directory unnecessarily, and too broad
and it becomes a quagmire of code that no one will want to wade through. If
you're ever unsure open a discussion on the {{ repo() }}.

### Templates

There are a couple of template pages in the `template` directory that generally
should not be touched unless there's a specific issue with the code that's in
them.

#### Shortcodes

Within the `templates` directory is another one named `shortcodes` that contains
some shortcodes we use across the site. They contain small pieces of HTML & TERA
that get substituted in our Markdown when Zola builds our site. From the [Zola
documentation on shortcodes](https://www.getzola.org/documentation/content/shortcodes/):

> Broadly speaking, Zola's shortcodes cover two distinct use cases:
>
>   - Inject more complex HTML: Markdown is good for writing, but it isn't great when you need to add inline HTML or styling.
>   - Ease repetitive data based tasks: when you have external data that you want to display in your page's body.

