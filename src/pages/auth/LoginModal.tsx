import { useState } from "react";
import { Modal } from "@mui/material";
import { CloseButton, ModalContent, ModalTitle } from "./LoginModal.styled";
import { Input } from "../../components/UI/Input/Input";
import { PrimaryButton } from "../../components/UI/Buttons/PrimaryButton";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { loginThunk } from "../../stores/slices/auth/loginThunk";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const LoginModal = ({ open, onClose }: Props) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please fill all fields");
    }

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        onClose();
      })
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>

        <ModalTitle>Log In</ModalTitle>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <PrimaryButton onClick={handleLogin} disabled={loading}>
          {loading ? "Loading..." : "Log In"}
        </PrimaryButton>
      </ModalContent>
    </Modal>
  );
};