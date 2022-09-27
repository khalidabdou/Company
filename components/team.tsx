

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
        label: "Designer",
        img: "https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/272904319_2006132092880987_215475657032410625_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h2NYOmzBqdMAX_bRVWK&_nc_oc=AQnk1XifEd_sZk1UHqvDmoQVBrAsotWwlzWQxkREi-VMyIR7WnSZFcTKI_Vy3alxvuI&_nc_ht=scontent.frak1-1.fna&oh=00_AT8UnsnT16VjB4HPz9PVjstuSzg1vbtVXAp_DaEzoBpzqw&oe=63372651",
        linkding: "",
        github: "",
        facebook: ""
    },
    {
        name: "Oussma Ettamli",
        label: "Software Developer",
        img: "https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg",
        linkding: "",
        github: "",
        facebook: ""
    },
    {
        name: "Ayoub Mentag",
        label: "Java Developer",
        img: "https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg",
        linkding: "",
        github: "",
        facebook: ""
    },
    ,
    {
        name: "Mohmed laarj",
        label: "UI / UX Designer",
        img: "https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg",
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