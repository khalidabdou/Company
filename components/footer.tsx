
import { site ,navigation} from "../infos"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {


    return (
        <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900">

            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center sm:mb-0">
                    <Image
                        src="/favicon.ico"
                        className=""
                        alt="Flowbite Logo"
                        width={50}
                        height={50}
                    />
                    <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                        {site.title}
                    </span>
                </a>

        
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    {navigation.map((nav, e) => {
                        return <li key={e}>
                            <a href={nav.href} className="mr-4 hover:underline md:mr-6 ">
                                {nav.name}
                            </a>
                        </li>
                    })}



                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022{" "}

                <Link href="" className="hover:underline">
                    {site.title}
                </Link>
                . All Rights Reserved.
            </span>
        </footer>


    )
}