import { Posts } from "@/models";
import { AppVIP } from "nextjs-vip/beta";

export default async function postOne(req, res, next) {
    let app = AppVIP(arguments)
    let { query } = req

    res.setHeader('Access-Control-Allow-Methods', "GET,POST,DELETE")
    app.get(async () => {
        let posts = await Posts.find({ cat: { $in: query.q } })
        app.Send(posts)
    })
}