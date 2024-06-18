
const siteMapData = [
  {
    section: 'Site Map',
    links: ['Homepage', 'Product', 'Services', 'Technology', 'About Us', 'Contact Us']
  },
  {
    section: 'Services',
    links: ['Service Lineup 1', 'Service Lineup 2', 'Service Lineup 3', 'Service Lineup 4', 'Service Lineup 5', 'Service Lineup 6']
  },
  {
    section: 'Product',
    links: ['Product Lineup 1', 'Product Lineup 2', 'Product Lineup 3', 'Product Lineup 4', 'Product Lineup 5', 'Product Lineup 6']
  },
  {
    section: 'Help & Support',
    links: ['Live Chat', 'Email Support', 'Product Refund', 'Submit Feedback', 'Help Ticket', 'Call Center']
  },
  {
    section: 'Legal',
    links: ['Privacy Policy', 'HIPAA Notice', 'Data Policy', 'AI Privacy', 'Terms & Conditions', "Lawyer's Corner"]
  },
  {
    section: 'Pricing',
    links: ['Pricing Tier 1', 'Pricing Tier 2', 'Pricing Tier 3', 'Pricing Tier 4', 'Pricing Tier 5', 'Pricing Tier 6']
  }
];


export default function Footer() {
  return (
    <footer className=' px-28 pt-28 pb-5 '>

      <div className=" grid grid-cols-6 gap-4 w-full mx-auto ">

        {siteMapData.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2">{section.section}</h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx} className="">{link}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="my-10 h-[1px] bg-gray-600/30"></div>

      <p className='text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>

    </footer>
  )
}
