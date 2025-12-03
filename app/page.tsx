import Image from "next/image";
import { FaFacebookF, FaGoogle, FaTiktok, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <h1>POS SYSTEM</h1>
        <div className="bg-white">
          <div><p>Sign in</p></div>
          <div><p>Sign up</p></div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

        </div> 
      </main> */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">e</span>POS
            </div>
            <div className="py-10 ">
              <h2 className="text-2xl font-bold text-green-500 mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />

                </a>
                <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1">
                  <FaTiktok className="text-sm" />
                </a>
              </div> {/* Social login section*/}
              <p className="text-gray-400 my-3">or user your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                  <FaRegEnvelope className="text-gray-400" />
                  <input type="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1 ml-2" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                  <MdLockOutline className="text-gray-400" />
                  <input type="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1 ml-2" />
                </div>
                {/* Remember me and forgot password */}
                <div className="flex w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs ml-auto text-green-500">Forgot Password?</a>
                </div>
                <div>
                  <button className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 font-bold hover:bg-green-500 hover:text-white hover:scale-105 transition-transform">Sign In</button>
                </div>

              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Fill up personal information and start your journey with us.</p>
            <button className="border-2 border-white text-white rounded-full px-10 py-2 font-bold mt-2 hover:bg-white hover:text-green-500 hover:scale-105 transition-transform">Sign Up</button>
          </div>
        </div>
      </main>

    </div>
  );
}
