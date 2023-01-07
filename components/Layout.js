import Footer from './Footer';
import Header from './Header';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  return (
    <div className={nunito.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
