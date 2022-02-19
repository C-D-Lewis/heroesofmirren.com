/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement}
 */
const SoundboardPage = () => {
  /**
   * Show just the sounds for the chosen category.
   *
   * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
   */
  const soundsForCategory = (category) => {
    // Just the favorites, regardless of category
    if (category === 'favorites') {
      return Sounds
        .filter(p => favorites.includes(p.id))
        .map(data => data.sound
          ? SoundByte({ data })
          : RandomSoundByte({ data }));
    }

    // Sounds for this category
    return Sounds
      .filter(p => p.categories.includes(category) || category === 'all')
      .map(data => data.sound
        ? SoundByte({ data })
        : RandomSoundByte({ data }));
  };

  return fabricate('div')
    .withStyles({ height: '100%' })
    .withChildren([
      SoundboardCategorySelect(),
      fabricate.Row()
        .withStyles({
          flexWrap: 'wrap',
          backgroundColor: 'white',
          padding: '10px',
        })
        .watchState((el, state) => {
          // TODO: Know which key changed
          el.clear();

          el.addChildren(soundsForCategory(state.category));
        }),
    ]);
};
