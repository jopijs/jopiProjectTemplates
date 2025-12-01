import AdminPageLayout from "@/uiComponents/page.layout.admin";

export default function Page() {
    return <AdminPageLayout>
        <ul>
            <li>
                <strong>catch-all</strong>
                <ul>
                    <li><a href="http://localhost:3000/aboutRoutes/catchAll/hello">
                        http://localhost:3000/aboutRoutes/catchAll/hello
                    </a></li>
                    <li><a href="http://localhost:3000/aboutRoutes/catchAll/logo.png">
                        http://localhost:3000/aboutRoutes/catchAll/logo.png
                    </a></li>
                </ul>
            </li>
            <li>
                <strong>Url Parameter</strong>
                <ul>
                    <li><a href="http://localhost:3000/aboutRoutes/product/computer?sort=ASC">
                        http://localhost:3000/aboutRoutes/product/computer?sort=ASC
                    </a></li>
                    <li><a href="http://localhost:3000/aboutRoutes/product/memory?sort=DESC">
                        http://localhost:3000/aboutRoutes/product/memory?sort=DESC
                    </a></li>
                </ul>
            </li>
        </ul>
    </AdminPageLayout>
}