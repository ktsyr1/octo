import { API, APIAuth } from "@/lib/app";
import { Posts } from "@/models";

/**
 * 
 * @route {"/user"}  
 * @method {GET}  get post 
 * 
 */

export default async function postOne(req, res, next) {
        let { query } = req
        let { GET, Send } = new API(req, res)
        GET(async () => {
                let post = await Posts.findOne({ url: query.url })
                Send(post)
        })
}