import Footer from './сomponents/Footer/Footer';
import Header from './сomponents/Header/Header';
import Card from './сomponents/Card/Card';



const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
