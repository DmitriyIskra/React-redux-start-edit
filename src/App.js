import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './layout/Layout';

import InputWrapper from './components/inputNote/wrapper/InputWrapper';
import NoteText from './components/inputNote/noteText/NoteText';
import NoteSum from './components/inputNote/noteSum/NoteSum';
import ButtonSave from './components/inputNote/buttonSave/ButtonSave';
import ButtonCancel from './components/inputNote/buttonCancel/ButtonCancel';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={
          <InputWrapper>
            <NoteText />
            <NoteSum />
            <ButtonSave />
          </InputWrapper>
        }/>
        <Route path='/notes/edit/:id' element={
          <InputWrapper>
            <NoteText />
            <NoteSum />
            <ButtonSave />
            <ButtonCancel />
          </InputWrapper>
        }/>

      </Route>
    </Routes>
        
     
  );
}

export default App;
