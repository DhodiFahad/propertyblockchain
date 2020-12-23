import React, {useState}from 'react';
import {useHistory} from 'react-router-dom';

import landing_img from '../../assets/images/landing_img.svg'

function Auth() {
    // const [isLoggedin,setisLoggedin] = useState(false);
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [userEmail,setuserEmail] = useState('');
    const [userphoneNumber,setuserPhonenumber] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userRole,setuserRole] = useState('');
    
    const history = useHistory();

    const Login = () => {
        if( userEmail &&  userPassword  ){
           history.push('/Home')
        }
    }

    return (
        <div className='auth-page'>
            <div className='div-1'>
                <h1 className='heading'>Property BlockChain <br/> System</h1>
                <img src={landing_img} alt='property blockchain' className='landing-img'/>
            </div>
            <div className='div-2'>
                <span className='heading'>
                    Welcome To The Propety BlockChain System
                </span>
                <form >
                    <h1>Register</h1>
                    <div className='row'>
                        <div className='input'>
                            <label>Email Address</label>
                            <input type='email' name='useremail'  onChange={e=>setuserEmail(e.target.value)}/>
                        </div>
                        {/* <div className='input'>
                            <label>First Name</label>
                            <input type='text' name='firstName' onChange={e=>setfirstName(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <label>Last Name</label>
                            <input type='text' name='lastName'  onChange={e=>setlastName(e.target.value)}/>
                        </div> */}
                    </div>

                    {/* <div className='row'>
                        <div className='input'>
                            <label>Email Address</label>
                            <input type='email' name='useremail'  onChange={e=>setuserEmail(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <label>Phone Number</label>
                            <input type='text' name='phoneNumber'  onChange={e=>setuserPhonenumber(e.target.value)}/>
                        </div>
                    </div> */}

                    <div className='row'>
                        <div className='input'>
                            <label>Password</label>
                            <input type='password' name='userPassword'  onChange={e=>setUserPassword(e.target.value)}/>
                        </div>
                        <div className="input">
                            {/* onChange={this.inputUpdate.bind(this)} */}
                            <label>Role</label>
                            <select name="room" className='select1'  onChange={e=>setuserRole(e.target.value)} >
                                <option value="landOwner">Land Owner</option>
                                <option value="Adminstrator">Adminstrator</option>
                            </select>
                            
                        </div>
                        
                    </div>
                    <button className='btn' onClick={Login}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Auth
