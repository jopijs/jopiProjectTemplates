# About

This directory match the route `http://localhost:3000/aboutRoutes/product`.

If you try to open this url in your browser, you will see a 404 error.
Why? Because there is no listener defined (`page.tsx` or `onGET.ts`).  
It's a not-handled route.

In this folder, you see a strange thing: `[productId]`.  
It's a parametrized url.

It allows handling url with an unknown part:
- http://localhost:3000/aboutRoutes/product/computer
- http://localhost:3000/aboutRoutes/product/memory
- http://localhost:3000/aboutRoutes/product/desktop

The listener inside the `[productId]` folder, has the possibility to known
that the product id is computer / memory / desktop.

It will be store in a parameter named `productId`.

