import { Posts } from "@/models";
import { API, APIAuth } from "@/lib/app";

/**
 * 
 * @route {"/user"}  
 * @method {GET} all Posts 
 * @method {POST} add Post
 * 
 */
export default async function posts(req, res, next) {
        let { GET, POST, Send } = new API(req, res)
        let Auth = new APIAuth(req, res)
        let { body, headers } = req
        let { account } = headers
        account = JSON?.parse(account)

        GET(
                // await Auth.isLogin(),
                async () => {
                        // types

                        let posts = await Posts.find().sort({ _id: -1 })


                        Send(posts)

                })
}










