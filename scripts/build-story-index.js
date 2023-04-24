const { readdirSync, writeFileSync } = require('fs');

/** Input directory */
const INPUT_DIR = `${__dirname}/../assets/story`;
/** Output file. */
const OUTPUT_FILE = `${__dirname}/../assets/story/index.js`;
/** Filename regex */
const NAME_REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}-[a-zA-Z0-9-]{1,}.txt/;

/**
 * The main function.
 */
const main = () => {
  const names = readdirSync(INPUT_DIR)
    .filter((p) => NAME_REGEX.test(p));

  const content = `
window.StoryPages = [
  ${names.map((p) => `'${p}'`).join(',\n')}
]
`;

  writeFileSync(OUTPUT_FILE, content, 'utf-8');
};

main();
