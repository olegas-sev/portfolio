import Divider from '../components/app/Divider';
import Footer from '../components/app/Footer';
import Header from '../components/app/Header';

function MainLayout(props) {
  return (
    <div className="mx-5">
      <Header />
      {props.children}
      <Divider />
      <Footer />
    </div>
  );
}

export default MainLayout;
