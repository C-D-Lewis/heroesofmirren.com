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
    backgroundColor: 'white',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: '15px auto',
    padding: '12px',
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
 * @param {string} name - Name of the image.
 * @returns {HTMLElement}
 */
const GalleryThumbnail = (name) => {
  const src = `./assets/gallery/${name}`;

  return fabricate('img')
    .withAttributes({ src })
    .withStyles({
      width: '160px',
      margin: 'auto',
      margin: '10px',
      objectFit: 'contain',
      cursor: 'pointer',
      border: '2px black',
      borderRadius: '10px',
      maxHeight: '160px',
      padding: '5px',
      backgroundColor: 'white',
    })
    .onClick(() => window.open(src, '_blank'));
};

/**
 * GalleryPage component.
 *
 * @returns {HTMLElement}
 */
const GalleryPage = () => {
  let groups = [];
  const imageList = [...GalleryImages];
  while (imageList.length) {
    groups.push(imageList.splice(0, 2));
  }

  return fabricate.Row()
    .withStyles({
      backgroundColor: '#eee',
      flexWrap: 'wrap',
      paddingTop: '10px',
    })
    .withChildren([
      ...(
        GalleryImages
          .map(({ name }) => GalleryThumbnail(name))
          .reduce((acc, item) => {}, [])
        ),
      Attribution(),
    ]);
