import { Certificates } from "@/models";
import { APIAuth } from "@/lib/app";
import API from "nextjs-vip";

/**
 * 
 * @route {"/user"}  
 * @method {GET}  get post 
 * @method {GET} DELETE post 
 * 
 */

export default async function postOne(req, res, next) {
    let { body } = req
    let { id, GET, PUT, DELETE, Send } = new API(req, res)
    let Auth = new APIAuth(req, res)

    GET(
        await Auth.isLogin(),
        async () => {
            // types
            let certificates = await Certificates.findOne(id)
            Send(certificates)
        })
    PUT(
        await Auth.isLogin(),
        async () => {
            // types

            await Certificates.updateOne(id, body)
            Send({ msg: "تم تحديث الشهادة" })
        })
    DELETE(
        await Auth.isLogin(),
        async () => {
            // types
            await Certificates.deleteOne(id)
            Send({ msg: "تم حذف الشهادة" })

        })

}
