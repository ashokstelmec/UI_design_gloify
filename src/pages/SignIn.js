import { CiMail } from "react-icons/ci";
import { RiKey2Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import './SignIn.css';
import { useNavigate } from "react-router-dom";



function SignIn() {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className='form-group-1' />
      <div className='form-control'>
        <div className='form-change'>
          <h1>Welcome to</h1>
          <h1 className="get-email">GetEmail.io</h1>
          <p className='sign-in'>Please sign-in to your account.</p>
          <form>
            <div className='labels'><label>Email</label></div>
            <div>
              <CiMail className='icons'/>
              <input type="email" placeholder='harsh@vikgol.com'/>
            </div>
            <div className='labels pasword'>
              <label>Password</label>
              <span>Forgot Password?</span>
            </div>
            <div>
              <RiKey2Line className='icons'/>
              <input type="password" placeholder='********'/>
              <AiOutlineEye className='icon'/>
            </div>
            <div><button>< FiLogIn className='arrow'/>Sign In</button></div>
          </form>
          <div className='platform'><p>New on our platform? <span onClick={handleClickSignUp}>Create an acoount</span></p></div>
          <div className='borders'></div>
          <div className='or'>or</div>
          <div className='btn'><button>< FcGoogle className='icon-1'/>Sign In with Google</button></div>
          <div className='it-work'>How does it work</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
