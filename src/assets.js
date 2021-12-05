/** List of images shown in Gallery */
export const Images = [
  { name: 'minecart.png'                   },
  { name: 'bartop.jpg'                     },
  { name: 'clyde-steph.jpg'                },
  { name: 'clyde-cat.jpg',   maxWidth: 300 },
  { name: 'tackle.jpeg',     maxWidth: 410 },
  { name: 'paper-plane.jpg', maxWidth: 200 },
  { name: 'harpie.jpg'                     },
  { name: 'reykjavik.jpg',   maxWidth: 300 },
  { name: 'special.jpeg',    maxWidth: 300 },
  { name: 'butt-hammer.jpg', maxWidth: 200 },
];

/**
 * List of sounds with associated label, icon, and sound file.
 *
 * Random buttons specify instead the soundPrefix before the number in each file name.
 *
 * categories must match one of the Pills in SoundboardCategorySelect.jsx
 * and soundsForCategory in SoundboardPage.jsx
 *
 * Note - id is used for favorites list, don't change after adding!
 */
export const Sounds = [
  { id: 'rick',           categories: ['ia', 'songs'],  label: 'Angels',             icon: 'rick.jpg',           sound: 'angels.mp3'                 },
  { id: 'knuckles',       categories: ['ia'],           label: 'Oh No',              icon: 'knuckles.jpg',       sound: 'ohno.mp3'                   },
  { id: 'butters',        categories: ['ia'],           label: 'Robot Friend',       icon: 'butters.jpg',        sound: 'robot.mp3'                  },
  { id: 'bakedbeans',     categories: ['ia'],           label: 'Baked Beans',        icon: 'bakedbeans.jpg',     sound: 'bakedbeans.mp3'             },
  { id: 'howcouldthis',   categories: ['ia'],           label: 'How Could This',     icon: 'howcouldthis.jpg',   sound: 'howcouldthis.mp3'           },
  { id: 'probedroid',     categories: ['ia'],           label: 'Probe Droid',        icon: 'probedroid.png',     sound: 'probedroid.mp3'             },
  { id: 'gandalfeuropop', categories: ['ia', 'songs'],  label: 'Gandalf Europop',    icon: 'gandalfeuropop.png', sound: 'gandalfeuropop.mp3'         },
  { id: 'moonpie',        categories: ['ia'],           label: 'What a Time',        icon: 'moonpie.jpg',        sound: 'whatatime.mp3'              },
  { id: 'handgrenade',    categories: ['ia'],           label: 'Holy Hand Grenade',  icon: 'handgrenade.png',    sound: 'handgrenade.mp3'            },
  { id: 'skyrim_quest',   categories: ['dnd'],          label: 'Quest Accepted',     icon: 'skyrim_quest.png',   sound: 'skyrim_quest.mp3'           },
  { id: 'scum',           categories: ['dnd'],          label: 'Stop Right There!',  icon: 'scum.png',           sound: 'scum.mp3'                   },
  { id: 'ackbar',         categories: ['dnd'],          label: 'It\'s a Trap!',      icon: 'ackbar.jpg',         sound: 'ackbar.mp3'                 },
  { id: 'alert',          categories: ['dnd'],          label: 'Alert',              icon: 'alert.jpg',          sound: 'alert.mp3'                  },
  { id: 'wii_shop',       categories: ['dnd', 'songs'], label: 'Wii Shop',           icon: 'wii_shop.jpg',       sound: 'wii_shop.mp3'               },
  { id: 'zelda_shop',     categories: ['dnd', 'songs'], label: 'Zelda Shop',         icon: 'zelda_shop.jpg',     sound: 'zelda_shop.mp3'             },
  { id: 'ff7',            categories: ['dnd'],          label: 'FF7 Victory',        icon: 'ff7.jpg',            sound: 'ff7.mp3'                    },
  { id: 'pookie',         categories: ['dnd'],          label: 'Search for Traps',   icon: 'pookie.jpg',         sound: 'pookie.mp3'                 },
  { id: 'pokemon',        categories: ['dnd', 'songs'], label: 'Pokemon Battle',     icon: 'pokemon.jpg',        sound: 'pokemon.mp3'                },
  { id: 'sean',           categories: ['dnd', 'songs'], label: 'Ghost Town',         icon: 'sean.png',           sound: 'sean.mp3'                   },
  { id: 'dundundun',      categories: ['dnd'],          label: 'Dun Dun Duuuunn!!',  icon: 'dundundun.jpg',      sound: 'dundundun.mp3'              },
  { id: 'trombone',       categories: ['dnd'],          label: 'Bombom ba bom',      icon: 'trombone.jpg',       sound: 'fail_trombone.mp3'          },
  { id: 'phil_swift',     categories: ['dnd'],          label: 'A Lot of Damage',    icon: 'phil_swift.jpg',     sound: 'lotta_damage_1.mp3'         },
  { id: 'jontron',        categories: ['dnd'],          label: 'A Lot of Damage?',   icon: 'jontron.png',        sound: 'lotta_damage_2.mp3'         },
  { id: 'bat_transition', categories: ['dnd'],          label: 'Bat Transition',     icon: 'bat_transition.jpg', sound: 'bat_transition.mp3'         },
  { id: 'happy_children', categories: ['dnd'],          label: 'Yaaaaaayyyy',        icon: 'happy_children.jpg', sound: 'yaaay.mp3'                  },
  { id: 'sad_trombone',   categories: ['dnd'],          label: 'Bwa bwa bwaaa',      icon: 'sad_trombone.jpg',   sound: 'sad_trombone.mp3'           },
  { id: 'mercy',          categories: ['dnd'],          label: 'God Have Mercy',     icon: 'mercy.jpg',          sound: 'mercy.mp3'                  },
  { id: 'yes',            categories: ['dnd'],          label: 'Toast - Yes!',       icon: 'yes.jpg',            soundPrefix: 'yes_', max: 11        },
  { id: 'garbage_man',    categories: ['dnd'],          label: 'The Garbage Man',    icon: 'garbage_man.png',    sound: 'garbage_man.mp3'            },
  { id: 'the_tower',      categories: ['dnd'],          label: 'The Tower!',         icon: 'the_tower.jpg',      sound: 'tower.mp3'                  },
  { id: 'chest_opening',  categories: ['dnd'],          label: 'Chest Opening',      icon: 'chest_opening.png',  sound: 'chest_opening.mp3'          },
  { id: 'chest_prize',    categories: ['dnd'],          label: 'Chest Prize',        icon: 'chest_prize.jpg',    sound: 'chest_prize.mp3'            },
  { id: 'dulcimer',       categories: ['dnd', 'songs'], label: 'Gridders\' Lament',  icon: 'dulcimer.jpg',       sound: 'dulcimer.mp3'               },
  { id: 'enemy',          categories: ['dnd', 'songs'], label: 'Enemy Approaching',  icon: 'enemy.jpg',          sound: 'enemy_approaching.mp3'      },
  { id: 'nogodno',        categories: ['dnd'],          label: 'No God No',          icon: 'nogodno.jpg',        sound: 'nogodno.mp3'                },
  { id: 'wilhelm',        categories: ['dnd'],          label: 'Wilhelm Scream',     icon: 'wilhelm.jpg',        sound: 'wilhelm.mp3'                },
  { id: 'thatshot',       categories: ['dnd'],          label: 'That\'s Hot',        icon: 'thatshot.jpg',       soundPrefix: 'thatshot', max: 3     },
  { id: 'ff7fight',       categories: ['dnd', 'songs'], label: 'FF7 Fight',          icon: 'ff7fight.jpg',       sound: 'ff7fight.mp3'               },
  { id: 'oof',            categories: ['dnd'],          label: 'OOF',                icon: 'oof.jpg',            sound: 'oof.mp3'                    },
  { id: 'mcoof',          categories: ['dnd'],          label: 'You Died!',          icon: 'mcoof.png',          sound: 'mcoof.mp3'                  },
  { id: 'howie',          categories: ['dnd'],          label: 'Howie Scream',       icon: 'howie.jpg',          sound: 'howie.mp3'                  },
  { id: 'curb',           categories: ['dnd'],          label: 'Curb',               icon: 'curb.jpg',           sound: 'curb.mp3'                   },
  { id: 'guard',          categories: ['dnd'],          label: 'Oblivion Guard',     icon: 'scum.png',           soundPrefix: 'guard', max: 21       },
  { id: 'dm',             categories: ['dnd'],          label: 'Democracy Manifest', icon: 'dm.jpg',             soundPrefix: 'dm',    max: 10       },
  { id: 'wasted',         categories: ['dnd'],          label: 'Wasted',             icon: 'wasted.jpg',         sound: 'wasted.mp3'                 },
  { id: 'youdied',        categories: ['dnd'],          label: 'YOU DIED',           icon: 'youdied.jpg',        sound: 'youdied.mp3'                },
  { id: 'theyrefresh',    categories: ['dnd'],          label: 'They\'re fresh',     icon: 'theyrefresh.jpg',    sound: 'theyrefresh.mp3'            },
  { id: 'harrydead',      categories: [],               label: 'Harry is dead',      icon: 'harrydead.jpg',      sound: 'harrydead.mp3'              },
  { id: 'voldylaugh',     categories: [],               label: 'Eh, hehe!',          icon: 'voldylaugh.jpg',     sound: 'voldylaugh.mp3'             },
  { id: 'afinehit',       categories: ['dnd'],          label: 'A fine hit!',        icon: 'afinehit.png',       sound: 'afinehit.mp3'               },
  { id: 'drg_salute',     categories: ['drg'],          label: 'Salute',             icon: 'drg_salute.png',     soundPrefix: 'drg_salute_', max: 11 },
  { id: 'drg_mule',       categories: ['drg'],          label: 'M.U.L.E',            icon: 'drg_mule.png',       soundPrefix: 'drg_mule_', max: 10   },
];
