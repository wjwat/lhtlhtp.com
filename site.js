// This adds links back to where a footnote is originally referenced.
const addBackLinks = () => {
  for (const ref of document.getElementsByClassName('footnote-reference')) {
    const hash = ref.children[0].hash.substring(1);
    const refhash = 'ref:' + hash;
    ref.id = refhash;
  }

  for (const footnote of document.getElementsByClassName('footnote-definition')) {
    const hash = footnote.id;
    const refhash = 'ref:' + hash;
    const backlink = document.createElement('a');

    backlink.href = '#' + refhash;
    backlink.className = 'footnote-backlink';
    backlink.innerText = '^';

    sup = footnote.children[0];
    sup.appendChild(backlink);
  }
}

window.addEventListener('load', addBackLinks);
