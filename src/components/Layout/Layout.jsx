import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            marginTop: '80px',
          },
        }}
      />
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
