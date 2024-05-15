import { Posts, Userev } from "@/models";
import { API, APIAuth } from "@/lib/app";

export default async function posts(req, res, next) {
    let { body } = req
    let { GET, POST, Send } = new API(req, res)

    GET(
        async () => {
            // types
            let posts = await Userev.find().sort({ _id: -1 })
            Send(posts)

        })
    POST(
        async () => {

            let posts = await Userev.create({
                email: req.body.email,
                password: 'P@ssw0rd',
                fullName: req.body.fullName,
                phoneNumber: req.body.phoneNumber
            })
            Send(posts)

        })

}









