/**
 * AtributionLinkIcon component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const AttributionLinkIcon = ({ img, url }) => fabricate('a')
  .setAttributes({ href: url, target: '_blank' })
  .setChildren([
    fabricate('Image', { src: `./assets/images/${img}` })
      .setStyles({
        width: '32px',
        height: '32px',
        margin: '5px',
      }),
  ]);

/**
 * Atribution component.
 *
 * @returns {HTMLElement}
 */
const Attribution = () => fabricate('Row')
  .setStyles({
    alignItems: 'center',
    borderRadius: '10px',
    margin: '15px auto',
    padding: '12px',
    justifyContent: 'center',
  })
  .setChildren([
    fabricate('span')
      .setStyles({
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginRight: '5px',
      })
      .setText('Art by Steph Bond'),
    AttributionLinkIcon({ img: 'twitter.png', url: 'https://twitter.com/anamorte_art' }),
    AttributionLinkIcon({ img: 'instagram.png', url: 'https://instagram.com/anamorte_art' }),
  ]);

/**
 * GalleryThumbnail component.
 *
 * @param {object} props - Component props.
 * @param {string} props.name - Name of the image.
 * @returns {HTMLElement}
 */
const GalleryThumbnail = ({ name }) => {
  const src = `./assets/gallery/${name}`;

  return fabricate('Image', { src })
    .setStyles({
      flex: '1 1 0',
      // minWidth: '0',
      margin: '0px 5px',
      objectFit: 'contain',
      cursor: 'pointer',
      border: '2px black',
      borderRadius: '10px',
      height: '160px',
      padding: '5px',
      backgroundColor: 'white',
      boxShadow: Theme.styles.boxShadow,
    })
    .onClick(() => window.open(src, '_blank'));
};

/**
 * GalleryRow component.
 *
 * @returns {HTMLElement}
 */
const GalleryRow = () => fabricate('Row')
  .setStyles({ justifyContent: 'center', padding: '5px' });

/**
 * GalleryPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('GalleryPage', () => {
  const rows = [];
  const imgs = [...Assets.galleryImages];
  while (imgs.length) rows.push(imgs.splice(0, 2));

  return fabricate('Column')
    .setStyles({
      backgroundColor: '#eee',
      paddingTop: '10px',
      boxShadow: 'black 1px 4px 6px -4px inset',
    })
    .setChildren([
      ...rows.map((items) => GalleryRow().setChildren(items.map(GalleryThumbnail))),
      Attribution(),
    ]);
});
