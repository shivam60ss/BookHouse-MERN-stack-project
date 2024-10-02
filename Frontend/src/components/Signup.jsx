import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex h-screen items-center justify-center ">
                <div className='w-[600px]'>
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* Close button */}
                            <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</Link>

                            <div className=''>
                                <h2 className="text-center font-bold">Signup</h2>

                                {/* First Name */}
                                <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("firstName", { required: true })}
                                    />
                                    {errors.firstName && <span className='text-red-500'>First name is required</span>}
                                </div>

                                {/* Last Name */}
                                <div className="form-control w-full max-w-xs mt-4 ">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("lastName", { required: true })}
                                    />
                                    {errors.lastName && <span className='text-red-500'>Last name is required</span>}
                                </div>

                                {/* Email */}
                                <div className="form-control w-full max-w-xs mt-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>

                                {/* Password */}
                                <div className="form-control w-full max-w-xs mt-4">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                </div>

                                {/* Signup Button */}
                                <div className='flex justify-between mt-4'>
                                    <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-400 duration-200'>Signup</button>
                                    <p>
                                        Have an account?{" "}
                                        <a className='underline text-blue-500 cursor-pointer'
                                            onClick={() => document.getElementById("my_modal_3").showModal()}
                                        >Login</a>
                                        <Login />
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
