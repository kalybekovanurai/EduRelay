import type { ReactNode } from "react";
import { Overlay, Backdrop, ModalWrapper, ModalContent } from "./Modal.styles";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <Overlay>
      <Backdrop onClick={onClose} />

      <ModalWrapper>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};