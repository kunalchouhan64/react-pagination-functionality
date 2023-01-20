import React from 'react'

const Header = () => {
    return (
        <>
            <header className="text-white bg-black body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <video className='h-12' src="https://cdn.dribbble.com/users/14814/screenshots/16535574/media/e3e333578f4f278e0a6e6b187663926e.mp4" alt="" />
                        <span className="ml-3 text-xl">React Pagination Functionality</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto space-x-7 flex flex-wrap items-center text-xl justify-center">
                        <a className="mr-5 hover:text-white">Home</a>
                        <a href='https://portfolio-website-kunal.netlify.app/' target='_blank' className="mr-5 hover:text-white">PortFolio Website</a>
                        <a href='https://github.com/kunalchouhan64' target='_blank' className="mr-5 hover:text-white">GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/kunal-chouhan/' target='_blank' className="mr-5 hover:text-white">LinkedId Profile</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header