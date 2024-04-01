import React from "react";

import styles from "./userStyles.module.css";
import { useNavigate } from "react-router";


const msgs = [
  {msg: "Msg para todos 1", nivel: "normal" },
  {msg: "Msg para todos 2", nivel: "grave" },
  {msg: "Msg para todos 3", nivel: "alerta"},
];

function UserOptionsPanel() {
  const [msgsForAll, setMsgForAll] = React.useState(msgs[0])
  const navigate = useNavigate();
  React.useEffect(() => {
    let i = msgs.findIndex((item) => item.msg == msgsForAll.msg);
    const msgTimer = setInterval(() => {
      i = i + 1 < msgs.length ? i + 1 : 0;
      setMsgForAll(msgs[i]);
    }, 2500);
    return () => clearInterval(msgTimer);
  }, [msgsForAll]);

  return (
    <div className={`${styles.userScreenContainer} ${styles.flexGrow}`}>
      <div className={`${styles.userOptionPanelContainer} ${styles.flexGrow}`}>
        <div>
          <div
            className={styles.optionButtons}
            onClick={() => navigate("financeiro")}
          >
            <img src="src/assets/financeiroIcon.png" alt="" />
          </div>
          <span>Financeiro</span>
        </div>
        <div>
          <div
            className={styles.optionButtons}
            onClick={() => navigate("comportamento")}
          >
            <img src="src/assets/feedbackIcon.png" alt="" />
          </div>
          <span>Comportamento</span>
        </div>
        <div>
          <div
            className={styles.optionButtons}
            onClick={() => navigate("evolucao")}
          >
            <img src="src/assets/evoIcon.png" alt="" />
          </div>
          <span>Evolução</span>
        </div>
        <div className={styles.msgManuBtn}>Enviar Mensagem para Tia Manu</div>
        <div className={`${styles.msgManuAll} ${msgsForAll.nivel}`}>{msgsForAll.msg}</div>
      </div>
    </div>
  );
}

export default UserOptionsPanel;
