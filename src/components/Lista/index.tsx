import React, { useState } from "react";
import Item from './item'
import style from './Lista.module.scss'


interface ITarefas{
    tarefa: string ,
     tempo: string
    }

function Lista ({ tarefas}: {tarefas: ITarefas[] }){
    
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=>{
             setTarefas ([...tarefas, {tarefa: "Photoshop", tempo:"01:00:00"}])
             console.log(tarefas);
            }
            }>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index)=>(
                    <Item
                    tarefa={item.tarefa}
                    tempo={item.tempo}
                    key={index}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default Lista