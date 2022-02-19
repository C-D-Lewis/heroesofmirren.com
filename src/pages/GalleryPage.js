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
 * GalleryPage component.
 *
 * @returns {HTMLElement}
 */
const GalleryPage = () => fabricate.Column()
  .withStyles({
    backgroundColor: 'white',
    paddingTop: '50px',
  })
  .withChildren(
    GalleryImages.map(({ name, maxWidth = 500 }) => (
      LargeImage({ src: `./assets/gallery/${name}` })
        .withStyles({
          maxWidth: `${maxWidth}px`,
          margin: 'auto',
          marginBottom: '50px',
        })
    )),
  );
