import React from 'react'

const Owner = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Kung - Group C - 19</h1>
      <img 
      src="public/pickled-cat-stuffs.webp" 
      alt=""
      className="border-4 border-gray-300 shadow-md mb-4" />
      <p className="text-gray-600 text-lg font-semibold mb-2">Short Biography</p>
      <p className="text-gray-700 leading-relaxed">Hi, I'm Piyaphon Waharak, the owner of this website.
I have a passion for coding and love building new projects.
My goal is to become a skilled Full Stack Developer.
I believe in continuous learning, innovation, and problem-solving.
Thank you for visiting, and I hope you enjoy your experience!</p>
    </div>
  )
}

export default Owner