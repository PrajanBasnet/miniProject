import GenerateCheckBox from './GenderCheckBox.jsx'

const Signup = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                    <h1 className="text-3xl font-semibold text-center text-gray-200">
                        Sign Up <span className="text-amber-400">IChat</span>
                    </h1>
                    <form >
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Full Name
                                </span>
                            </label>
                            <input type="text" placeholder="Sajan Dost"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    UserName
                                </span>
                            </label>
                            <input type="text" placeholder="saujanKumarXXX"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Password
                                </span>
                            </label>
                            <input type="password" placeholder="Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Conform Password
                                </span>
                            </label>
                            <input type="password" placeholder="Conform Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                    
                    <GenerateCheckBox></GenerateCheckBox>
                        <a href="" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                        Already Have an Account?
                    </a>

                        <div>
                            <button class="btn  btn-warning mt-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

/*
const Signup = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                    <h1 className="text-3xl font-semibold text-center text-gray-200">
                        Sign Up <span className="text-amber-400">IChat</span>
                    </h1>
                    <form >
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Full Name
                                </span>
                            </label>
                            <input type="text" placeholder="Sajan Dost"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    UserName
                                </span>
                            </label>
                            <input type="text" placeholder="saujanKumarXXX"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Password
                                </span>
                            </label>
                            <input type="password" placeholder="Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Conform Password
                                </span>
                            </label>
                            <input type="password" placeholder="Conform Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                    
                    <GenerateCheckBox></GenerateCheckBox>
                        <a href="" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                        Already Have an Account?
                    </a>

                        <div>
                            <button class="btn  btn-warning mt-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
*/
export default Signup;