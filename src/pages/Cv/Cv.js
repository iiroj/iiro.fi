import React from 'react';
import { hot } from 'react-hot-loader';

import Back from '../../components/Back';
import Picture from '../../components/Picture';

import { container, page } from './styles';

const Cv = () => (
  <>
    <Back />
    <main className={container}>
      <div className={page}>
        <header>
          <h1>Iiro Jäppinen</h1>
          <h2>Curriculum Vitae</h2>
          <Picture />
        </header>
      </div>
    </main>
  </>
);

export default hot(module)(Cv);
