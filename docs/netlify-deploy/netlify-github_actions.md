---
sidebar_position: 1
---


# Deploy to Netlify through Github Action

# Netlify

For Deploying our website through Github Actions we need two key from Netlify.

- ###### Netlify Authorization Token 
- ###### Netlify Site API ID

## Netlify Authorization Token 

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

# Github Actions

## Ways to perform Github Actions

There are two ways to perform Github Actions:

- From Github Repository
- From Code Editor

## From github Repository

On `Github Repository > Actions` let's select Node.js and click on configure

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643696906/my-docusaurus-site/Screenshot_27_kfyn48.png)


## From Code Editor 

We can configure the Github action through our code also. For this let's go into our code. In our home directory let's create a folder named `.github`. Under this folder let's create another folder named `workflows`. Under this folder let's Create a file named `node.js.yml`. We can name it another one if we want.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643697444/my-docusaurus-site/Screenshot_28_jbs7nk.png)

In this file we have to connect Netlify and give the commands below for action.

## Configuring the file

```jsx
name: Node.js CI

on:
  push:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
        
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    
    - name: Netlify Actions
      uses: nwtgck/actions-netlify@v1.2.3
      with:
          publish-dir: './build'
          production-branch: main
          deploy-message: '${{ github.event.head_commit.message }}'
      env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```
Now we can push the code to our Github repository.

For more on **Github Action** please follow the link: **[https://docs.github.com/en/actions](https://docs.github.com/en/actions)**

## Setting up Secret Keys

For connecting Netlify with our github repository we need to give secret keys in the github Project `Settings`.

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643698281/my-docusaurus-site/Screenshot_29_c3msyh.png)

Here we have to add two `New repository secret` that we got from our Netlify website where 

```
NETLIFY_AUTH_TOKEN = My Token
NETLIFY_SITE_ID = API ID
```

Now if we go to `Actions` from our github repository we will see a workflow has started regarding our filename which in our case is `Node.js`. 
![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643710251/my-docusaurus-site/Screenshot_30_j1agxh.png)

Now if we go into the action we will see the result. If it's successfull we will see a result like this picture:

![Logo](https://res.cloudinary.com/aristomarketbd/image/upload/v1643709828/my-docusaurus-site/Screenshot_32_z4cbik.png)

That's it. Our website is now deployed in **Netlify** through **Github Actions**.


