import React from 'react';
import { useForm } from 'react-hook-form';

const ProfessionDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className='text-2xl'>Profession Details</h1>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='my-2'>Employer Full Name*</h1>
                    <input {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="Frist Name" class="input w-full max-w-xs input-bordered" />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Last Name" class="input w-full max-w-xs input-bordered" />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" class="input w-full max-w-xs input-bordered my-2" />

                    <div class="divider"></div>

                    <h1 className='my-2'>Employer Id*</h1>
                    <input {...register("employer")} type="text" placeholder="Employer Id" class="input w-full max-w-xs input-bordered" />

                    <input {...register("other")} type="text" placeholder="Other" class="input w-full max-w-xs input-bordered" />
                    <input {...register("zeep")} type="text" placeholder="zeep code" class="input w-full max-w-xs input-bordered" />


                    <input type="date" {...register("date")} class="input w-full max-w-xs input-bordered my-2" />

                    <div class="divider"></div>

                    <h1 className='my-2'>Nationality*</h1>
                    <select class="input w-full max-w-xs input-bordered" {...register("Title", { required: true })}>
                        <option>select</option>
                        <option value="Mr">Bangladesh</option>
                        <option value="Mrs">India</option>
                        <option value="Miss">pakistan</option>
                        <option value="Dr">Japan</option>
                        <option value="br">Pinland</option>
                    </select>

                    <h1 className='my-2'>Marital Status*</h1>
                    <select class="input w-full max-w-xs input-bordered" {...register("Title", { required: true })}>
                        <option>select</option>
                        <option value="Mr">Single</option>
                        <option value="Mrs">Marride</option>
                       
                    </select>


                    <button class="btn btn-outline btn-primary"><input type="submit" /></button>

                </form>

            </div>
        </div>
    );
};

export default ProfessionDetails;