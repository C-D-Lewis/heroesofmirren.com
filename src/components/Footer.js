/**
 * Footer component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('Footer', () => fabricate('Column')
  .setStyles({
    justifyContent: 'center',
    backgroundColor: '#444',
    boxShadow: 'inset 1px 4px 11px -6px black',
  })
  .setChildren([
    fabricate('Row')
      .setStyles({
        justifyContent: 'center',
        padding: '10px 0px',
        alignItems: 'center',
      })
      .setChildren([
        fabricate('img')
          .setAttributes({ src: './assets/images/github.png' })
          .setStyles({ width: '32px', height: '32px' }),
        fabricate('span')
          .setStyles({
            color: 'white',
            marginLeft: '10px',
            marginRight: '5px',
          })
          .setText('Source available'),
        fabricate('a')
          .setAttributes({
            href: 'https://github.com/C-D-Lewis/heroesofmirren.com',
            target: '_blank',
          })
          .setText('on GitHub'),
      ]),
  ]));
