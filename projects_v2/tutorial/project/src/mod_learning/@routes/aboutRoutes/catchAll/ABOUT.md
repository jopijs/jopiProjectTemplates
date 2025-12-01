# About

This directory uses a "catch-all" to match all url stating from
http://localhost:3000/aboutRoutes/catchAll/
and including  http://localhost:3000/aboutRoutes/catchAll

**We will use it in order to serve files.**

The folder name `[...]` is a special syntax allowing to catch all the call which have not an explicit listener.

Here we have added a listener for the `hello` route.

This means that:
- http://localhost:3000/aboutRoutes/catchAll/hello is caught by our hello listener.
- All other urls are caught by our catch-all listener.
  Example: http://localhost:3000/aboutRoutes/catchAll/logo.png which returns a file.