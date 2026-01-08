import React from 'react'

const Card = ({title,features,price1,price2}) => {
  return (
      <div className="border border-black rounded w-3/4 ml-4 mr-4 md:w-1/2 lg:w-1/3 md:mx-auto my-4 flex flex-col items-center gap-2">
        <p className="text-lg md:text-xl lg:text-2xl text-nowrap px-2 font-semibold">{title}</p>
        {features.map((feature,index) =>
          <p key={index} className="font-medium">{feature}</p>
        )}
        <div className="flex justify-center gap-2 bg-yellow-400 w-full">
          <p className="line-through">{price1}</p>
          <p className="font-bold">{price2}</p>
        </div>
      </div>
    
  )
}

export default Card