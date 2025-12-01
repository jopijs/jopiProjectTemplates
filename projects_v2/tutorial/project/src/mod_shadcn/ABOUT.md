# About

This module contains ShadCN's React components.  

It contains only core ShadCN components and not block, since each block
must be in his own module to respect module encapsulation philosophy.

There are two things you should know about ShadCN integration.

1- TypeScript config file 'tsconfig.json' has this entry.

```json
{
  "paths": {
    "@/mod_shadcn/*": [
      "./src/mod_shadcn/*"
    ]
  }
}
```

This allows thing like `import { Button } from '@/mod_shadcn/components/ui/Button'` to resolve correctly.

2- The file 'components.json' is a special file for ShadCN. His content must have a `css` entry and a `aliases` entry.

```json
{
  "tailwind": {
    "css": "src/mod_shadcn/styles/globals.css"
  },

  "aliases": {
    "components": "@/mod_shadcn/components",
    "ui": "@/mod_shadcn/components/ui",
    "lib": "@/mod_shadcn/lib",
    "utils": "@/mod_shadcn/lib/utils",
    "hooks": "@/mod_shadcn/hooks"
  }
}
```