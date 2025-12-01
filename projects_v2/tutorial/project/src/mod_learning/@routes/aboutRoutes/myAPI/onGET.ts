import {JopiRequest} from "jopijs";

// Allow sharing data between our API listeners.
import {myValues} from "./shared.ts";

/**
 * Take the value "key" from the url and returns `myValues[key]` or 404.
 */
export default async function(req: JopiRequest) {
    // Get the url param.
    // Ex: http://localhost:3000/aboutRoutes/myAPI?key=computers
    //
    const key = req.urlInfos.searchParams.get("key");

    // Return the value.
    if (key) {
        let value = myValues[key];

        if (value) {
            return req.res_jsonResponse({value})
        }
    }

    // Don't exist or key not set? => 404 error.
    return req.res_returnError404_NotFound();
}