// import React, { useState, useEffect } from 'react';

// import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

// import { authenticateLogin, authenticateSignup } from '../../service/api';

// const Component = styled(DialogContent)`
//     height: 70vh;
//     width: 90vh;
//     padding: 0;
//     padding-top: 0;
// `;

// const LoginButton = styled(Button)`
//     text-transform: none;
//     background: #FB641B;
//     color: #fff;
//     height: 48px;
//     border-radius: 2px;
// `;

// const RequestOTP = styled(Button)`
//     text-transform: none;
//     background: #fff;
//     color: #2874f0;
//     height: 48px;
//     border-radius: 2px;
//     box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
// `;

// const Text = styled(Typography)`
//     color: #878787;
//     font-size: 12px;
// `;

// const CreateAccount = styled(Typography)`
//     margin: auto 0 5px 0;
//     text-align: center;
//     color: #2874f0;
//     font-weight: 600;
//     font-size: 14px;
//     cursor: pointer
// `

// const Wrapper = styled(Box)`
//     padding: 25px 35px;
//     display: flex;
//     flex: 1;
//     overflow: auto;
//     flex-direction: column;
//     & > div, & > button, & > p {
//         margin-top: 20px;
//     }
// `;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `
// // height: 70vh;
    
// const Image = styled(Box)`
//     background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
//     width: 40%;
//     height: 100%;
//     padding: 45px 35px;
//     & > p, & > h5 {
//         color: #FFFFFF;
//         font-weight: 600
//     }
// `;

// const loginInitialValues = {
//     username: '',
//     password: ''
// };

// const signupInitialValues = {
//     firstname: '',
//     lastname: '',
//     username: '',
//     email: '',
//     password: '',
//     phone: ''
// };

// const accountInitialValues = {
//     login: {
//         view: 'login',
//         heading: 'Login',
//         subHeading: 'Get access to your Orders, Wishlist and Recommendations'
//     },
//     signup: {
//         view: 'signup',
//         heading: "Looks like you're new here",
//         subHeading: 'Signup to get started'
//     }
// }

// const LoginDialog = ({ open, setOpen, setAccount }) => {
//     const [ login, setLogin ] = useState(loginInitialValues);
//     const [ signup, setSignup ] = useState(signupInitialValues);
//     const [ error, showError] = useState(false);
//     const [ account, toggleAccount ] = useState(accountInitialValues.login);

//     useEffect(() => {
//         showError(false);
//     }, [login])

//     const onValueChange = (e) => {
//         setLogin({ ...login, [e.target.name]: e.target.value });
//     }

//     const onInputChange = (e) => {
//         setSignup({ ...signup, [e.target.name]: e.target.value });
//     }

//     const loginUser = async() => {
//         let response = await authenticateLogin(login);
//         if(!response) 
//             showError(true);
//         else {
//             showError(false);
//             handleClose();
//             setAccount(login.username);
//         }
//     }

//     const signupUser = async() => {
//         let response = await authenticateSignup(signup);
//         if(!response) return;
//         handleClose();
//         setAccount(signup.username);
//     }
    
//     const toggleSignup = () => {
//         toggleAccount(accountInitialValues.signup);
//     }

//     const handleClose = () => {
//         setOpen(false);
//         toggleAccount(accountInitialValues.login);
//     }

//     return (
//         <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
//             <Component>
//                 <Box style={{display: 'flex', height: '100%'}}>
//                     <Image>
//                         <Typography variant="h5">{account.heading}</Typography>
//                         <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
//                     </Image>
//                     {
//                         account.view === 'login' ? 
//                         <Wrapper>
//                             <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
//                             { error && <Error>Please enter valid Email ID/Mobile number</Error> }
//                             <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
//                             <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
//                             <LoginButton onClick={() => loginUser()} >Login</LoginButton>
//                             <Text style={{textAlign:'center'}}>OR</Text>
//                             <RequestOTP>Request OTP</RequestOTP>
//                             <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
//                         </Wrapper> : 
//                         <Wrapper>
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
//                             <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
//                             <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
//                         </Wrapper>
//                     }
//                 </Box>
//             </Component>
//         </Dialog>
//     )
// }

// export default LoginDialog;


import React, { useState, useContext } from "react";

import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
//COME FROM API

import { authenticateLogin, authenticateSignup } from '../../service/api';

const Component = styled(Box)`
  height: 90vh;
  width: 80vh;
  display: flex;
`;
const Color = styled(Box)`
  background: black;
  height: 100%;
  width: 40%;
`;
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: ;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: black;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: black;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;
const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Error=styled(Typography)`
font-size:14px;
color:red;
// line-height:0; //line-height: 0; is used to set the height of each line of text within an element to zero.
margin-top:10px;
font-weight:600;

`



const accountInitialValues = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};
const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDailog = ({ open, setOpen, setAccount }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  //Below line of code if for login
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };






  //this signupUser function appears to handle the signup process. 
  // It attempts to authenticate the user's signup data, and if successful, 
  //it closes a dialog (via handleClose()) and updates the user account information (possibly account state) with the first name from the signup data. If the signup authentication is not successful, the function simply returns without performing the further actions.

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  //functin for login user

  const LoginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);


      if(response.status===200){
       handleClose();
        setAccount(response.data.data.firstname)

      }else{
        setError(true);
      }
      
    //   const loginUser = async() => {
    //     let response = await authenticateLogin(login);
    //     if(!response) 
    //         showError(true);
    //     else {
    //         showError(false);
    //         handleClose();
    //         setAccount(login.username);
    //     }
    // }





  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Color>
          <Typography>LOGIN</Typography>
        </Color>
        {account.view === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter Username"
              name="username"
              onChange={(e) => onValueChange(e)}
            ></TextField>
            
            {error && <Error>Please Enter Valid username or Password</Error>}

            <TextField
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={(e) => onValueChange(e)}
            ></TextField>
            
            <Typography></Typography>
            <LoginButton variant="contained" onClick={() => LoginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <RequestOTP variant="contained">Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              Create an account{" "}
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            {/* <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone"
            /> */}
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};
export default LoginDailog;
