/* This example requires Tailwind CSS v2.0+ */
import { DevicePhoneMobileIcon, CodeBracketIcon, CommandLineIcon, CloudIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'MOBILE APPS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'WEB DEVELOPMENT',
    description: `We build websites and applications using the latest technologies that work
     hard, achieve results, and generate a return on investment.`,
    icon: CommandLineIcon,
  },
  {
    name: 'WEB APPS',
    description: `Digitize your processes and be a click away with our advanced web application solutions,
     Native, embedded or hybrid.`,
    icon: CodeBracketIcon,
  },
  {
    name: 'HOSTING',
    description: `For shared or dedicated hosting, on linux or windows, at Tudiohost, we have the best solution.`,
    icon: CloudIcon,
  },

]

export default function Example() {
  return (
    <div className="bg-white py-12 mt-11 " id='Services'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Design and develop a creative website and android , With proven methodologies and technologies.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
