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
      <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30">
        <div className="bg-white rounded-sm border-2">
          <div className="p-2 border-b-2">
            <span>{message}</span>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <button
              onClick={onClickClose}
              className="p-2 flex-1 hover:bg-slate-100 transition-colors">
              취소
            </button>
            <button
              onClick={onClickOK}
              className="p-2 flex-1 hover:bg-slate-100 transition-colors">
              확인
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
