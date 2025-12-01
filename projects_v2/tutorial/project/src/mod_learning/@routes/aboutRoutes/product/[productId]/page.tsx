// All this url resolve to this handler:
//      http://localhost:3000/aboutRoutes/product/computer
//      http://localhost:3000/aboutRoutes/product/ram
//      http://localhost:3000/aboutRoutes/product/desktop
//
export default function(p: any) {
    // Allow to see want info are send to pages.
    //
    console.log("All page params", p);
    console.log("url parameters:", p.params);
    console.log("searchParams:", p.searchParams);

    const searchParams: URLSearchParams = p.searchParams;
    const params: any = p.params;

    // params: contains the value of the url parameters.
    //            Here, the uniq value is "productId" which
    //            is corresponding to the [productId] folder.

    // searchParams is the query string value.
    // If url is:  http://localhost:3000/aboutRoutes/product/computer?sort=ASC&ignoreFirst=1
    // Then searchParams = {sort: "ASC", ignoreFirst: "1"}

    return <div>
        <div>Product id: {params.productId}</div>
        <div>Search params: {JSON.stringify(searchParams)}</div>
    </div>;
}