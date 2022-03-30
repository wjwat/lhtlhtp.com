# List of current shortcodes

If you'd like to add your own shortcode please update this document to provide
a place for people unfamiliar with [Zola](https://www.getzola.org/) & [shortcodes](https://www.getzola.org/documentation/content/shortcodes/)
 the ability to use them throughout the site.

## contributor(...)

Creates a bulleted item to use give credit to contributor with `name`.

#### Parameters

<dl>
  <dt>name={str}</dt>
  <dd>Name you'd like to be credited with, required to use this shortcode</dd>
  <dt>github={str}</dt>
  <dd>Username of github</dd>
  <dt>linkedin={str}</dt>
  <dd>Public URL name part in your linkedin URL (ex: https//www.linkedin.com/in/{name part})</dd>
  <dt>site={str} & site_name={str}</dt>
  <dd>Both are required to display site URL</dd>
  <dd>Site URL, and site name. Will link to *site* with text of *site_name*</dd>
</dl>

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

#### Parameters

<dl>
  <dt>text={str}</dt>
  <dd>Accepts a string which is used to provide the text in a generated link.</dd>
  <dd>Ex: `{{ repo(text="contribute") }}` will produce `&lt;a href="path/to/repo"&gt;contribute&lt;/a&gt;`</dd>
</dl>
