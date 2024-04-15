import React from "react";
import { useLocation } from "react-router";
import Header from "../Header/Header";
import BackBtn from "../helpers/BackBtn";
import Input from "../helpers/Input";

import styles from "./adminStyles.module.css";
import { AppContext } from "../../AppContext";

function AlunoScreen() {
  const location = useLocation();
  const { state } = location;
  const [alunoData, setAlunoData] = React.useState({ ...state.aluno });


  function handleSubmit(e) {
    e.preventDefault();
    const [ textArea, cancelBtn, enviarBtn] = e.target;
    const msg = {
      msg: textArea.value
    }

  }
  function clearForm(e){
    e.preventDefault();
    e.target.form[0].value = ''
  } 


  return (
    <>
      <Header>
        <BackBtn />
        <div className={styles.adminHeader}>
          <div className={styles.alunoDataContainer}>
            <h1>
              {alunoData?.nome} {alunoData?.sobrenome}
            </h1>
            <p>Responsável: {alunoData?.responsavel}</p>
            <p>Data Pgto: {alunoData?.dataPg}</p>
            <p>Escola: {alunoData?.escola}</p>
            <p>Turma: {alunoData?.turma}</p>
            <p>Série: {alunoData?.serie}</p>
            <p>
              Situação
              <span
                className={styles[alunoData.statusPg]}
              >{`: ${alunoData?.statusPg}`}</span>
            </p>
          </div>
        </div>
      </Header>
      <div className={styles.screenOptionsContainer}>
        <div>
          <h1>Ações para o Aluno</h1>
          <div className={`${styles.btnsContainer} ${styles.btnsContainerRow}`}>
            <div className={`${styles.btnsContainer}`}>
              <button className={styles.btnStyle}>Dados do Aluno</button>
              <button className={styles.btnStyle}>Notificação</button>
              <button className={styles.btnStyle}>Financeiro</button>
            </div>
            <div className={`${styles.btnsContainer}`}>
              <button className={styles.btnStyle}>Emblemas</button>
              <button className={styles.btnStyle}>Comportamento</button>
              <button className={styles.btnStyle}>Evolução</button>
            </div>
          </div>
        </div>
        <form className={styles.diarioAlunoContainer} onSubmit={handleSubmit}>
          <h1>Diário do Aluno</h1>
          <Input className={styles.diarioAlunoInput} textArea={true} />
          <div className={`${styles.btnsContainer} ${styles.btnsContainerRow}`}>
            <button type="reset" onClick={clearForm}>Cancelar</button>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AlunoScreen;
