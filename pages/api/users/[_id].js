import { User } from "@/lib/models";
import { API, APIAuth } from "@/lib/app";
/**
 * 
 * @route {"/user/[_id]"}  
 * @method {GET}  one user data
 * @method {PATCH} updateone user isBlock
 * 
 */
export default async function users(req, res, next) {
        let { body } = req
        let { GET, id, PATCH, PUT, Send } = new API(req, res)
        let Auth = new APIAuth(req, res)
        GET(
                await Auth.getAdmin('admin'),
                async () => {

                        let users = await User.findOne(id).select('fullname email wa isAdmin isBlock verification permissions ')
                        Send(users)

                })

        PUT(
                await Auth.getAdmin('admin'),
                async () => {
                        let data = { isAdmin: body.isAdmin, permissions: body.permissions }
                        let upgrade = await User.updateOne(id, data)
                        Send({ upgrade })
                })
        PATCH(
                await Auth.getAdmin('admin'),
                async () => {

                        let user = await User.findOne(id)
                        let isBlock = await User.updateOne(id, { isBlock: !user.isBlock })
                        Send({ isBlock })

                })

}
