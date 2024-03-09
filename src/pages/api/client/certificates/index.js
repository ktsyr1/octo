import { Certificates } from "@/models";
import { AppVIP } from "nextjs-vip/beta";

export default async function ClientCertificates(req, res, next) {
    let app = AppVIP(arguments)

    app.get(
        async () => {
            let certificates = await Certificates.find()
                .sort({ _id: -1 })
                .limit(6)
            app.Send(certificates)
        })
    app.post(
        async () => {
            console.log(req.body);
            let certificates = await Certificates.findOne({ code: req?.body?.code })
            if (!certificates) certificates = { msg: "المعلومات غير صحيحة" };

            app.Send(certificates)
        }
    )
}










