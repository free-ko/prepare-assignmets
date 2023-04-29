import React from 'react';
import { Global } from '@emotion/react';
import { resetCSS } from '~/styles/reset';

const GlobalLayout = () => <Global styles={resetCSS} />;

export default GlobalLayout;
