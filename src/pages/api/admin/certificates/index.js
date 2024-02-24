import { Certificates } from "@/models";
import { APIAuth } from "@/lib/app";
import APIbeta from "nextjs-vip/beta";

export default async function certificates(req, res, next) {
    let { body } = req
    let app = new APIbeta(arguments) 
    let Auth = new APIAuth(req, res)

    app.get(
        await Auth.isLogin(),
        async () => {
            // types
            let certificates = await Certificates.find().sort({ _id: -1 })
            app.Send(certificates)

        })
    app.post(
        await Auth.isLogin(),
        async () => {
            let certificates = await Certificates.create(body)
            app.Send(certificates)

        })
}










