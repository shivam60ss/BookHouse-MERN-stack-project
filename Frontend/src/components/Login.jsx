import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"



const Login = () => {  // Renamed to PascalCase
    const {
        register,
        handleSubmit,
        formState: { errors },  
      } = useForm();

      const onSubmit = (data) => console.log(data);
      
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                ✕
                            </button>
                            {/* </form> */}
                            <div className=''>
                                <h2 className="text-center font-bold">Login</h2>
                                {/* <form className="mt-4"> */}
                                {/* email */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your Email" className="input input-bordered  w-full max-w-xs" 
                                    {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                {/* password */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered  w-full max-w-xs"
                                    {...register("password", { required: true })} />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                </div>
                                {/* <button> */}
                                <div className='flex justify-between mt-4'>
                                    <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-400 duration-200'>Login</button>
                                    <p>Not registered?
                                        <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
                                    </p>
                                </div>
                            </div>
                        </form>

                    </div>

                </dialog >
            </div >
        </>
    )
}

export default Login  // Renamed to PascalCase
