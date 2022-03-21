+++
title = "Contributing"
weight = 2
updated = 2022-03-20
+++

Here we will try to outline how this site is build, and how you might be able
to contribute. Not every section will contain a detailed explanation, but
instead will link out to relevant sites & pages on the web that should help you
understand the technologies that are being used or referenced.

## How This Site Is Built

We've built {{ lhtlhtp() }} using the [static site generator](https://www.cloudflare.com/learning/performance/static-site-generator/)
[Zola](https://www.getzola.org/documentation/getting-started/overview/). The
sites content is written with [Markdown](https://en.wikipedia.org/wiki/Markdown)
(specifically [CommonMark](https://commonmark.org/)), and is built using HTML
templates with [SCSS](https://sass-lang.com/) providing the styling. Our goal was
to find a spot between flexibility and ease of use, and this page is written
with the help of easing your transition into helping {{ repo() }}.

### Zola

[Zola](https://www.getzola.org/) is an extremely fast static site generator
written in the [Rust](https://www.rust-lang.org/) programming language. It's
[documentation](https://www.getzola.org/documentation/getting-started/overview/)
is well written & approachable, and should cover all the aspects of writing and
styling a site while using it. The first step would be to [install Zola](https://www.getzola.org/documentation/getting-started/installation/) and make sure it is accessible in your terminal by typing:

```bash
$ zola --version
zola 0.15.3
```

Mac (and other OSes besides Windows) users will have an easy time of this as
long as they are familiar with using [Brew](https://brew.sh/),
[MacPorts](https://www.macports.org/), or a system installed package manager.
Windows users will have to contend with learning what their
[PATH](https://john-dugan.com/path-variable-in-windows/) is, and making sure
**Zola** is installed in a directory that is referenced in their PATH. If you
are comfortable with Windows administration it would be worth your time to use a
package manager like [Scoop](https://scoop.sh/), or
[Chocolatey](https://chocolatey.org/). If you're not comfortable with that then
don't worry! We've got steps to install Zola on Windows below.

#### Zola Install Instructions for Windows Users

- Navigate to the [Zola releases page on GitHub](https://github.com/getzola/zola/releases)
- Under `Assets` select the file with `windows` in it's name.<br>
  Ex: `zola-v0.15.3-x86_64-pc-windows-msvc.zip`
  Please note that the version of Zola listed in this section may have changed
  since this document was written.
- After the file is downloaded extract it to the directory where you would like
  to store it. Windows programs are usually installed into the `Program Files`
  directory under the `C:` drive, but it is perfectly acceptable to install it
  somewhere in your user folder, or in a directory directly under `C:`. Ex:
  `C:\devtools\Zola\`
- Make note of the directory where zola.exe is stored, and copy that path and
  [add it to your PATH environment variable](https://www.computerhope.com/issues/ch000549.htm).
- After you have added it to your PATH you may need to restart your terminal, or
  your computer, to make sure it's accessible now.

### SCSS / Sass

From [the Sass Wikipedia page](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)):

> Sass (short for syntactically awesome style sheets) is a preprocessor
> scripting language that is interpreted or compiled into Cascading Style Sheets
> (CSS)

The [guide on the Sass site](https://sass-lang.com/guide) provides a solid 15
minute overview of SCSS / Sass. Pay particular attention to **Variables**,
**Nesting**, and **Partials**. Please note that we use SCSS instead of Sass
which means declaration blocks are surrounded by curly braces, and every
declaration ends with a semi-colon. As always the [documentation on the Sass site](https://sass-lang.com/documentation) 
is plentiful, and well written.

For the difference between SCSS & Sass please take a look at [this answer](https://stackoverflow.com/a/5654471)
on Stack Overflow.

### Markdown

If you're not already familiar with it Markdown is a lightweight markup language
that is prevalent in many places on and off the web. Your best bet to get up to
speed is to take a look at this [cheat sheet](https://www.markdownguide.org/cheat-sheet/)
and the [basic](https://www.markdownguide.org/basic-syntax/) and 
[extended](https://www.markdownguide.org/extended-syntax/) syntax sections as
well.

## Making a Pull Request

[Instructions on making a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Opening an Issue

[Instructions on opening an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)
