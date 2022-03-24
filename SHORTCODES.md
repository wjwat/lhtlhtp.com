# List of current shortcodes

If you'd like to add your own shortcode please update this document to provide
a place for people unfamiliar with [Zola](https://www.getzola.org/) & [shortcodes](https://www.getzola.org/documentation/content/shortcodes/)
 the ability to use them throughout the site.

## issue()

Accepts no parameters, and provides a link to the issue section on GitHub where
the repo is currently hosted.

## lhtlhtp()

Accepts no parameters. Provides a stylized version of the site name to help
distinguish it from surrounding text, and provide a visual break if used in
longer pieces of text.

## repo(text=)

Provides a link to the repo with a default text of `repo`.

### text=

This parameter accepts a string which is used to provide the text in a generated
link.

`{{ repo(text="contribute") }}` will produce `<a href="path/to/repo">contribute</a>`
