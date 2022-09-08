import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';





const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();

    // if (loading || gLoading) {
    //     return <Loading></Loading>
    // }

    if (error || gError) {
        signInError = <p className='text-red-500'> {error?.message || gError?.message} </p>
    }

    if (user || gUser) {
        console.log(user, gUser);
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
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

                        <h2 className='text-4xl my-10'>Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>



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
                            <input type="submit" value="login" className='btn w-full max-w-xs' />
                        </form>
                        <p>New To Five Minite School <Link className='text-secondary' to="/signup">Create New Account</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline"><img className='w-16' src='https://i.ibb.co/SPnsmbW/goole-logo.png'  alt='Google logo' />Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;