import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, upError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <loading></loading>
    }

    if (error || gError || upError) {
        signInError = <p className='text-red-500'> {error?.message || gError?.message || upError?.message} </p>
    }

    if (user || gUser) {
        console.log(user, gUser);
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/');
    };
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body text-center">

                        <h2 className='text-4xl my-10'>Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>



                            {/* Name for this code  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="your name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Name Is Required"
                                        },

                                    })}
                                />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>

                            {/* email for this code  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email Is Required"
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Provider Valide Email'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pettern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>

                            {/* password for this code  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "password Is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must Be six crusteres user for this.'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                    {errors.password?.type === 'pettern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {signInError}
                            <input type="submit" value="Sign Up" className='btn w-full max-w-xs' />
                        </form>
                        <p>Already Have a Account <Link className='text-secondary' to="/login">Pleases Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline"><img className='w-16' src='https://i.ibb.co/SPnsmbW/goole-logo.png'  alt='Google logo' />Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;