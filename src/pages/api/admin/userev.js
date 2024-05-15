import { Posts, Userev } from "@/models";
import { API, APIAuth } from "@/lib/app";

export default async function posts(req, res, next) {
    let { body } = req
    let { GET, POST, Send } = new API(req, res)

    GET(
        async () => {
            // types
            let posts = await Userev.find().sort({ _id: -1 })
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin); // Use the requesting origin instead of *
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');


        })
    POST(
        async () => {

            let posts = await Userev.create({
                email: req.body.email,
                password: 'P@ssw0rd',
                fullName: req.body.fullName,
                phoneNumber: req.body.phoneNumber
            })
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin); // Use the requesting origin instead of *
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');


        })

}









