import Footer from './сomponents/Footer/Footer';
import Header from './сomponents/Header/Header';
import Card from './сomponents/Card/Card';
import { ImgContextProvider } from './context/imgContext';




const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContextProvider>
        <Header />
        <Card />
        <Footer />
      </ImgContextProvider>
    </div>
  );
}

export default App;
