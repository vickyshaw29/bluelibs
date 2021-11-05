import { IRoute } from "@bluelibs/x-ui";
import Layout from "../layout/Layout";
import HomePage from "./Home";

const LayoutPost=()=>{
  return(
      <Layout>
          <HomePage/>
      </Layout>
  )
}

export const HOME: IRoute = {
  path: "/",
  component: LayoutPost,
};
