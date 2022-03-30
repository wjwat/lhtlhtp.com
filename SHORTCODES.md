# List of current shortcodes

If you'd like to add your own shortcode please update this document to provide
a place for people unfamiliar with [Zola](https://www.getzola.org/) & [shortcodes](https://www.getzola.org/documentation/content/shortcodes/)
 the ability to use them throughout the site.

## contributor(...)

Creates a bulleted item to use give credit to contributor with `name`.

Accepts the following parameters:

**name=<str>**
: Name you'd like to be credited with, required to use shortcode

github=<str>
: Username on github

linkedin=<str>
: Public URL name in your linkedin URL (Ex: https://www.linkedin.com/in/<name>)

site=<str>
site_name=<str>
: Site URL, and site name. Will link to *site* with text of *site_name*

## issue()

Accepts no parameters, and provides a link to the issue section on GitHub where
the repo is currently hosted.

## lhtlhtp()

Accepts no parameters. Provides a stylized version of the site name to help
distinguish it from surrounding text, and provide a visual break if used in
longer pieces of text.

## repo(text=<str>)

Provides a link to the repo with a default text of `repo`, or the value passed
in as `text`.

text=<str>
: Accecpts a string which is used to provide the text in a generated link.

`{{ repo(text="contribute") }}` will produce `<a href="path/to/repo">contribute</a>`
