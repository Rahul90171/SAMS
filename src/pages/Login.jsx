import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <div style={{background:'white',padding:'40px',borderRadius:'10px',boxShadow:'0 4px 10px rgba(0,0,0,0.1)'}}>
        <h2>Admin Login</h2>
        <button className="button" onClick={() => navigate('/admin')}>Login</button>
      </div>
    </div>
  );
}

export default Login;