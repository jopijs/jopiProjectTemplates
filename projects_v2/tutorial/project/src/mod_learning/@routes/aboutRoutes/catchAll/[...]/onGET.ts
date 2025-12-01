import type {JopiRequest} from "jopijs";

// Sample url:
// http://localhost:3000/aboutRoutes/catchAll/logo.png

export default function(req: JopiRequest) {
    // When serving file with "req.file_serveFromDir"
    // it takes the current pathname to calculate the path
    // into the directory containing the files.
    //
    // It's why we truncate it.
    // -            http://localhost:3000/aboutRoutes/catchAll/logo.png
    // - Became:    http://localhost:3000/logo.png
    //
    req.urlInfos.pathname = req.urlInfos.pathname.substring("/aboutRoutes/catchAll".length);

    // Will take our url and server file from the "public" folder
    // which is at the route of our project.
    //
    return req.file_serveFromDir("public");
}