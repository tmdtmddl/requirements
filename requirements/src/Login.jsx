import "./Login.css";
import { useState } from "react";
import useAuth from "./context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");

  const navi = useNavigate();

  const onSubmit = () => {
    // email, password  검사
    // user null에서 유저의 값으로 변경해줘야 함
    setUser({ email, password });
    alert("로그인되었습니다.");
    navi("/");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="link">로그인/시작하기</button>
      </form>
    </div>
  );
};

export default Login;
