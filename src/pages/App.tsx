import React, { useState } from 'react';
import Botao from '../components/Botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState([{
    tarefa: "JavaScript",
    tempo: "01:30:00"
  },
  {
    tarefa: "React",
    tempo: "02:00:00"
  },
  {
    tarefa: "Java",
    tempo: "04:00:00"
  }
  ])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}
export default App;

