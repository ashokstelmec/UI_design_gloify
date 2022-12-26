import './App.css';
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { RiKey2Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <div className="App">
      <div className='pics'></div>
      <div className='form-group'>
        <div className='new-account'>
          <h1>Create a new Account</h1>
          <form>
            <div className='title'>
              <label>First Name</label>
            </div>
            <div>
              <BsPerson className='icons'/>
              <input type="text" className="form-control" placeholder="John" />
            </div>
            <div className='title'>
              <label>Last Name</label>
            </div>
              <div>
                <BsPerson className='icons'/>
                <input type="text" className="form-control" placeholder="Doe" />
              </div>
            <div className='title'>
              <label>Email</label>
            </div>
            <div>
              <CiMail className='icons'/>
              <input type="email" className="form-control" placeholder="jhon@example.com" />
            </div>
            <div className='title'>
              <label>Password</label>
            </div>
            <div>
              <RiKey2Line className='icons'/>
              <input type="password" className="form-control" placeholder="********" />
              <AiOutlineEye className='icon'/>
            </div>
            <p className='clicking'>By clicking Sign up, you agree to the<br /> 
               getemail.io <span>User Agreement</span>, 
               <span>Privacy Policy</span>, and <br />
               <span>GDPR Addendum</span>
            </p>
            <div> <button>Sign Up</button></div>
          </form>
          <div className='an-account'><p>Already have an account? <span>Sign in instead</span></p></div> 
          <div className='borders'></div>
          <div className='or'>or</div>
          <div className='btn'><button>< FcGoogle className='icon-1'/>Sign Up with Google</button></div>
          <div className='sell-data'>We <b>DO NOT</b> sell your data. We <b>DO NOT</b> use</div>
        </div>
      </div>
    </div>
  );
}

export default App;
