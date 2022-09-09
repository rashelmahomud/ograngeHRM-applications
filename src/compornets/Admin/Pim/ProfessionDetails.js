import React from 'react';
import { useForm } from 'react-hook-form';

const ProfessionDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className='text-2xl'>Profession Details</h1>
            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='my-2'>Employer Full Name*</h1>
                    <input {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="Frist Name" className="input w-full max-w-xs input-bordered" />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Last Name" className="input w-full max-w-xs input-bordered" />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" className="input w-full max-w-xs input-bordered my-2" />

                    <div className="divider"></div>

                    <h1 className='my-2'>Employer Id*</h1>
                    <input {...register("employer")} type="text" placeholder="Employer Id" className="input w-full max-w-xs input-bordered" />

                    <input {...register("other")} type="text" placeholder="Other" className="input w-full max-w-xs input-bordered" />
                    <input {...register("zeep")} type="text" placeholder="zeep code" className="input w-full max-w-xs input-bordered" />


                    <input type="date" {...register("date")} className="input w-full max-w-xs input-bordered my-2" />

                    <div className="divider"></div>

                    <h1 className='my-2'>Nationality*</h1>
                    <select className="input w-full max-w-xs input-bordered" {...register("Title", { required: true })}>
                        <option>select</option>
                        <option value="Mr">Bangladesh</option>
                        <option value="Mrs">India</option>
                        <option value="Miss">pakistan</option>
                        <option value="Dr">Japan</option>
                        <option value="br">Pinland</option>
                    </select>

                    <h1 className='my-2'>Marital Status*</h1>
                    <select className="input w-full max-w-xs input-bordered" {...register("Title", { required: true })}>
                        <option>select</option>
                        <option value="Mr">Single</option>
                        <option value="Mrs">Marride</option>
                       
                    </select>


                    <button className="btn btn-outline btn-primary"><input type="submit" /></button>

                </form>

            </div>
        </div>
    );
};

export default ProfessionDetails;