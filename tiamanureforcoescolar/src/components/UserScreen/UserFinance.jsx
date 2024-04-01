import React from "react";

import styles from "./userStyles.module.css";

function UserFinance() {
  const [tabelaMocada, setTabelaMocada] = React.useState([
    {
      vencimento: new Date("08/02/2024"),
      dataPg: new Date("10/02/2024"),
      status: "atraso",
    },
    {
      vencimento: new Date("08/01/2024"),
      dataPg: new Date("08/01/2024"),
      status: "pago",
    },
    {
      vencimento: new Date("08/12/2023"),
      dataPg: null,
      status: "vencido",
    },
  ]);
  const [clientStatus, setClientStatus] = React.useState({
    status: "em dia",
    classe: "pago",
  });

  return (
    <div className={styles.userScreenContainer}>
      <div
        className={`${styles.financeStatusContainer} ${
          styles[clientStatus.classe]
        }`}
      >
        <p>container</p>
      </div>
      <div className={styles.financeHistoryContainer}>
        <h1>Histórico de Pagamento</h1>
        <div className={styles.financeHistoryTable}>
          <div key={"gridRow" + 0} className={styles.gridRow}>
            <div className={styles.gridItem} key={"gridColumn1"}>
              Vencimento
            </div>
            <div className={styles.gridItem} key={"gridColumn2"}>
              Data Pg
            </div>
            <div className={styles.gridItem} key={"gridColumn3"}>
              Status
            </div>
          </div>
          {tabelaMocada.map((linha, index) => {
            return (
              <div key={"gridRow" + index} className={styles.gridRow}>
                <div className={styles.gridItem}>
                  {linha.vencimento !== null ? linha.vencimento.toLocaleDateString() : "Não Informado"}
                </div>
                <div className={styles.gridItem}>
                  {linha.dataPg !== null ? linha.dataPg.toLocaleDateString() : "Não pago"}
                </div>
                <div className={`${styles.gridItem} ${styles[linha.status]}`}>
                  {linha.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserFinance;
