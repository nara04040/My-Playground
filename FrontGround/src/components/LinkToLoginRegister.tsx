import React from "react";

const LinkToLoginRegister = () => {
  return (
    <div>
      <h1>회원가입 / 로그인</h1>
      <div style={{ marginBottom: "15px" }}>
        <a href="/login" style={{ color: "#fff" }}>
          <span>로그인</span>
        </a>
      </div>
      <div>
        <a href="/register" style={{ color: "#fff" }}>
          <span>회원가입</span>
        </a>
      </div>
    </div>
  );
};

export default LinkToLoginRegister;
