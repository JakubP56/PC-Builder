//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import { Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
      <Route path='/' component={HomeScreens} exact={true}/>
      <Route path='/product/:id' component={ProductScreen}/>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
