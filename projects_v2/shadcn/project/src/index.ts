import {jopiApp} from "jopijs";
import users from "./myUsers.json";

//TODO: You must change this value with a safe one.
//      (this value is used to encryt the JWT security token inside the browser cookies)
//
const secretKey = "MY_SUPER_SECRET_KEY";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.create_creatWebSiteServer()
        .fastConfigure_jwtTokenAuth(secretKey, users);
});