import React from "react";

import styles from "./userStyles.module.css";

function UserEvolucaoScreen() {
  const bi1Mocado = [
    {
      disciplina: "Português",
      nota: Math.random() * 10 + 2,
    },
    {
      disciplina: "Matemática",
      nota: Math.random() * 10 + 2,
    },
    {
      disciplina: "Ciências",
      nota: Math.random() * 10 + 2,
    },
    {
      disciplina: "Inglês",
      nota: Math.random() * 10 + 2,
    },
    {
      disciplina: "Artes",
      nota: Math.random() * 10 + 2,
    },
  ];
  const bi2Mocado = [
    {
      disciplina: "Português",
      nota: Math.random() * 10,
    },
    {
      disciplina: "Matemática",
      nota: Math.random() * 10,
    },
    {
      disciplina: "Ciências",
      nota: Math.random() * 10,
    },
    {
      disciplina: "Inglês",
      nota: Math.random() * 10,
    },
  ];
  const bi3Mocado = [];
  const bi4Mocado = [];
  return (
    <div className={`${styles.userScreenContainer} `}>
      <div>
        <p>1º bimestre</p>
        <div
          className={`${styles.comportamentoStatsContainer} ${styles.bimestreContainer}`}
        >
          {bi1Mocado.map((item, index) => {
            return (
              <div className={styles.bimestreItem} key={index}>
                <span>
                  {item.disciplina}:{" "}
                  <span
                    style={{ color: item.nota.toFixed(1) <= 5 ? "red" : "" }}
                  >
                    {item.nota.toFixed(1)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p>2º bimestre</p>
        <div
          className={`${styles.comportamentoStatsContainer} ${styles.bimestreContainer}`}
        >
          {bi2Mocado.map((item, index) => {
            return (
              <div className={styles.bimestreItem} key={index}>
                <span>
                  {item.disciplina}:{" "}
                  <span
                    style={{ color: item.nota.toFixed(1) <= 5 ? "red" : "" }}
                  >
                    {item.nota.toFixed(1)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p>3º bimestre</p>
        <div
          className={`${styles.comportamentoStatsContainer} ${styles.bimestreContainer}`}
        >
          {bi3Mocado.map((item, index) => {
            return (
              <div className={styles.bimestreItem} key={index}>
                <span>
                  {item.disciplina}:{" "}
                  <span
                    style={{ color: item.nota.toFixed(1) <= 5 ? "red" : "" }}
                  >
                    {item.nota.toFixed(1)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p>4º bimestre</p>
        <div
          className={`${styles.comportamentoStatsContainer} ${styles.bimestreContainer}`}
        >
          {bi4Mocado.map((item, index) => {
            return (
              <div className={styles.bimestreItem} key={index}>
                <span>
                  {item.disciplina}:{" "}
                  <span
                    style={{ color: item.nota.toFixed(1) <= 5 ? "red" : "" }}
                  >
                    {item.nota.toFixed(1)}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserEvolucaoScreen;
