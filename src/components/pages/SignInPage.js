import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthenPage from './AuthenPage';
import { useForm } from 'react-hook-form';
import Field from '../field/Field';
import Label from '../layouts/label/Label';
import Input from '../layouts/input/Input';
import Button from '../button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { IconEyeClose, IconEyeOpen } from '../icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { values } from 'lodash';
import { async } from '@firebase/util';

const schema = yup.object({
   email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter your email'),
   password: yup
      .string()
      .required('Please enter your password')
      .min(8, 'You must be at least 8 characters long'),
});

const SignInPage = () => {
   const [togglePassword, setTogglePassword] = useState(false);
   const {
      handleSubmit,
      control,
      formState: { isSubmitting, errors, isValid },
   } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema),
   });
   const { userInfo } = useAuth();
   const navigate = useNavigate();
   useEffect(() => {
      const arrayErrors = Object.values(errors);
      if (arrayErrors.length > 0) {
         toast.error(arrayErrors[0]?.message, {
            pauseOnHover: false,
         });
      }
   }, [errors]);
   useEffect(() => {
      document.title = 'Login page';
      if (userInfo?.email) {
         navigate('/');
      }
   }, [navigate, userInfo?.email]);
   const handleSignIn = async (userInfo) => {
      if (!isValid) return;
      await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      navigate('/');
   };
   return (
      <AuthenPage>
         <form
            className="form"
            onSubmit={handleSubmit(handleSignIn)}
            autoComplete="off"
         >
            <Field>
               <Label htmlFor="email">Email</Label>
               <Input
                  placeholder="Please enter your email"
                  name="email"
                  type="email"
                  id="email"
                  control={control}
               />
            </Field>
            <Field>
               <Label htmlFor="password">Password</Label>
               <Input
                  placeholder="Please enter your password"
                  name="password"
                  type={togglePassword ? 'text' : 'password'}
                  id="password"
                  control={control}
               >
                  {!togglePassword ? (
                     <IconEyeClose
                        onClick={() => setTogglePassword(!togglePassword)}
                     />
                  ) : (
                     <IconEyeOpen
                        onClick={() => setTogglePassword(!togglePassword)}
                     />
                  )}
               </Input>
            </Field>
            <div className="have-account">
               You haven't an account?{' '}
               <NavLink to="/sign-up">Register an account.</NavLink>
            </div>
            <Button
               type="submit"
               style={{
                  maxWidth: 300,
                  margin: '0 auto',
               }}
               kind="primary"
               isLoading={isSubmitting}
               disable={isSubmitting}
            >
               Sign Up
            </Button>
         </form>
      </AuthenPage>
   );
};

export default SignInPage;
