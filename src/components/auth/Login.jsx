import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { AiOutlineLogin } from 'react-icons/ai';
import InputField from "../shared/inputField";


const LogIn =  () => {
    
    const navigate = useNavigate();
    const[loader, setLoader] = useState(false); 
    
    const {
        register,
        handleSubmit,
        formState:{errors},

    } = useForm({
        mode: "onTouched",
    })
            const loginHandler = async (data) => {
                console.log("Login Click")
            }
    return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
         <form
              onSubmit={handleSubmit(loginHandler)}
              className="sm:w-[450px] w-[360px] shadow-2xl py-8 sm:px-8 px-4 rounded-md"
>
           <div className="flex flex-col items-center justify-center space-y-4">
            <AiOutlineLogin className="text-slate-800 text-5xl"/>
                 <h1 className="text-slate-800 text-cneter font-montserrat lg:text-3xl text-2xl font-bold">
                    Login Here
                 </h1>
           </div>
    
        <hr className="mt-2 mb-5 text-black"/>
        
        <div className="flex flex-col gap-3">
            <InputField
                label="UserName"
                required
                id="username"
                type="text"
                message="*UserName is required"
                placeholder="Enter your username"
                register={register}
                errors={errors}
            />
            <InputField
                label="Password"
                required
                id="password"
                type="password"
                message="*Password is required"
                placeholder="Enter your password"
                register={register}
                errors={errors}
            />
        </div>

        <button
                     type="submit"
                     disabled={loader}
                     className="bg-blue-600 flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:bg-blue-700 transition-colors duration-100 rounded-sm my-3"
                   >
                    {loader ? (

                       <> Loading...</>
                    ) : (
                        <>Login</>
                    )}
                     
            
        </button>

        <p className="text-center test-sm text-slte-700 mt-6">
            Don't have an account ?
            <Link className="font-semibold underline hover:text-black" to="/register">
            <span>
                SignUp
            </span>
            </Link>
        </p>
        
         </form>
      
      </div>
    )
}
export default LogIn;