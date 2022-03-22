+++
title = "Site Structure"
weight = 3
updated = 2022-03-21
+++

One of the reasons we've built {{ lhtlhtp() }} with Zola is because it's of how
opinionated it is. Familiarity with how Zola prefers things to be structured is
not required, but will help you understand where things are, how to move them
around, and how to add content easily.

## Structure

### GitHub Specific Files

```
./
├───.github
│   └───workflows
```

This section contains issue and pull request templates for use on 
[GitHub.com](https://github.com/), as well as GitHub workflow actions (written
in YAML). Any work being done in here should be looked over carefully because
this is where we keep our GitHub action that publishes the site.

### Content

```
├───content
│   ├───contributing
│   ├───credits
│   ├───csharp
│   ├───first-steps
│   ├───html-css-js
│   ├───javascript
│   ├───react
│   ├───refs
│   ├───ruby
│   ├───test
│   └───welcome
```

Here we have the meat of the site. The `content` directory lets Zola know where
we're storing the content for our site, and each folder within content
represents a `section` as defined by Zola. Within each section you'll find an
`_index.md`, and various other Markdown files that each represent a page
contained within that section.

### Styling

```
├───sass
│       site.scss
│       _base.scss
│       ...
```

You can find the styling for our site under `sass`. Each file is some SCSS that
should be named for the section that it styles with a preceding underscore to
indicate that it is only imported by `site.scss`. Any variables that would be
used site wide should be defined in `site.scss` to easily change whatever value
the variable is being used to adjust.

### Static Files

```
├───static
```

This section should contain any static files we might want to use in our site
including any JavaScript, images, or other files that don't need to be processed
directly by Zola. Included in here is a file named `CNAME` which GitHub uses to
determine the URL of our site when building it to host.

### Templates & Shortcodes

```
├───templates
│   └───shortcodes
```

In templates we currently have the HTML pages that Zola will use to insert our
converted Markdown into. `index.html` represents the home page for out site, but
because we are focused solely on providing content we've foregone a splash page
and instead use it as a base upon which to build each of our pages. `page.html`
extends `index.html` in that it provides a little bit of TERA code to set the
title for any page that we are on, and may in the future create a hyperlinked
table of contents for a page. We keep the two separate to make it easier to
conform to Zola's idea of how a site should be structured and displayed.

### Themes

```
└───themes
```

We do not currently use a theme with our site, but if we did this is where we'd
keep it. At some point in the future we may extract out our styling to be a 
theme, but that is unlikely. If you'd like to learn more about Zola themes it's
always a good idea to check out [Zola's documentation](https://www.getzola.org/documentation/themes/installing-and-using-themes/).
