import { AlarmClockCheck, Lightbulb, Pencil, Settings, Star, Zap } from 'lucide-react';
import React from 'react'

const features = [
  {
    icon: <Zap />,
    title: "Lazy Efficient",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: <Lightbulb />,
    title: "Streamlined Process",
    description: "Eget dolor morbi non arcu risus quis. Tincidunt dui ut ornare lectus sit amet est placerat. vestibulum lorem sed risus ultricies."
  },
  {
    icon: <Pencil />,
    title: "Minimum Effort",
    description: "Enim praesent elementum facilisis leo. Diam donec adipiscing tristique risus nec feugiat in fermentum. Non diam phasellus."
  },
  {
    icon: <Star />,
    title: "Accessible For All",
    description: "Vitae tempus quam pellentesque nec nam aliquam sem. Dignissim suspendisse in est ante in nibh mauris cursus. Donec ultricies tincidunt."
  },
  {
    icon: <Settings />,
    title: "Completely Functional",
    description: "Tortor id aliquet lectus proin nibh nisl condimentum. Vulputate mi sit amet mauris. Varius vel pharetra vel turpis nunc."
  },
  {
    icon: <AlarmClockCheck />,
    title: "Slow Updates",
    description: "Nibh praesent tristique magna sit. Fermentum posuere urna nec tincidunt praesent semper feugiat vulputate mi sit amet mauris."
  }
];


const MainFeatures = () => {
  return (
    <div className=' w-fit mx-auto py-28  px-2 ' >
      <div className="eyebrow-text mb-6 mx-auto">
        Our Main Features
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="text-center sub-heading-text mx-auto   ">
          The world's first lazy efficient design system.
        </div>
        <div className=" w-5/6 lg:w-3/6 mx-auto text-center">
          Introducing SlothUI, the design system tailored for entrepreneurs who prefer taking it easy. Say goodbye to lengthy design processes right now!
        </div>

      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-8 ">

        {features.map((item, idx) => {
          return (
            <div key={idx} className='text-center flex flex-col ' >
              <div className="w-fit mx-auto rounded-full text-[#4F46E5] bg-[#d7d5f733] p-4 ">
                {item.icon}
              </div>
              <div className="text-lg font-semibold mt-6 ">
                {item.title}
              </div>
              <div className="font-light mt-2">
                {item.description}
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default MainFeatures