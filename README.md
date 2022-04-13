# [LHTLHTP.COM](https://lhtlhtp.com/)

A companion site to [learnhowtoprogram.com](https://www.learnhowtoprogram.com/),
a site built to be used in the [Epicodus](https://www.epicodus.com/) coding
boot camp.

## Who We Are

Current & former Epicodus students who understand how difficult it can be to try
and transition into a new field. We've been down this path and our hope is to
make it a little easier for those coming behind us.

## How You Can Help

Write & submit content for the site! People of all abilities are welcome to step
into the process of writing, editing, and maintaining the content for the site.
We've done our best to help provide the information to make that easier a part
of the site itself. You can find that section [here](https://lhtlhtp.com/contributing/).

If you're not comfortable opening a pull request, or submitting content directly
then please open an issue for any typos, broken links, unclear sentences, or
anything else you feel can make our site better.

## Ways To Reach Us

The best way to reach someone about the site is either by [opening an issue](https://github.com/wjwat/lhtlhtp.com/issues),
starting a [discussion](https://github.com/wjwat/lhtlhtp.com/discussions), or joining our [Discord server](https://discord.gg/sMnvrW22cD).

## Bugs

### Code Blocks with Windows

There is an error where if you have a code block with Windows line endings
(CRLF) Zola will give you weird line numbers. https://github.com/getzola/zola/issues/1590

### Definition Lists

The library that Zola uses to parse Markdown does not currently support definition
lists. If you want to include a definition list you'll have to write it out with
HTML.
https://github.com/raphlinus/pulldown-cmark/issues/67

This is a discussion about description lists on the CommonMark forum.
https://talk.commonmark.org/t/description-list/289
