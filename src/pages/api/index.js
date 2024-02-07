import { Posts } from "@/models"
import API from "nextjs-vip"

export default async function SiteMap(req, res, next) {

    let app = new API(req, res)
    app.get(async () => {

        let page = await Posts.find().select("create_at url")
        let { domain } = req.query
        let data = [
            { url: `${domain}/` }
        ]

        function DATE(e) {
            if (e) {
                return new Date(e)?.toISOString().split('T')[0]
            } else return
        }
        page.map(a => data.push({
            url: `${domain}/blog/${a.url}`,
            lastmod: DATE(a?.create_at)
        })
        )
        app.Send(data)
    }
    )
}
