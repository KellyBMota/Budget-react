import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>

      <MainHeader title='Budget' type='h1'/>
      <DisplayBalance title='Your Balance:' value='1,314.50' size='small'/>

      <DisplayBalances />

      <MainHeader title='History' type='h3'/>
      <EntryLine description='income' value='$100.00'/>
      <EntryLine description='expense' value='$10.00' isExpense/>
     
      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm />
    </Container>
  );
}

export default App;