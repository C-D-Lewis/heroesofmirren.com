/**
 * Footer component.
 *
 * @returns {HTMLElement}
 */
const Footer = () => fabricate.Column()
  .withStyles({
    justifyContent: 'center',
    backgroundColor: '#444',
    boxShadow: 'inset 1px 4px 11px -6px black',
  })
  .withChildren([
    fabricate.Row()
      .withStyles({
        justifyContent: 'center',
        padding: '20px 0px',
        alignItems: 'center',
      })
      .withChildren([
        fabricate('img')
          .withAttributes({ src: './assets/images/github.png' })
          .withStyles({
            width: 32,
            height: 32,
          }),
        fabricate('span')
          .withStyles({
            color: 'white',
            marginLeft: 10,
            marginRight: 5,
          })
          .setText('Source available'),
        fabricate('a')
          .withAttributes({
            href: 'https://github.com/C-D-Lewis/heroesofmirren.com',
            target: '_blank',
          })
          .setText('on GitHub'),
      ])
  ]);
