import React, {useState, useEffect} from 'react';
import './styles/main.sass';
import {Card} from './components/cards'
import {Button} from './components/buttons'
import {Modal} from './components/modal'
import {InputFile, Input} from './components/inputs'

function App() {
  const initialState = [{
    'name': '',
}]
  const [modal, setModal] = useState()
  const [file, setFile] = useState()
  const [inputName, setInputName] = useState()
  const [inputEmail, setInputEmail] = useState()
  const [inputCelPhone, setInputCelPhone] = useState()
  const [results, setResults] = useState(initialState)
  const modalDownload = () => {

    setModal(true)
  }
  const downloadDoc = () =>{
      alert('document downloaded')
      setModal(false)
  }

  const handleInput = () =>{
    localStorage.setItem('userName', inputName)
    localStorage.setItem('userMail', inputEmail)
    localStorage.setItem('userCelphone', inputCelPhone)    
  }
  const swapi = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=20'
  useEffect(()=>{
    (async()=>{
      fetch(swapi)
      .then((resp)=> resp.json())
      .then(function (data){
        console.log(data.results);
        let people = data.results
        setResults(data.results)
      })
      .catch((error)=>{
        console.log(error);  
      })
    })()
  }, [])
  return (
    <section data-grid="spacing center cols-3" className="page-content">
      <div data-cell="shrink">
        <Card>
          <h3>Task 1</h3>
          <Button type="success" onClick={modalDownload}>Download</Button>    
        </Card>
        <Modal setState={setModal} state={modal} type={`warning slide buttons`} clickOk={downloadDoc}>
            <span>Do you agree with the terms?</span>
        </Modal>             
      </div>
      <div data-cell="shrink">
        <Card>
          <h3>Task 2</h3>
          <InputFile type="file" value={file} method={setFile} id="file" />  
        </Card>
      </div>
      <div data-cell="shrink">
        <Card>
          <h3>Task 3</h3>
          <form action="" data-grid="spacing column">
              <div data-cell="shrink">
                <Input value={inputName} method={setInputName} type="text" text="Name" label="true" required={true} />
              </div>
              <div data-cell="shrink">
                <Input value={inputEmail} method={setInputEmail} mask="email" type="text" text="Email" label="true" required={true} />
              </div>
              <div data-cell="shrink">
                <Input value={inputCelPhone} method={setInputCelPhone} mask="phone" maxLength={15} type="text" text="Cellphone" label="true" required={true} />
              </div>
              <Button type="success" onClick={handleInput}>Download</Button>
          </form>
        </Card>
      </div>
      <div data-cell="shrink">
        <Card>
          <h3>Task 4</h3>
          <ul>
            {results.map(({name})=>(<li>{name}</li>))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default App;
