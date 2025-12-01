# About

This module allows exposing the page layout for the admin pages.

It exposes a React.js component (shared between modules) named `page.layout.admin`.  
See folder: `mod_adminLayout/@alias/uiComponents/`

**Example page**
```typescript jsx
import AdminLayout from "@/uiComponents/page.layout.admin";

export default function() {
    <AdminLayout>
        <div>My Page Content</div>
    </AdminLayout>
}
```