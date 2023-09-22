// function LoginPage(): JSX.Element {
//   return <></>;
// }
// import { useState } from "react";
// import { UserRole } from "../types/User";
// import { Workout } from "../types/Workout";

// interface LoginFormProps {
//   onLogin: (
//       id: number,
//       username: string,
//       role: UserRole,
//       activities: Workout [],
//   ) => void
// }
// function LoginPage(props: LoginFormProps): JSX.Element {
//   // const [username] = useState<string>('');
//   const navigate = useNavigate();
//   const userInfo  

//   function handleSubmit (event: React.FormEvent) {
//       event.preventDefault();
//   }

//   return (
//   <div className="login-form">
//       <form onSubmit={handleSubmit}>
//       <button type="submit" className="Admin-btn">Admin</button>
//       <button type="submit" className="Guest-btn">Guest</button>

//       </form>
//   </div>
  
//   // <button onClick={guest} className="Guest-btn">Guest</button>
//   )
// }

import React from 'react';
// import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  // const navigate = useNavigate();

  const handleButton1Click = () => {
    window.location.href = '/NewWorkoutPage';
    // navigate('/NewWorkoutPage'); 
  };

  const handleButton2Click = () => {
    window.location.href = '/BookWorkout';
    // navigate('/BookWorkout'); 
  };

  return (
    <div>
      <button onClick={handleButton1Click}>Admin</button>
      <button onClick={handleButton2Click}>Guest</button>
    </div>
  );
};


// function LoginPage(){
//   const navigateto = () => ('/NewWorkoutPage');
//   const navigate = () => ('/BookWorkoutPage')

//   return (
//     <div className=''>
//       <form>
//         <button type="button" onClick={navigateto}>
//           Admin
//         </button>
//         <button type="button" onClick={navigate}>
//           Guest
//         </button>
//       </form>
//     </div>
//   );
// }
export default LoginPage;
