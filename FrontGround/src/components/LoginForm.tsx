import React from "react";

const LoginForm: React.FC = () => {
  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} 로그인`);
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>

      <div className="social-login">
        <button onClick={() => handleSocialLogin("Google")}>Google 로그인</button>
        <button onClick={() => handleSocialLogin("Kakao")}>카카오 로그인</button>
      </div>
    </div>
  );
};

export default LoginForm;
