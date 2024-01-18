# React + TypeScript + Vite Monorepo

## Installation
- Configure like this:
Run the following commands step by step

```bash
npm run install_common
npm run install_client
npm install
npm run client
```

## Build
Run the folowing commands step by step
```bash
npm run build
npm run copyPackageJSON
npm run pack
```

Once packed, you will see a ```ui_library-<version>.tgz``` installer file inside of ```./build``` directory.

Note- in case of dependency chnages in respective client or common app, ```npm install``` in root directory is required.