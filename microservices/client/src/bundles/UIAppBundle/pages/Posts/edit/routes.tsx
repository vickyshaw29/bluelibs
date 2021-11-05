import { IRoute } from '@bluelibs/x-ui';
import Layout from '../../layout/Layout';
import EditPost from './EditPost';

const LayoutPost = (props) => {
  return (
    <Layout>
      <EditPost {...props}/>
    </Layout>
  );
};
export const EDIT: IRoute = {
  path: '/edit/:id',
  component: LayoutPost,
};
