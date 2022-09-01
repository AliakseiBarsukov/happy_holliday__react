import Footer from './сomponents/Footer/Footer';
import Header from './сomponents/Header/Header';
import Card from './сomponents/Card/Card';
import { ImgContextProvider } from './context/imgContext';
import { TextContextProvider } from './context/textContext';



const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </div>
  );
}

export default App;
