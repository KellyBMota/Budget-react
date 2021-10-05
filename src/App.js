import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const entries = useSelector(state => state.entries);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector(state => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense) 
        return totalExpenses += Number(entry.value);
      return totalIncomes += Number(entry.value);
    });
    setTotalBalance(totalIncomes - totalExpenses);
    setTotalExpenses(totalExpenses);
    setTotalIncomes(totalIncomes);
  }, [entries]);

  return (
    <Container>
      <MainHeader title='Budget' type='h1'/>
      <DisplayBalance title='Your Balance:' value={totalBalance} size='small'/>

      <DisplayBalances totalIncomes={totalIncomes} totalExpenses={totalExpenses} />

      <MainHeader title='History' type='h3'/>
      <EntryLines entries={entries} />

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;