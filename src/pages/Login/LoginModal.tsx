import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Input,
  LoginButton,
  CloseButton,
} from "./LoginModal.styled.ts";
import { students } from "../Students/StudentsPage.tsx";

const LoginModal = ({
  onClose,
  setStudentAvatar,
}: {
  onClose: () => void;
  setStudentAvatar: (signedStudent: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!email || !password) return alert("Please fill all fields");
    const signedStudent = students.find(
      (student) => student.email === email && student.password === password
    );
    setStudentAvatar(signedStudent?.avatar || "");
    localStorage.setItem("loggedIn", JSON.stringify(signedStudent));
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
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

        <LoginButton onClick={handleLogin}>Log In</LoginButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginModal;
