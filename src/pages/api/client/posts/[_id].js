import { API, APIAuth } from "@/lib/app";
import { Posts } from "@/models";

/**
 * 
 * @route {"/user"}  
 * @method {GET}  get post 
 * 
 */

export default async function postOne(req, res, next) {
        let { body, headers } = req
        let { id, GET, DELETE, Send } = new API(req, res)
        let Auth = new APIAuth(req, res)
        let { account } = headers
        account = JSON?.parse(account)

        GET(
                await Auth.isLogin(),
                async () => {
                        // types
                        let post = await Posts.findOne(id)
                        Send(post)

                })
}