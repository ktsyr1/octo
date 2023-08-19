import { Service } from "@/lib/models";
import { API, APIAuth } from "@/lib/app";


export default async function ServiceApi(req, res, next) {
    let { body } = req
    let { GET, POST, DELETE, Send } = new API(req, res)
    let Auth = new APIAuth(req, res)
    console.log("api");
    GET(async () => {
        let data = await Service.find()
        console.log("api 2");

        Send(data)
    })


    POST(
        Auth.isAdmin("ads"),
        async () => {
            let data = await Service.create({
                cat: body.cat,
                title: body.title,
                content: body.content,
                image: body.image,
            })

            Send({ data })
        })
    DELETE(
        Auth.isAdmin("ads"),
        async () => {
            console.log(req.query);
            let deleteing = await Service.deleteOne(req.query)
            Send({ msg: "  تم حذف الخدمة" })

        }
    )

}
