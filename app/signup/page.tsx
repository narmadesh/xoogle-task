import Image from "next/image";
import login from "../images/desktop-illustration-step-1-x2.webp"
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen overflow-hidden py-8">
            <div className="grid grid-cols-2">
                <Image src={login} alt="Login image" className="h-screen" />
                <div className="flex flex-col gap-4 text-center w-full px-32">
                    <h1 className="text-4xl font-bold">Sign up and start learning</h1>
                    <form className="flex flex-col gap-4">
                        <input type="text" name="" id="" placeholder="Full Name" className="p-6 border border-black w-full font-bold placeholder-black" />
                        <input type="text" name="" id="" placeholder="Phone" className="p-6 border border-black w-full font-bold placeholder-black" />
                        <input type="text" name="" id="" placeholder="Password" className="p-6 border border-black w-full font-bold placeholder-black" />
                        <div className="flex gap-4">
                            <div className="h-1 w-10 bg-gray-400"></div>
                            <div className="h-1 w-10 bg-gray-400"></div>
                            <div className="h-1 w-10 bg-gray-400"></div>
                            <div className="h-1 w-10 bg-gray-400"></div>
                        </div>
                        <div className="flex items-center">
                            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 accent-black" />
                            <label className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">Send me special offers, personalized recommendations and learning tips.</label>
                        </div>
                        <button className="my-8 bg-violet-600 p-4 w-full text-center text-white font-bold text-2xl">Sign up</button>
                        <p>By signing you agree to our <a href="" className="underline text-violet-600">Termos of Use</a> and <a href="" className="text-violet-600 underline">Privacy Policy</a></p>
                        <div className="bg-gray-50 w-full">
                            <p className="text-2xl p-4">Already have an account? <Link href={'/'} className="text-violet-600 font-bold underline">Log in</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
