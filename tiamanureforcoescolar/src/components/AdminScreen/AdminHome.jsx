import React from "react";
import Header from "../Header/Header";
import BackBtn from "../helpers/BackBtn";

import styles from "./adminStyles.module.css";
import { useNavigate } from "react-router";
import { AppContext } from "../../AppContext";

function AdminHome() {
  const { alunosList } = React.useContext(AppContext);

  const navigate = useNavigate();

  React.useEffect(() => {
  }, []);

  return (
    <>
      <Header>
        <BackBtn />
        <div className={styles.adminHeader}>
          <p>Reforço Escolar da</p>
          <h1>Tia Manu</h1>
        </div>
      </Header>
      <div className={styles.screenContainer}>
        <div className={styles.screenOptionsContainer}>
          <div className={styles.alunosListContainer}>
            <h1>Lista de Alunos</h1>
            <div className={styles.alunosList}>
              {alunosList.map((aluno, index) => {
                return (
                  <div
                    key={index}
                    className={styles.alunoRow}
                    onClick={() => navigate("aluno", {state: {aluno: aluno}})}
                  >
                    <div className={styles.alunoItem}>{aluno.nome}</div>
                    <div
                      className={`${styles.alunoItem} ${
                        aluno.statusPg.toLowerCase() === "atraso" &&
                        styles.atraso
                      }`}
                    >
                      {aluno.statusPg}
                    </div>
                    <div className={styles.alunoItem}>{aluno.dataPg}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.btnsContainer}>
            <button
              className={`${styles.btnStyle} ${styles.azul}`}
              onClick={() => navigate("mensagemgeral")}
            >
              Mensagem para Todos
            </button>
            <button
              className={`${styles.btnStyle} `}
              onClick={() => navigate("novoaluno")}
            >
              Inserir Novo Aluno
            </button>
            <button className={`${styles.btnStyle} `}>
              Cadastrar Novo Emblema
            </button>
            <button className={`${styles.btnStyle} ${styles.vermelho}`}>
              Limpar Dados Semanais
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
