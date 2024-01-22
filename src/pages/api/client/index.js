import { Posts } from "@/models";
import { AppVIP } from "nextjs-vip/beta";

export default async function ClientPosts(req, res, next) {
    let app = AppVIP(arguments)

    app.get(
        async () => {
            let posts = await Posts.find()
                .sort({ _id: -1 })
                .select("title url image")
                .limit(3)
            app.Send(posts)
        })
}










