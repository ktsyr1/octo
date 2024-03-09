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
    let app = new API(req, res)
    let Auth = new APIAuth(req, res)

    app.get(
        await Auth.isLogin(),
        async () => {
            // types
            let certificates = await Certificates.findOne(app.id)
            app.Send(certificates)
        })
    app.put(
        await Auth.isLogin(),
        async () => {
            // types

            await Certificates.updateOne(app.id, body)
            app.Send({ msg: "تم تحديث الشهادة" })
        })
    app.delete(
        await Auth.isLogin(),
        async () => {
            // types
            await Certificates.deleteOne(app.id)
            app.Send({ msg: "تم حذف الشهادة" })

        })

}
