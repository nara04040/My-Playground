import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email };
    if (register(newUser, password)) {
      alert("회원가입 성공");
      navigate("/login");
    } else {
      alert("이미 사용중인 이메일입니다.");
    }
  };
  return (
    <div className="register-form">
      <h2>회원가입</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default RegisterForm;
