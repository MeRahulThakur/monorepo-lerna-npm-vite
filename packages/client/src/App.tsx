//import {  } from 'react'
import { Button, Input } from '@npm-lerna-monorepo/common'
import './App.css'

function App() {

  return (
    <>
      <Button label="Button text"/>
      <Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Demo placeholder' />
    </>
  )
}

export default App
