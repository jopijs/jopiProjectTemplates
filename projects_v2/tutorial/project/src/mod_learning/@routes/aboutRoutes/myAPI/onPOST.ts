import {JopiRequest} from "jopijs";

// Allow sharing data between our API listeners.
import {myValues} from "./shared.ts";

/**
 * Take values "key" and "value" from the POST data
 * and do a `myValues[key] = values`
 */
export default async function(req: JopiRequest) {
    // Get the key value.
    //
    // Here we use req_getData, which take values
    // from the url or the request body.
    //
    const data = await req.req_getData();
    //
    // You can also use req_getBodyData which only
    // take values from the body.
    //const data = await req.req_getBodyData();

    // The "key" value is required.
    const key = data.key;
    if (!key) {
        // HTTP code 400 allows indicating something wrong.
        return req.res_returnError400_BadRequest();
    }

    // The "value" data is required.
    const value = data.value;
    if (!value===undefined) {
        // Here for the sample, we return a json with {isOK: false}
        req.res_returnResultMessage(false);
    }

    let previousValue = myValues[key];
    myValues[key] = value;

    // Returns a json of type:
    // {isOK: true, message: {previous: "thePreviousValue"}}
    return req.res_returnResultMessage(true, {previous: previousValue});
}