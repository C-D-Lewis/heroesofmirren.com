/* eslint-disable object-curly-newline */

const Assets = {};

/** List of images shown in Gallery */
Assets.galleryImages = [
  { name: 'minecart.png'    },
  { name: 'bartop.jpg'      },
  { name: 'clyde-steph.jpg' },
  { name: 'clyde-cat.jpg'   },
  { name: 'tackle.jpeg'     },
  { name: 'paper-plane.jpg' },
  { name: 'harpie.jpg'      },
  { name: 'mouse-owl.jpg'   },
  { name: 'reykjavik.jpg'   },
  { name: 'special.jpeg'    },
  { name: 'butt-hammer.jpg' },
  { name: 'clyde-coat.jpg'  },
  { name: 'ana-clyde-2.jpg' },
  { name: 'clyde-fight.jpg' },
  { name: 'ana-clyde.jpg'   },
  { name: 'megaclyde.jpg'   },
  { name: 'ishmael.jpg'     },
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
Assets.sounds = [
  { id: 'rick',           categories: ['ia', 'songs'],  label: 'Angels',              icon: 'rick.jpg',           sound: 'angels'                         },
  { id: 'knuckles',       categories: ['ia'],           label: 'Oh No',               icon: 'knuckles.jpg',       sound: 'ohno'                           },
  { id: 'butters',        categories: ['ia'],           label: 'Robot Friend',        icon: 'butters.jpg',        sound: 'robot'                          },
  { id: 'bakedbeans',     categories: ['ia'],           label: 'Baked Beans',         icon: 'bakedbeans.jpg',     sound: 'bakedbeans'                     },
  { id: 'howcouldthis',   categories: ['ia'],           label: 'How Could This',      icon: 'howcouldthis.jpg',   sound: 'howcouldthis'                   },
  { id: 'probedroid',     categories: ['ia'],           label: 'Probe Droid',         icon: 'probedroid.png',     sound: 'probedroid'                     },
  { id: 'gandalfeuropop', categories: ['ia', 'songs'],  label: 'Gandalf Europop',     icon: 'gandalfeuropop.png', sound: 'gandalfeuropop'                 },
  { id: 'moonpie',        categories: ['ia'],           label: 'What a Time',         icon: 'moonpie.jpg',        sound: 'whatatime'                      },
  { id: 'handgrenade',    categories: ['ia'],           label: 'Holy Hand Grenade',   icon: 'handgrenade.png',    sound: 'handgrenade'                    },
  { id: 'skyrim_quest',   categories: ['dnd'],          label: 'Quest Accepted',      icon: 'skyrim_quest.png',   sound: 'skyrim_quest'                   },
  { id: 'scum',           categories: ['dnd'],          label: 'Stop Right There!',   icon: 'scum.png',           sound: 'scum'                           },
  { id: 'ackbar',         categories: ['dnd'],          label: 'It\'s a Trap!',       icon: 'ackbar.jpg',         sound: 'ackbar'                         },
  { id: 'alert',          categories: ['dnd'],          label: 'Alert',               icon: 'alert.jpg',          sound: 'alert'                          },
  { id: 'wii_shop',       categories: ['dnd', 'songs'], label: 'Wii Shop',            icon: 'wii_shop.jpg',       sound: 'wii_shop'                       },
  { id: 'zelda_shop',     categories: ['dnd', 'songs'], label: 'Zelda Shop',          icon: 'zelda_shop.jpg',     sound: 'zelda_shop'                     },
  { id: 'ff7',            categories: ['dnd'],          label: 'FF7 Victory',         icon: 'ff7.jpg',            sound: 'ff7'                            },
  { id: 'pookie',         categories: ['dnd'],          label: 'Search for Traps',    icon: 'pookie.jpg',         sound: 'pookie'                         },
  { id: 'pokemon',        categories: ['dnd', 'songs'], label: 'Pokemon Battle',      icon: 'pokemon.jpg',        sound: 'pokemon'                        },
  { id: 'sean',           categories: ['dnd', 'songs'], label: 'Ghost Town',          icon: 'sean.png',           sound: 'sean'                           },
  { id: 'dundundun',      categories: ['dnd'],          label: 'Dun Dun Duuuunn!!',   icon: 'dundundun.jpg',      sound: 'dundundun'                      },
  { id: 'trombone',       categories: ['dnd'],          label: 'Bombom ba bom',       icon: 'trombone.jpg',       sound: 'fail_trombone'                  },
  { id: 'phil_swift',     categories: ['dnd'],          label: 'A Lot of Damage',     icon: 'phil_swift.jpg',     sound: 'lotta_damage_1'                 },
  { id: 'jontron',        categories: ['dnd'],          label: 'A Lot of Damage?',    icon: 'jontron.png',        sound: 'lotta_damage_2'                 },
  { id: 'bat_transition', categories: ['dnd'],          label: 'Bat Transition',      icon: 'bat_transition.jpg', sound: 'bat_transition'                 },
  { id: 'happy_children', categories: ['dnd'],          label: 'Yaaaaaayyyy',         icon: 'happy_children.jpg', sound: 'yaaay'                          },
  { id: 'sad_trombone',   categories: ['dnd'],          label: 'Bwa bwa bwaaa',       icon: 'sad_trombone.jpg',   sound: 'sad_trombone'                   },
  { id: 'mercy',          categories: ['dnd'],          label: 'God Have Mercy',      icon: 'mercy.jpg',          sound: 'mercy'                          },
  { id: 'yes',            categories: ['dnd'],          label: 'Toast - Yes!',        icon: 'yes.jpg',            soundPrefix: 'yes_', max: 11            },
  { id: 'garbage_man',    categories: ['dnd'],          label: 'The Garbage Man',     icon: 'garbage_man.png',    sound: 'garbage_man'                    },
  { id: 'the_tower',      categories: ['dnd'],          label: 'The Tower!',          icon: 'the_tower.jpg',      sound: 'tower'                          },
  { id: 'chest_opening',  categories: ['dnd'],          label: 'Chest Opening',       icon: 'chest_opening.png',  sound: 'chest_opening'                  },
  { id: 'chest_prize',    categories: ['dnd'],          label: 'Chest Prize',         icon: 'chest_prize.jpg',    sound: 'chest_prize'                    },
  { id: 'dulcimer',       categories: ['dnd', 'songs'], label: 'Gridders\' Lament',   icon: 'dulcimer.jpg',       sound: 'dulcimer'                       },
  { id: 'enemy',          categories: ['dnd', 'songs'], label: 'Enemy Approaching',   icon: 'enemy.jpg',          sound: 'enemy_approaching'              },
  { id: 'nogodno',        categories: ['dnd'],          label: 'No God No',           icon: 'nogodno.jpg',        sound: 'nogodno'                        },
  { id: 'wilhelm',        categories: ['dnd'],          label: 'Wilhelm Scream',      icon: 'wilhelm.jpg',        sound: 'wilhelm'                        },
  { id: 'thatshot',       categories: ['dnd'],          label: 'That\'s Hot',         icon: 'thatshot.jpg',       soundPrefix: 'thatshot', max: 3         },
  { id: 'ff7fight',       categories: ['dnd', 'songs'], label: 'FF7 Fight',           icon: 'ff7fight.jpg',       sound: 'ff7fight'                       },
  { id: 'oof',            categories: ['dnd'],          label: 'OOF',                 icon: 'oof.jpg',            sound: 'oof'                            },
  { id: 'mcoof',          categories: ['dnd'],          label: 'You Died!',           icon: 'mcoof.png',          sound: 'mcoof'                          },
  { id: 'howie',          categories: ['dnd'],          label: 'Howie Scream',        icon: 'howie.jpg',          sound: 'howie'                          },
  { id: 'curb',           categories: ['dnd'],          label: 'Curb',                icon: 'curb.jpg',           sound: 'curb'                           },
  { id: 'guard',          categories: ['dnd'],          label: 'Oblivion Guard',      icon: 'scum.png',           soundPrefix: 'guard', max: 21           },
  { id: 'dm',             categories: ['dnd'],          label: 'Democracy Manifest',  icon: 'dm.jpg',             soundPrefix: 'dm',    max: 10           },
  { id: 'wasted',         categories: ['dnd'],          label: 'Wasted',              icon: 'wasted.jpg',         sound: 'wasted'                         },
  { id: 'youdied',        categories: ['dnd'],          label: 'YOU DIED',            icon: 'youdied.jpg',        sound: 'youdied'                        },
  { id: 'theyrefresh',    categories: ['dnd'],          label: 'They\'re fresh',      icon: 'theyrefresh.jpg',    sound: 'theyrefresh'                    },
  { id: 'harrydead',      categories: [],               label: 'Harry is dead',       icon: 'harrydead.jpg',      sound: 'harrydead'                      },
  { id: 'voldylaugh',     categories: [],               label: 'Eh, hehe!',           icon: 'voldylaugh.jpg',     sound: 'voldylaugh'                     },
  { id: 'afinehit',       categories: ['dnd'],          label: 'A fine hit!',         icon: 'afinehit.png',       sound: 'afinehit'                       },
  { id: 'drg_salute',     categories: ['drg'],          label: 'Salute',              icon: 'drg_salute.png',     soundPrefix: 'drg_salute_', max: 11     },
  { id: 'drg_mule',       categories: ['drg'],          label: 'M.U.L.E',             icon: 'drg_mule.png',       soundPrefix: 'drg_mule_',   max: 10     },
  { id: 'hit_fool',       categories: [],               label: 'FOOOOOOOOOOOL!',      icon: 'hit_fool.png',       sound: 'hit_fool'                       },
  { id: 'hit_screwed',    categories: [],               label: 'You blew it!',        icon: 'hit_screwed.png',    sound: 'hit_screwed'                    },
  { id: 'best_pirate',    categories: ['sot'],          label: 'Best Pirate',         icon: 'bestpirate.png',     sound: 'bestpirate'                     },
  { id: 'worst_pirate',   categories: ['sot'],          label: 'Worst Pirate',        icon: 'worstpirate.png',    sound: 'worstpirate'                    },
  { id: 'hohoho',         categories: [],               label: 'Ho Ho Ho Travellers', icon: 'hohoho.png',         sound: 'hohohotravellers'               },
  { id: 'thanksforstaff', categories: [],               label: 'Thanks for Staff',    icon: 'thanksforstaff.png', sound: 'thanksforstaffmagnus'           },
  { id: 'noirecorrect',   categories: [],               label: 'Correct Guess',       icon: 'noirecorrect.png',   sound: 'noirecorrect'                   },
  { id: 'noirewrong',     categories: [],               label: 'Incorrect Guess',     icon: 'noirewrong.png',     sound: 'noirewrong'                     },
  { id: 'davywet',        categories: ['sot'],          label: 'Afraid to get wet?',  icon: 'davywet.png',        sound: 'davywet'                        },
  { id: 'hilarious',      categories: [],               label: 'Actually hilarious',  icon: 'hilarious.png',      sound: 'hilarious'                      },
  { id: 'meatmenu',       categories: [],               label: 'Meat\'s back',        icon: 'meatmenu.png',       sound: 'meatmenu'                       },
  { id: 'wizardhagrid',   categories: [],               label: 'YER A WIZARD',        icon: 'wizardhagrid.png',   soundPrefix: 'wizardhagrid_', max: 9    },
  { id: 'wizardharry',    categories: [],               label: 'NO IM NOT',           icon: 'wizardharry.png',    soundPrefix: 'wizardharry_', max: 13    },
  { id: 'whatacnt',       categories: [],               label: 'What a c**t',         icon: 'whatacnt.png',       sound: 'whatacnt'                       },
  { id: 'boourns',        categories: [],               label: 'Boourns',             icon: 'boourns.png',        sound: 'boourns'                        },
  { id: 'yepyepyep',      categories: [],               label: 'Yep yep yep',         icon: 'yepyepyep.png',      sound: 'yepyepyep'                      },
  { id: 'philflex',       categories: [],               label: 'Flex Tape',           icon: 'philflex.png',       soundPrefix: 'philflex_', max: 32       },
  { id: 'diggyhole',      categories: ['drg'],          label: 'Diggy Diggy Hole',    icon: 'diggyhole.png',      soundPrefix: 'diggyhole_', max: 9       },
  { id: 'missioncontrol', categories: ['drg'],          label: 'Mission Control',     icon: 'missioncontrol.png', soundPrefix: 'missioncontrol_', max: 28 },
  { id: 'tossme',         categories: [],               label: 'Toss me',             icon: 'tossme.png',         sound: 'tossme'                         },
  { id: 'hellothere',     categories: [],               label: 'Hello there',         icon: 'hellothere.png',     sound: 'hellothere'                     },
];

Assets.storyPages = [
  { text: `Heroes arrive in fishing town Fairwater.
Get a quest to go to a dairy from Rex at the local Adventurers Guild. A person of interest had disappeared there.
In a shop, Jon barters for an orb, Aiden tries to steal a potion. Heroes subdue the shopkeeper with feeble staff strikes and pink light. Shopkeeper asks for something of value or else he will call the guards.
Jon and Aiden to go graveyard, Dan barters for fish and renting a boat.
Heroes walk along the path, surprise some bandits and win. The survivors are hung.
Meet an old lady at the dairy who has lost Old Bessie.
Find cow in field, all but Dan fall into a burial chamber and fight spooky skeletons.
Next chamber has a giant spider, which instantly webs Jon. Chris kills after an arrow wounds its face. Loot the chamber.
The final chamber contains spooky stairs with booming warnings. “I WILL FIND YOU!”. The heroes run from skeletons down the corridor. On the way out of the burial chamber, Jon and Aiden climb out while the others fight the horde. Everyone makes it out OK. 
` },
];
