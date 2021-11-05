import { IRoute } from "@bluelibs/x-ui";
import Layout from "../layout/Layout";
import CreatePost from "./CreatePost";


const LayoutPost=()=>{
    return(
        <Layout>
            <CreatePost/>
        </Layout>
    )
}
export const CREATE_POST: IRoute = {
  path: "/create",
  component: LayoutPost,
};
