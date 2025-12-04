// import { Navigation } from "../nav/Navigation";
// import { useForm, type SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import React from 'react';
// import { usersAPI } from "../../features/auth/usersAPI";
// import { useNavigate } from "react-router";


// type FormValues = {
//   first_name: string
//   last_name: string,
//   email: string;
//   password_hash: string;
//   confirmPassword: string;
// };

// const Registration: React.FC = () => {
//   const schema = yup.object().shape({
//     first_name: yup.string().min(3, 'Min 3 characters').max(100, 'Max 100 characters').required('Firstname is required'),
//     last_name: yup.string().min(3, 'Min 3 characters').max(100, 'Max 100 characters').required('Lastname is required'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password_hash: yup.string().min(8, 'Min 8 characters').required('Password is required'),
//     confirmPassword: yup.string().oneOf([yup.ref('password_hash')], 'Passwords must match').required('Confirm password is required'),
//   });

//   const navigate=useNavigate();

//   const [createUser] = usersAPI.useCreateUsersMutation();

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm<FormValues>({
// //     resolver: yupResolver(schema),
// //   });

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//      try {
//       console.log("Form Data:", data);
//       await createUser(data).unwrap();
//       navigate("/userLogin");


         
      
//     } catch (error) {
//       console.error("Failed to register user:", error);
//     }


    

//   };

//   return (
//     <>
//       <Navigation />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-100">
//         <div className="card w-96 bg-base-100 shadow-2xl border border-base-300">
//           <div className="card-body">
//             <h2 className="card-title justify-center text-2xl font-bold">Register</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">FirstName</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("first_name")}
//                   placeholder="Enter your Firstname"
//                   className="input input-bordered w-full"
//                 />
//                 {errors.first_name && <span className="text-red-500 text-sm">{errors.first_name.message}</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Lastname</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("last_name")}
//                   placeholder="Enter your lastname"
//                   className="input input-bordered w-full"
//                 />
//                 {errors.first_name && <span className="text-red-500 text-sm">{errors.first_name.message}</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register('email')}
//                   placeholder="Enter your email"
//                   className="input input-bordered w-full"
//                 />
//                 {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 {/* <input */}
//                   type="password"
//                   {...register("password_hash")}
//                   placeholder="Enter your password"
//                   className="input input-bordered w-full"
//                 />
//                 {errors.password_hash && <span className="text-red-500 text-sm">{errors.password_hash.message}</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Confirm Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   {...register('confirmPassword')}
//                   placeholder="Confirm your password"
//                   className="input input-bordered w-full"
//                 />
//                 {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary w-full">
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default Registration;