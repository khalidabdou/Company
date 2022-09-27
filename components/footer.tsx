
import { site ,navigation} from "../infos"

export default function Footer() {


    return (
        <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900">

            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png"
                        className="mr-3 h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                        {site.title}
                    </span>
                </a>

                {/* <p className="text-gray-400">
                    Converted Files: 123456
                    </p> */}

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
                <a href="" className="hover:underline">
                    {site.title}
                </a>
                . All Rights Reserved.
            </span>
        </footer>


    )
}