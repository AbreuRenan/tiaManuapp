import React from "react";

import styles from "./adminStyles.module.css";
import BackBtn from "../helpers/BackBtn";
import Header from "../Header/Header";

function MensagemTodosScreen() {
  const [radio, setRadio] = React.useState(0);
  function handleRadioChange({ target }) {
    setRadio(Number(target.value));
  }

  function handleSubmit({ target }) {
    console.log(target);
  }
  return (
    <>
      <Header>
        <BackBtn />
        <div className={styles.adminHeader}>
          <p>Reforço Escolar da</p>
          <h1>Tia Manu</h1>
        </div>
      </Header>
      <form onSubmit={handleSubmit}>
        <div className={styles.screenContainer}>
          <div
            className={styles.screenOptionsContainer}
            style={{ border: "1px solid red" }}
          >
            <h1>Enviar Mensagem</h1>
            <div className={styles.menssageOptionsContainer}>
              <div>
                <h1>Mensagem</h1>
                <div className={styles.menssageContainer}></div>
                <div className={styles.priorityContainer}>
                  <label>
                    <input
                      type="radio"
                      name="messagePriority"
                      id="messagePriority"
                      value={1}
                      checked={radio === 1}
                      onChange={handleRadioChange}
                    />
                    Regular
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="messagePriority"
                      id="messagePriority"
                      value={2}
                      checked={radio === 2}
                      onChange={handleRadioChange}
                    />
                    Atenção
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="messagePriority"
                      id="messagePriority"
                      value={3}
                      checked={radio === 3}
                      onChange={handleRadioChange}
                    />
                    Grave
                  </label>
                </div>
                <div
                  className={`${styles.btnsContainer} ${styles.resetSendBtns}`}
                >
                  <button>Cancelar</button>
                  <button>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MensagemTodosScreen;
