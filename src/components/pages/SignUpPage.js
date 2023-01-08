import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Label from '../layouts/label/Label';
import { useForm } from 'react-hook-form';
import Input from '../layouts/input/Input';
import { IconEyeClose, IconEyeOpen } from '../icons';
import Field from '../field/Field';
import Button from '../button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase-config';
import { Navigate, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import AuthenPage from './AuthenPage';

const SignUpPageStyles = styled.div`
   /* background-color: ${(props) => props.theme.primary}; */
   min-height: 100vh;
   padding: 40px;
   .logo {
      margin: 0 auto 20px;
   }
   .heading {
      text-align: center;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      font-size: 40px;
   }
   .form {
      margin: 0 auto;
      width: 100%;
      max-width: 800px;
      text-align: center;
   }
`;

const schema = yup.object({
   fullname: yup.string().required('Please enter your full name'),
   email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter your email'),
   password: yup
      .string()
      .required('Please enter your password')
      .min(8, 'You must be at least 8 characters long'),
});

const SignUpPage = () => {
   const navigate = useNavigate();
   const {
      control,
      handleSubmit,
      formState: { errors, isValid, isSubmitting },
      watch,
      reset,
   } = useForm({
      resolver: yupResolver(schema),
   });
   const [togglePassword, setTogglePassword] = useState(false);
   const handleSignUP = async (values) => {
      // return new Promise((resolve) => {
      //    setTimeout(() => {
      //       resolve();
      //       console.log(
      //          '🚀 ~ file: SignUpPage.js:40 ~ handleSignUP ~ values',
      //          values
      //       );
      //    }, 3000);
      // });
      const user = await createUserWithEmailAndPassword(
         auth,
         values.email,
         values.password
      );
      await updateProfile(auth.currentUser, {
         displayName: values.fullname,
      });
      const colRef = collection(db, 'users');
      await addDoc(colRef, {
         fullname: values.fullname,
         email: values.email,
         password: values.password,
      });
      toast.success('Create user successfully created!');
      navigate('/');
   };
   useEffect(() => {
      const arrayErrors = Object.values(errors);
      if (arrayErrors.length > 0) {
         toast.error(arrayErrors[0]?.message, {
            pauseOnHover: false,
         });
      }
   }, [errors]);
   return (
      <AuthenPage>
         <form
            className="form"
            onSubmit={handleSubmit(handleSignUP)}
            autoComplete="off"
         >
            <Field>
               <Label htmlFor="fullName" className="label">
                  Full name
               </Label>
               <Input
                  id="fullName"
                  type="text"
                  className="input"
                  name="fullname"
                  control={control}
                  placeholder="Enter your fullname"
               />
            </Field>
            <Field>
               <Label htmlFor="email" className="label">
                  Email
               </Label>
               <Input
                  id="email"
                  type="email"
                  name="email"
                  className="input"
                  control={control}
                  placeholder="Enter your email"
               />
            </Field>
            <Field>
               <Label htmlFor="password" className="label">
                  Password
               </Label>
               <Input
                  type={togglePassword ? 'text' : 'password'}
                  id="password"
                  className="input"
                  name="password"
                  control={control}
                  placeholder="Enter your password"
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
            <Button
               type="submit"
               style={{
                  maxWidth: 300,
                  margin: '0 auto',
               }}
               isLoading={isSubmitting}
               disable={isSubmitting}
            >
               Sign Up
            </Button>
         </form>
      </AuthenPage>
   );
};

export default SignUpPage;
