---
sidebar_position: 1
---


# Deploy to Netlify through Gitlab Pipeline

## Netlify

For Deploying our website through Gitlab pipeline we need two key from Netlify.

- **Netlify Authorization Token**
- **Netlify Site API ID**

### Netlify Authorization Token

For our Netlify Authorization token we have to go to Profile User Settings

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643693512/my-docusaurus-site/Screenshot_20_zkyfyr.png)

In the User Settings from left sidebar we have to go to `Applications` section and create a **Personal Access Token**.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643693888/my-docusaurus-site/Screenshot_21_mfxifa.png)

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643693979/my-docusaurus-site/Screenshot_22_sknoui.png)

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643694223/my-docusaurus-site/Screenshot_23_u5xmex.png)

We can name it as we want. The generated token will be needed later.

## Netlify Site API ID

For the API ID let's go to `Sites` section

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643694497/my-docusaurus-site/Screenshot_24_kug7xs.png)

If we have our site, that's great. Otherwise we can creat a new one from the following:

- Import an existing project
- Start from a template
- Deploy manually

Once we have our site, we have to go to `Site Settings`. From the left sidebar we have `General section`. Here in Site details we will get an **API ID**.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643694969/my-docusaurus-site/Screenshot_26_pzmkk7.png)

That's all from the Netlify

## Gitlab Pipeline

## Ways to perform Gitlab Pipeline

There are two ways to perform Github Actions:

- From Gitlab Repository
- From Code Editor

## From Gitlab Repository

Let's go to our `Gitlab` repository. We will find a option called `Set up CI/CD`. We can create our `CI/CD pipeline` from it.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644143861/my-docusaurus-site/Screenshot_39_zpjbzc.png)

## From Code Editor

We can configure the Gitlab pipeline through our code also. For this let's go into our code. In our home directory let's create a filename called `.gitlab-ci.yml`

**Please note**: The filename should be exact `.gitlab-ci.yml`. Otherwise it will not work.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644144501/my-docusaurus-site/Screenshot_41_qxrytk.png)

## Configuring the file

```jsx
stages:
  - test
  - build
  - deploy

test project:
  stage: test
  image: node:16
  script:
    - npm install
    - npm test

build project:
  stage: build
  image: node:16
  script:
    - npm install
    - npm test
    - npm run build
  artifacts:
    paths:
      - build/

netlify:
  stage: deploy
  image: node:16
  script: 
    - npm install -g netlify-cli
    - netlify deploy --dir=build --prod
```

Now we can push our code to our Gitlab repository.

For more on **Github Action** please follow the link: **[https://docs.gitlab.com/ee/ci/pipelines/](https://docs.gitlab.com/ee/ci/pipelines/)**

## Setting up Netlify Keys

For connecting Netlify with our gitlab repository we need to `add variable`'s in the project `Settings -> CI/CD -> Variables`.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644146507/my-docusaurus-site/Screenshot_42_djdgal.png)

Here we have to add two `variable`'s that we got from our Netlify website where

```bash
NETLIFY_AUTH_TOKEN = My Token
NETLIFY_SITE_ID = API ID
```

Now if we go to `CI/CD` from our gitlab repository we will see `stage`'s is running which we declared in our `.gitlab-ci.yml` file.
![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644147651/my-docusaurus-site/Screenshot_45_thvjvt.png)

In the `Jobs` section we will able to see progress of the `stages`'s.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644147819/my-docusaurus-site/Screenshot_47_lmboq7.png)

In case if the if the pipeline doesn't start automatically we can manually run it.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1644148104/my-docusaurus-site/Screenshot_48_ir8rwh.png)

That's it. If all the job's are passed successfully, our website is now deployed in **Netlify** through **Gitlab Pipelines**

**Please Note:** For using gitlab pipelines our account needs to be verified. Otherwise it will not work.
