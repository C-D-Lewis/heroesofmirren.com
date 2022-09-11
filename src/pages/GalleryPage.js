/* global Assets Theme */

/**
 * AtributionLinkIcon component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const AttributionLinkIcon = ({ img, url }) => fabricate('a')
  .withAttributes({ href: url, target: '_blank' })
  .withChildren([
    fabricate('img')
      .withAttributes({ src: `./assets/images/${img}` })
      .withStyles({
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
const Attribution = () => fabricate.Row()
  .withStyles({
    alignItems: 'center',
    borderRadius: '10px',
    margin: '15px auto',
    padding: '12px',
    justifyContent: 'center',
  })
  .withChildren([
    fabricate('span')
      .withStyles({
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginRight: '5px',
      })
      .setText('Art by Steph Bond'),
    AttributionLinkIcon({
      img: 'twitter.png',
      url: 'https://twitter.com/anamorte_art',
    }),
    AttributionLinkIcon({
      img: 'instagram.png',
      url: 'https://instagram.com/anamorte_art',
    }),
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

  return fabricate('img')
    .withAttributes({ src })
    .withStyles({
      flex: '1 1 0',
      minWidth: '0',
      margin: '0px 5px',
      objectFit: 'contain',
      cursor: 'pointer',
      border: '2px black',
      borderRadius: '10px',
      maxHeight: '160px',
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
const GalleryRow = () => fabricate.Row()
  .withStyles({ justifyContent: 'center', padding: '5px' });

/**
 * GalleryPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('GalleryPage', () => {
  const rows = [];
  const imgs = [...Assets.galleryImages];
  while (imgs.length) rows.push(imgs.splice(0, 2));

  return fabricate.Column()
    .withStyles({
      backgroundColor: '#eee',
      paddingTop: '10px',
    })
    .withChildren([
      ...rows.map((items) => GalleryRow().withChildren(items.map(GalleryThumbnail))),
      Attribution(),
    ]);
});
