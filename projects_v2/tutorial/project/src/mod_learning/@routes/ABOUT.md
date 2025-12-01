# About

This directory is part of Jopi. It allows defining our HTTP routes.

With Jopi router, each directory is mapped to an url.

**Routes examples**
```
|- @routes/
    |- page.tsx          < Url: /
    |- products/         < Url: /products
    |   |- listing/      < Url: /products/listing
    |      |- page.tsx         < The page returned to the browser
    |- login/            < Url: /login
    |  |- page.tsx             < The page returned to the browser
    |  |- onPOST.ts            < Handle all POST call to this url
    |  |- onPUT.ts             < Same for others http methods
    |
    | error404/          < Allow declaring a template   
    | error500/          < for the errors 404 (not found)
    | error401/          < 500 (internal error) and 401 (not authorized)    
```

Each module can declare routes and extend the routes list.

Also, a priority system allows a module to override a route.
For example a module implementing a special login system can
override the login page.