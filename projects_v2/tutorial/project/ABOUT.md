# About

This directory is the root of our project.

```
|- src/                 < Our source code. Must always be 'src'
|- dist/                < Typescript compiled code. Must always be 'dist'
|- temp/                < The default temp dir location
|
|- package.json
|- tsconfig.json        < For TypeScript to JavaScript compilation
|- bunfig.toml          < Required fur Bun.js when using React HMR
|
|- logConfig.json       < Allows setting log level for each logger   
| 
|- .env                 < A DotEnv file. Is automatically load if found.
|- global.css           < For Tailwind CSS declarations.
|
|- components.json      < ShadCN declaration file (optional)
|
|- docker-compose.yml   < Docker launch script for this project.
|- start.sh             < Is called by Docker to launch our app.
```

**Source and compiled sources**
- You must always use `src` folder for your sources.
- If using Node.js, you must always use `dist` for compiled sources.

> When using Node.js, Jopi receive path coming from the `dist` folder.
But when pointing to a resource (png, css, ...) these resources are not copied
in the `dist` folder by TypeScript compiled and it why Jopi must search the
original path of the file, in order to access to the imported resources.

**The global.css file**

This file contains Tailwind CSS declaration.

Jopi uses this order to search this file:
1. If you use ShadCN, it uses the configuration set inside `components.json`.
2. If not found: it looks at `global.css` at the root of your project.
3. If not found: it uses the string `@import "tailwindcss";` as a replacement.
