import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <div className="register-form">
      <h2>회원가입</h2>
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button>회원가입</button>
    </div>
  );
};

export default RegisterForm;
