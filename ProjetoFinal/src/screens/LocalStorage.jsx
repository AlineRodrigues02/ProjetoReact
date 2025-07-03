import {createContext, useState, useEffect } from "react";
export const PacienteContext = createContext()

export function PacienteProvider({children}){
    const[pacientes, SetPacientes] = useState([])
    //carregar do local storage
    useEffect(()=>{
        const dados = localStorage.getItem('pacientes')
        if(dados){
            SetPacientes(JSON.parse(dados))
        }
    },[])

    //Salvar quando mudar os pacientes
    useEffect(()=>{
        localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])
    
    return(
        <PacienteContext.Provider value={{pacientes, SetPacientes}}>
            {children}
        </PacienteContext.Provider>
    )
}