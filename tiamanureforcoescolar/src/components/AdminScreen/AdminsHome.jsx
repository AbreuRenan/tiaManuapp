import React from "react";
import Header from "../Header/Header";
import BackBtn from "../helpers/BackBtn";

import styles from './adminStyles.module.css'

const url = 'src/components/AdminScreen/alunosMock.json'

function AdminsHome() {
    const [ alunosLista, setAlunosLista] = React.useState([]);
    
    
    React.useEffect( () => {
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const jsonData = await response.json();
            //   setAlunosLista(jsonData)
            const newAlunoList = []
            for (let key in jsonData) {
                newAlunoList.push(jsonData[key])
            }
            setAlunosLista(newAlunoList)
            } catch (error) {
              console.error('Erro ao buscar os dados:', error);
            }
          };
          fetchData()
    }, [])
    return (
    <div className={styles.screenContainer}>
      <Header>
        <BackBtn/>
        <div className={styles.adminHeader}>
          <p>Reforço Escolar da</p>
          <h1>Tia Manu</h1>
        </div>
      </Header>
      <div className={styles.screenOptionsContainer}>
        <div className={styles.alunosListContainer}>
            <h1>Lista de Alunos</h1>
            <div className={styles.alunosList}>
                {alunosLista.map( (aluno, index) => {
                    return (
                        <div key={index} className={styles.alunoRow}>
                            <div className={styles.alunoItem}>{aluno.nome}</div>
                            <div className={`${styles.alunoItem} ${aluno.statusPg.toLowerCase() === 'atraso' && styles.atraso}`}>{aluno.statusPg}</div>
                            <div className={styles.alunoItem}>{aluno.dataPg}</div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>

    </div>
  );
}

export default AdminsHome;
