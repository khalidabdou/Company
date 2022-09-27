import Image from "next/image"

const teams = [
    {
        name: "Abdellah khalid",
        label: "Software Developer",
        img: "https://avatars.githubusercontent.com/u/37934938?u=63f2e7c27905f77aed4ec78e6742381a196070ef&v=4",
        linkding: "",
        github: "",
        facebook: ""
    },
    {
        name: "Nait Ougni Mohamed",
        label: "Manager",
        img:"/avatar.png",
        linkding: "",
        github: "",
        facebook: ""
    },
    {
        name: "Oussma Ettamli",
        label: "Software Developer",
        img: "https://avatars.githubusercontent.com/u/57911825?v=4",
        linkding: "",
        github: "",
        facebook: ""
    },
    {
        name: "Ayoub Mentag",
        label: "Java Developer",
        img: "https://avatars.githubusercontent.com/u/83886033?v=4",
        linkding: "",
        github: "",
        facebook: ""
    },
    ,
    {
        name: "Mohmed laarj",
        label: "UI / UX Designer",
        img: "/avatar.png",
        linkding: "",
        github: "",
        facebook: ""
    },

]

export default function Team() {


    return (<div>
        <section className=" ">
            <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Our Team
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We have a team of the most experienced, certified, and dedicated web developers in who are always ready to go above and beyond to meet your needs.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {teams.map((dev, e) => {
                    return <div key={e} className="text-center m-4">
                        <img
                            src={dev.img}
                            className="rounded-full w-32 mb-4 mx-auto ring-2 ring-indigo-600 p-1"
                            alt="Avatar"
                            
                        />
                        <h5 className="text-xl font-medium leading-tight mb-2">{dev.name}</h5>
                        <p className="text-gray-500">{dev.label}</p>
                    </div>

                })}
            </div>

        </section>

    </div>
    )
}