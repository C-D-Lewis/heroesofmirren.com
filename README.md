# heroesofmirren.com

Yo yo yo let me tell you something real quick.


## Setup

Install dependencies.

```shell
npm ci
```


## Run locally

Run a local dev server:

```shell
npm start
```

## Adding new sounds

Images and sounds are listed in `src/assets.js`, and have entries there that
should correspond to images and sounds in `assets/icons` and `assets/sounds`
respectively.

Sounds in a randomised set should be indexed (see existing 
examples) and listed with `soundPrefix` and `max` as the sound file prefix and
how many types of that sound there are.
