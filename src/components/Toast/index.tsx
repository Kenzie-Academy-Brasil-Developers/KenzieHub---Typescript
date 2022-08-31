import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { AiFillExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { IMessages, ToastContext } from "../../contexts/ToastContext";

interface IMessageToast {
  message: IMessages;
}

type IIsLeave = boolean;
type ITimer = NodeJS.Timeout;

const icons = {
  sucess: <AiFillCheckCircle size={30} />,
  error: <AiFillExclamationCircle size={30} />,
};

function Toast({ message }: IMessageToast) {
  const [isLeave, setIsleave] = useState<IIsLeave>(false);
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    let timer: ITimer;
    if (isLeave) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsleave(true);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, isLeave, removeToast]);

  return (
    <Container
      isLeave={isLeave}
      hasDescription={!!message.description}
      type={message.type}
    >
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => setIsleave(true)}>
        X
      </button>
      <div className="barra"></div>
    </Container>
  );
}

export default Toast;
