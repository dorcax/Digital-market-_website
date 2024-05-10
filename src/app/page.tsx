// import React from 'react'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants ,Button} from "@/components/ui/button"

import { ArrowDownToLine,CheckCircle, Leaf } from "lucide-react"
import Link from "next/link"
const perks=[
  {
    name:"instant delivery",
    icon:ArrowDownToLine,
    description:"Get your assest delivered to your email in seconds and downlooad them right away"

  },
  {
    name:"Guaranteed quality",
    icon:CheckCircle,
    description:"Every assets on our pplatform is verified by our team to ensure our very high standards.Not happy?we offer a 30-day refund guaranteed ."

  },
  {
    name:"for thhe planet",
    icon:Leaf,
    description:" we've pledge 1% of sales to the preservation and restoration of the natural environment "

  }
]
const Home = () => {
  return (
    <>
   <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
<h1 className="md:text-4xl  font-bold text-gray-900 tracking-tight sm:text-6xl ">your market place for high quality <span className="text-blue-600">digital assets</span>.

</h1>
<p className="mt-6 text-lg max-w-prose text-muted-foreground">welcome to DigitalStore. Every assets on our platform is verified by our team to ensure our highest quality standards</p>
<div className="flex flex-col sm:flex-row gap-4 mt-6">
<Link href="/products" className={buttonVariants()}>browse trending</Link>
<Button variant="ghost">our quality promise &rarr;</Button>
</div>
    </div>

{/* todo :list products */}



   </MaxWidthWrapper>
   <section className="border-t border-gray-200 bg-gray-50">
     <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
     {perks.map((perk)=>(
  <div key={perk.name} className="text-center  md:flex md:items-start  md:text-left lg:block lg:text-center ">
 
    <div className="md:flex-shrink-0 flex justify-center">
   
      <div className="h-10 w-10 mt-4 flex rounded-full bg-blue-400 justify-center items-center">
   
        {<perk.icon className="w-1/3 h-1/3"></perk.icon>}
      

      </div>
    </div>
    <div className="mt-6 capitalize md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
   
      <h3 className="text-base font-medimdum text-gray-900">{perk.name}</h3>
      
      <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
    </div>
  </div>
))}
      </div>
     </MaxWidthWrapper>
   </section>
   </>
  )
}

export default Home