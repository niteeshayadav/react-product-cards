import React from 'react'
import Card from './Card'

const Cardbox = () => {
  return (
    <>
    <h1 className="font-bold text-center text-lg md:text-2xl font-serif mt-4">Blockbuster Deals on Computer Accessories | Shop Now</h1>
    <div className="
      mx-4
      flex
      flex-col
      md:flex-row
      gap-6
      justify-center
      items-center
    ">
    <Card title="Logitech MX Master" features={["800 DPI","5 Programmable Buttons"]} price1="12,499" price2="8,999"/>
    <Card title="Apple Pencil (2nd gen)" features={["Intuitive Touch Surface","Designed for Ipad Pro"]} price1="11,900" price2="9,199" />
    <Card title="Zebronics" features={["Intuitive Touch Surface","Designed for Ipad Pro"]} price1="1,599" price2="899" />
    <Card title="Potronics" features={["Wireless Mouse 2.4 GHz","Optical Orientation"]} price1="599" price2="278"/>
    </div>
    </>
  )
}

export default Cardbox