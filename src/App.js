import  React,{useState} from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import DeliveryTab from './Components/Tabs/DeliveryTab';
import DinningOutTab from './Components/Tabs/DinningOutTab';
import NightLifeTab from './Components/Tabs/NightLifeTab';
import TabOptions from './Components/Tabs/TabOptions';

function App() {
  const [tabActive, setTabActive] = useState('DiningOut');

  const openActive = (tab) => {
    switch(tab){
      case 'Delivery':
        return <DeliveryTab/>;
      
      case 'DiningOut':
        return <DinningOutTab/>;
      
      case 'NightLife':
        return <NightLifeTab/>;

      default :
      return <DeliveryTab/>;
    }
  }

  return (
    <div>
      <Header/>
      <TabOptions tabActive={tabActive} setTabActive={setTabActive}/>
      {openActive(tabActive)}
      <Footer/>
    </div>
  );
}

export default App;
