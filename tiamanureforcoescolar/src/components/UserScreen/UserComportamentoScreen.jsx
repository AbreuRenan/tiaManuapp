import React from "react";

import styles from "./userStyles.module.css";
import lostEmblemIcon from "../../assets/lostEmblemIcon.png"
import abcicon from "../../assets/abcicon.png"
import staricon from "../../assets/staricon.png"

function UserComportamentoScreen() {

  const tabelaMockada = [
    {
    img: staricon,
    nome: "Emblema de Bom Comportamento",
    recebido: "10/03/2024",
    pontos: "+10pts",
  },
  {
    img: abcicon,
    nome: "Emblema da Caligrafia",
    recebido: "10/03/2024",
    pontos: "+10pts",
  },
  {
    nome: "Emblema da Leitura",
    recebido: "Não recebeu",
    pontos: "+10pts",
  },
  {
    nome: "Emblema da Tabuada",
    recebido: "Não recebeu",
    pontos: "+10pts",
  },
  {
    nome: "Emblema da Soma",
    recebido: "Não recebeu",
    pontos: "+10pts",
  }
]

const userDataMockada = {
  pontosSemana: 18,
  record: 42,
  rankingSemana: 3
}
  return (
    <div className={styles.userScreenContainer}>
      <div className={styles.comportamentoStatsContainer}>
        <div className={styles.kidDataCol}>
          <h1>Pontos da Semana: {userDataMockada.pontosSemana}</h1>
          <h1>Recorde de Pontos: {userDataMockada.pontosSemana}</h1>
          <h1>Ranking da Semana: {userDataMockada.pontosSemana}º</h1>
        </div>
        <div className={styles.kidDataCol}>
          <div className={styles.kidRankPosContainer}>
            <span>Rank</span>
            <div><h1>3</h1><span>º</span></div>
          </div>
        </div>
      </div>
      {tabelaMockada.map( (item, index) => {

        return (
          <div key={index} className={`${styles.comportamentoStatsContainer} ${styles.emblemContainer}`}>
            <div className={styles.emblemLeftSide}>
              <img src={item.img ? item.img : lostEmblemIcon} alt="" />
            </div>
            <div className={styles.emblemRightSide}>
              <h1>{item.nome}</h1>
              <div>
                <p>Recebido em: {item.recebido}</p>
                <p>Pontos recebidos: {item.pontos}</p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default UserComportamentoScreen;
