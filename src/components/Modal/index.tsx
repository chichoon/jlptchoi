import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const element = document.getElementById("modal");
  if (!element) return null;
  return ReactDOM.createPortal(children, element);
};

interface ModalProps {
  message: string;
  onClickClose: () => void;
  onClickOK: () => void;
}

export const Modal = ({ message, onClickClose, onClickOK }: ModalProps) => {
  return (
    <ModalPortal>
      <div>
        <div>
          <span>{message}</span>
        </div>
        <div>
          <button onClick={onClickClose}>취소</button>
          <button onClick={onClickOK}>확인</button>
        </div>
      </div>
    </ModalPortal>
  );
};
