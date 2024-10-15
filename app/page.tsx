import Image from "next/image";
import login from "./images/desktop-illustration-login.webp"
import envelope from "./images/envelope-svgrepo-com.svg"
import google from "./images/google-icon-logo-svgrepo-com.svg"
import facebook from "./images/Facebook-f_Logo-Blue-Logo.wine.svg"
import apple from "./images/apple-logo-svgrepo-com.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden py-8">
      <div className="grid grid-cols-2">
        <Image src={login} alt="Login image" className="h-screen" />
        <div className="flex flex-col gap-4 text-center w-full px-32">
          <h1 className="text-4xl font-bold">Log in to continue your learning journey</h1>
          <form>
            <input type="text" name="" id="" placeholder="Name" className="p-6 border border-black w-full font-bold placeholder-black" />
            <input type="text" name="" id="" placeholder="Phone" className="p-6 border border-black w-full font-bold placeholder-black" />
            <button className="my-8 bg-violet-600 p-4 w-full text-center text-white font-bold text-2xl"><Image alt="Email" className="w-8 h-8 inline mr-2" src={envelope} />Continue with email</button>
            <div className="flex gap-4 items-center flex-nowrap">
              <div className="border border-b-gray-400 flex-grow"></div>
              <div className="text-gray-400">Other log in options</div>
              <div className="border border-b-gray-400 flex-grow"></div>
            </div>
            <div className="flex justify-center gap-4 my-8">
              <button className="w-20 h-20 p-4 flex items-center border border-black">
                <Image src={google} alt="Google logo" />
              </button>
              <button className="w-20 h-20 p-4 flex items-center border border-black">
                <Image src={facebook} alt="Facebook logo" className="w-20 h-20" />
              </button>
              <button className="w-20 h-20 p-4 flex items-center border border-black">
                <Image src={apple} alt="Apple logo" />
              </button>
            </div>
            <div className="bg-gray-50 w-full">
                <p className="text-2xl p-4">Don{"'"}t have an account? <Link href={'/signup'} className="text-violet-600 font-bold underline">Sign up</Link> </p>
                <p className="border border-b-gray-200"></p>
                <p className="text-2xl p-4"><a className="text-violet-600 font-bold underline">Log in with your organization</a> </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
