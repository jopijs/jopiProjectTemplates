# About

This directory define a module. If you want to create a module, the only thing you have to do
is to create a directory which name starts with **mod_**. For example : `src/mod_myFirstModule`.

A module has some optional content.

```
|- @alias           < Where shared items are defined
|- @routes          < Where http routes are defined
|- severInit.ts     < Executed when the server starts
|- uiInit.tsx       < Executed when server render a page
                        or when the browser starts
```

> All other content in this directory, is not a part of Jopi.