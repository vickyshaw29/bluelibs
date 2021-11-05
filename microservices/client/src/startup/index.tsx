import 'reflect-metadata';

import { XUIProvider } from '@bluelibs/x-ui';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { kernel } from './kernel';
import './styles.scss';
import Layout from '../../src/bundles/UIAppBundle/pages/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <XUIProvider kernel={kernel} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
