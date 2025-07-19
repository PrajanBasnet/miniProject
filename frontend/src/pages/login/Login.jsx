import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-yellow-400"> IChat</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-3">
                            <span className="text-amber-400 label-text">UserName</span>
                        </label>
                        <input type="text" placeholder="Enter UserName"
                            className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-3">
                            <span className="text-amber-400 label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="w-full input input-bordered h-10" />
                    </div>
                    <Link to="/signup" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                        {"Don't"} Have an account?
                    </Link>
                    <div>
                        <button class="btn  btn-warning mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


/* 
const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-yellow-400"> IChat</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-3">
                            <span className="text-amber-400 label-text">UserName</span>
                        </label>
                        <input type="text" placeholder="Enter UserName"
                            className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-3">
                            <span className="text-amber-400 label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="w-full input input-bordered h-10" />
                    </div>
                    <a href="" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                        Don't Have an account?
                    </a>
                    <div>
                        <button class="btn  btn-warning mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
*/
export default Login;