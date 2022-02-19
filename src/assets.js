/** List of images shown in Gallery */
const GalleryImages = [
  { name: 'minecart.png'                   },
  { name: 'bartop.jpg'                     },
  { name: 'clyde-steph.jpg'                },
  { name: 'clyde-cat.jpg',   maxWidth: 300 },
  { name: 'tackle.jpeg',     maxWidth: 450 },
  { name: 'paper-plane.jpg', maxWidth: 200 },
  { name: 'harpie.jpg'                     },
  { name: 'mouse-owl.jpg',   maxWidth: 280 },
  { name: 'reykjavik.jpg',   maxWidth: 300 },
  { name: 'special.jpeg',    maxWidth: 350 },
  { name: 'butt-hammer.jpg', maxWidth: 200 },
];

/**
 * List of sounds with associated label, icon, and sound file.
 *
 * Random buttons specify instead the soundPrefix before the number in each file name.
 *
 * categories must match one of the Pills in SoundboardCategorySelect.js
 * and soundsForCategory in SoundboardPage.js
 *
 * Note - id is used for favorites list, don't change after adding!
 */
const Sounds = [
  { id: 'rick',           categories: ['ia', 'songs'],  label: 'Angels',             icon: 'rick.jpg',           sound: 'angels'                 },
  { id: 'knuckles',       categories: ['ia'],           label: 'Oh No',              icon: 'knuckles.jpg',       sound: 'ohno'                   },
  { id: 'butters',        categories: ['ia'],           label: 'Robot Friend',       icon: 'butters.jpg',        sound: 'robot'                  },
  { id: 'bakedbeans',     categories: ['ia'],           label: 'Baked Beans',        icon: 'bakedbeans.jpg',     sound: 'bakedbeans'             },
  { id: 'howcouldthis',   categories: ['ia'],           label: 'How Could This',     icon: 'howcouldthis.jpg',   sound: 'howcouldthis'           },
  { id: 'probedroid',     categories: ['ia'],           label: 'Probe Droid',        icon: 'probedroid.png',     sound: 'probedroid'             },
  { id: 'gandalfeuropop', categories: ['ia', 'songs'],  label: 'Gandalf Europop',    icon: 'gandalfeuropop.png', sound: 'gandalfeuropop'         },
  { id: 'moonpie',        categories: ['ia'],           label: 'What a Time',        icon: 'moonpie.jpg',        sound: 'whatatime'              },
  { id: 'handgrenade',    categories: ['ia'],           label: 'Holy Hand Grenade',  icon: 'handgrenade.png',    sound: 'handgrenade'            },
  { id: 'skyrim_quest',   categories: ['dnd'],          label: 'Quest Accepted',     icon: 'skyrim_quest.png',   sound: 'skyrim_quest'           },
  { id: 'scum',           categories: ['dnd'],          label: 'Stop Right There!',  icon: 'scum.png',           sound: 'scum'                   },
  { id: 'ackbar',         categories: ['dnd'],          label: 'It\'s a Trap!',      icon: 'ackbar.jpg',         sound: 'ackbar'                 },
  { id: 'alert',          categories: ['dnd'],          label: 'Alert',              icon: 'alert.jpg',          sound: 'alert'                  },
  { id: 'wii_shop',       categories: ['dnd', 'songs'], label: 'Wii Shop',           icon: 'wii_shop.jpg',       sound: 'wii_shop'               },
  { id: 'zelda_shop',     categories: ['dnd', 'songs'], label: 'Zelda Shop',         icon: 'zelda_shop.jpg',     sound: 'zelda_shop'             },
  { id: 'ff7',            categories: ['dnd'],          label: 'FF7 Victory',        icon: 'ff7.jpg',            sound: 'ff7'                    },
  { id: 'pookie',         categories: ['dnd'],          label: 'Search for Traps',   icon: 'pookie.jpg',         sound: 'pookie'                 },
  { id: 'pokemon',        categories: ['dnd', 'songs'], label: 'Pokemon Battle',     icon: 'pokemon.jpg',        sound: 'pokemon'                },
  { id: 'sean',           categories: ['dnd', 'songs'], label: 'Ghost Town',         icon: 'sean.png',           sound: 'sean'                   },
  { id: 'dundundun',      categories: ['dnd'],          label: 'Dun Dun Duuuunn!!',  icon: 'dundundun.jpg',      sound: 'dundundun'              },
  { id: 'trombone',       categories: ['dnd'],          label: 'Bombom ba bom',      icon: 'trombone.jpg',       sound: 'fail_trombone'          },
  { id: 'phil_swift',     categories: ['dnd'],          label: 'A Lot of Damage',    icon: 'phil_swift.jpg',     sound: 'lotta_damage_1'         },
  { id: 'jontron',        categories: ['dnd'],          label: 'A Lot of Damage?',   icon: 'jontron.png',        sound: 'lotta_damage_2'         },
  { id: 'bat_transition', categories: ['dnd'],          label: 'Bat Transition',     icon: 'bat_transition.jpg', sound: 'bat_transition'         },
  { id: 'happy_children', categories: ['dnd'],          label: 'Yaaaaaayyyy',        icon: 'happy_children.jpg', sound: 'yaaay'                  },
  { id: 'sad_trombone',   categories: ['dnd'],          label: 'Bwa bwa bwaaa',      icon: 'sad_trombone.jpg',   sound: 'sad_trombone'           },
  { id: 'mercy',          categories: ['dnd'],          label: 'God Have Mercy',     icon: 'mercy.jpg',          sound: 'mercy'                  },
  { id: 'yes',            categories: ['dnd'],          label: 'Toast - Yes!',       icon: 'yes.jpg',            soundPrefix: 'yes_', max: 11        },
  { id: 'garbage_man',    categories: ['dnd'],          label: 'The Garbage Man',    icon: 'garbage_man.png',    sound: 'garbage_man'            },
  { id: 'the_tower',      categories: ['dnd'],          label: 'The Tower!',         icon: 'the_tower.jpg',      sound: 'tower'                  },
  { id: 'chest_opening',  categories: ['dnd'],          label: 'Chest Opening',      icon: 'chest_opening.png',  sound: 'chest_opening'          },
  { id: 'chest_prize',    categories: ['dnd'],          label: 'Chest Prize',        icon: 'chest_prize.jpg',    sound: 'chest_prize'            },
  { id: 'dulcimer',       categories: ['dnd', 'songs'], label: 'Gridders\' Lament',  icon: 'dulcimer.jpg',       sound: 'dulcimer'               },
  { id: 'enemy',          categories: ['dnd', 'songs'], label: 'Enemy Approaching',  icon: 'enemy.jpg',          sound: 'enemy_approaching'      },
  { id: 'nogodno',        categories: ['dnd'],          label: 'No God No',          icon: 'nogodno.jpg',        sound: 'nogodno'                },
  { id: 'wilhelm',        categories: ['dnd'],          label: 'Wilhelm Scream',     icon: 'wilhelm.jpg',        sound: 'wilhelm'                },
  { id: 'thatshot',       categories: ['dnd'],          label: 'That\'s Hot',        icon: 'thatshot.jpg',       soundPrefix: 'thatshot', max: 3     },
  { id: 'ff7fight',       categories: ['dnd', 'songs'], label: 'FF7 Fight',          icon: 'ff7fight.jpg',       sound: 'ff7fight'               },
  { id: 'oof',            categories: ['dnd'],          label: 'OOF',                icon: 'oof.jpg',            sound: 'oof'                    },
  { id: 'mcoof',          categories: ['dnd'],          label: 'You Died!',          icon: 'mcoof.png',          sound: 'mcoof'                  },
  { id: 'howie',          categories: ['dnd'],          label: 'Howie Scream',       icon: 'howie.jpg',          sound: 'howie'                  },
  { id: 'curb',           categories: ['dnd'],          label: 'Curb',               icon: 'curb.jpg',           sound: 'curb'                   },
  { id: 'guard',          categories: ['dnd'],          label: 'Oblivion Guard',     icon: 'scum.png',           soundPrefix: 'guard', max: 21       },
  { id: 'dm',             categories: ['dnd'],          label: 'Democracy Manifest', icon: 'dm.jpg',             soundPrefix: 'dm',    max: 10       },
  { id: 'wasted',         categories: ['dnd'],          label: 'Wasted',             icon: 'wasted.jpg',         sound: 'wasted'                 },
  { id: 'youdied',        categories: ['dnd'],          label: 'YOU DIED',           icon: 'youdied.jpg',        sound: 'youdied'                },
  { id: 'theyrefresh',    categories: ['dnd'],          label: 'They\'re fresh',     icon: 'theyrefresh.jpg',    sound: 'theyrefresh'            },
  { id: 'harrydead',      categories: [],               label: 'Harry is dead',      icon: 'harrydead.jpg',      sound: 'harrydead'              },
  { id: 'voldylaugh',     categories: [],               label: 'Eh, hehe!',          icon: 'voldylaugh.jpg',     sound: 'voldylaugh'             },
  { id: 'afinehit',       categories: ['dnd'],          label: 'A fine hit!',        icon: 'afinehit.png',       sound: 'afinehit'               },
  { id: 'drg_salute',     categories: ['drg'],          label: 'Salute',             icon: 'drg_salute.png',     soundPrefix: 'drg_salute_', max: 11 },
  { id: 'drg_mule',       categories: ['drg'],          label: 'M.U.L.E',            icon: 'drg_mule.png',       soundPrefix: 'drg_mule_', max: 10   },
];
