import { projects } from '../infos'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/banner'

export default function Example() {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {projects.map((callout) => (
                            <div key={callout.name} className="group relative mb-6">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <Image
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                        layout='fill'
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <Link href={callout.href} >
                                        <a target='_blank'>
                                          <span className="absolute inset-0" />
                                        {callout.name}  
                                        </a>
                                        
                                    </Link>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    )
}
