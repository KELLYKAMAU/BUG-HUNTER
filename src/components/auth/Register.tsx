import { Navigation } from "../nav/Navigation";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';



type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Registration: React.FC = () => {
  const schema = yup.object().shape({
    // username: yup.string().min(3, 'Min 3 characters').max(100, 'Max 100 characters').required('Username is required'),
    first_name: yup.string().min(3, 'Min 3 characters').max(100, 'Max 100 characters').required('Firstname is required'),
    last_name: yup.string().min(3, 'Min 3 characters').max(100, 'Max 100 characters').required('Lastname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Min 8 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle registration logic here
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-100">
        <div className="card w-96 bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Firstname</span>
                </label>
                <input
                  type="text"
                  {...register("first_name")}
                  placeholder="Enter your Firstname"
                  className="input input-bordered w-full"
                />
                {errors.first_name && <span className="text-red-500 text-sm">{errors.first_name.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lastname</span>
                </label>
                <input
                  type="text"
                  {...register("last_name")}
                  placeholder="Enter your Lastname"
                  className="input input-bordered w-full"
                />
                {errors.last_name && <span className="text-red-500 text-sm">{errors.last_name.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register('confirmPassword')}
                  placeholder="Confirm your password"
                  className="input input-bordered w-full"
                />
                {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;