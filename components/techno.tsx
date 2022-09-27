


const technos = [
    {
        name: "Android",
        icon: "https://img.icons8.com/plasticine/344/android-os.png",
        color: ""

    },
    {
        name: "Kotlin",
        icon: "https://img.icons8.com/ios-filled/344/kotlin.png",
        color: ""

    },
    {
        name: "React js",
        icon: "https://img.icons8.com/officel/344/react.png",
        color: ""

    },
    {
        name: "Flutter",
        icon: "https://img.icons8.com/fluency/452/flutter.png",
        color: ""

    },
    {
        name: "node js",
        icon: "https://img.icons8.com/fluency/344/node-js.png",
        color: ""

    },
    {
        name: "Wordpress",
        icon: "https://img.icons8.com/fluency/344/wordpress.png",
        color: ""

    },
    {
        name: "Blogger",
        icon: "https://img.icons8.com/color/344/blogger.png",
        color: ""

    },

]

export default function techno() {



    return (
        <div className="lg:text-center m-8">

            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Technologies We Using
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We use the latest and most advanced web development technologies to create feature-rich, scalable, and secure web applications
            </p>


            <div className="flex flex-wrap w-full justify-center text-center my-24">
                {technos.map((t, e) => {
                    return <img
                        key={e}
                        className="p-2 w-16 h-16 rounded-full contrast-200  ring-2 ring-indigo-300 dark:ring-indigo-500 object-cover m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        src={t.icon}
                        alt="Kotlin" />
                })}
            </div>


        </div>

    )

}