
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Headers from './Components/Headers';
import IncomeExpense from './Components/IncomeExpense';
import TransationList from './Components/TransationList';
import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <GlobalProvider>
      <Headers />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
