import { Posts } from "@/models";
import { AppVIP } from "nextjs-vip/beta";

export default async function postOne(req, res, next) {
    let { query } = req
    let app = AppVIP(arguments)
    app.get(async () => {
        let post = await Posts.findOne({ url: query.url })

        let reletad = await Posts.find({ cat: { $in: post.cat } }).limit(4)
            .select("title url image -_id")
        if (reletad.length < 3) reletad = await Posts.find().limit(4).select("title url image -_id")
        reletad = reletad.filter(a => a.url != query.url)
        app.Send({ ...post._doc, reletad })
    })
}