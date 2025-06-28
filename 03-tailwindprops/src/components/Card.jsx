import React from 'react'

function Card({username}) {
  console.log(username);
  
  return (
    <div className="w-72 bg-black rounded-xl border border-gray-600 overflow-hidden shadow-md">
        <img
          src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
          alt="NFT"
          className="w-full h-72 object-cover"
        />
        <div className="bg-black text-white p-3">
          <div className="flex justify-between items-center text-sm font-bold">
            <p>Bored ape nft accidental</p>
            <p>{username}</p>
          </div>
          <div className="flex justify-between text-xs font-mono mt-1">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
</div>
  )
}

export default Card
