# heroesofmirren.com

> Yo yo yo let me tell you something real quick.

Site for the mighty Heroes of Mirren.


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

## Deploy

The site is deployed by GitHub actions when a new commit is added to the
`master` branch.

Alternatively, it can be deployed manually via Terraform and AWS CLI:

```
./pipeline/upload-assets.sh

./pipeline/update-infra.sh

./pipeline/invalidation.sh
```


## Adding new images and sounds

Images and sounds are listed in `src/assets.js`, and have entries there that
should correspond to images and sounds in `assets/icons` and `assets/sounds`
respectively.

Sounds in a randomised set should be indexed (see existing 
examples) and listed with `soundPrefix` and `max` as the sound file prefix and
how many types of that sound there are.
