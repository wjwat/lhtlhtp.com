# [LHTLHTP.COM](https://lhtlhtp.com/)

A companion site to [learnhowtoprogram.com](https://www.learnhowtoprogram.com/),
a site built to be used in the [Epicodus](https://www.epicodus.com/) coding
boot camp.

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
