import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.ico'
import JAVA from'../assets/java.ico'
import JS from '../assets/JS.png'
import PY from '../assets/py.png'
import FLASK from '../assets/Flask.png'
import MYSQL from '../assets/MySQL.png'
import AWS from '../assets/aws.png'
import REACT from '../assets/react.png'
import SB from '../assets/SB.png'
import NODEJS from '../assets/NodeJS.png'
import MDB from '../assets/mongodb.svg'
import GH from '../assets/GH.png'
import cde from '../assets/programming.png'
import b5 from '../assets/bootstrap.png'

const Skills = () => {
    return (

    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col md-flex-row justify-center w-full h-[100vh]  hover:scale-110 duration-500'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                <p className='py-4'> // These are the technologies I've work with </p>
            </div>
        

            <div className= ' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                <div className='py-3 font-bold '> 
                    <h1 className='text-center'>Languages</h1>
                </div>

                <div className='flex justify-items-center  justify-evenly'>   
                    <div>
                        <img className='w-[2rem] mx-[10px]' src={HTML} alt='HTML icon'/>
                        <p className='text-center'> HTML</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-[10px]' src={CSS} alt='CSS icon'/>
                        <p className='text-center'> CSS</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-[10px]' src={JS} alt='Javascript icon'/>
                        <p className=' text-center'> JAVASCRIPT</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={PY} alt='Python icon'/>
                        <p className='text-center'> Python</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={JAVA} alt='Java icon'/>
                        <p className=' text-center'> Java</p>
                    </div>
                    
                    
                </div> 
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <div>
                    <h1 className='text-center font-bold py-3 '> Frameworks/Libraries </h1>
                </div>
                
                <div className='flex flex-wrap justify-items-center  justify-evenly  grid-cols-3 gap-4 place-items-center'>
                    <div>
                        <img className='w-[2rem] mx-auto' src={FLASK} alt='HTML icon'/>
                        <p className='text-center'> Flask/Jinja2 </p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={SB} alt='SpringBoot  icon'/>
                        <p className='=text-center'> Spring Boot</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-[10px]' src={REACT} alt='React icon'/>
                        <p className=' text-center'> REACT</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-[10px]' src={b5} alt='code icon'/>
                        <p className=' text-center'> Bootstrap5 </p>
                    </div>
                </div>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <h1 className='text-center font-bold py-3 '> Database </h1>
                </div>

                <div className='flex flex-wrap justify-items-center justify-evenly   place-items-center'>
                    <div>
                        <img className='w-[2rem] mx-auto' src={MYSQL} alt='Mysql icon'/>
                        <p className='text-center'> MySql</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={NODEJS} alt='NodeJS icon'/>
                        <p className='text-center'> NodeJS</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={AWS} alt='AWS icon'/>
                        <p className='text-center'> AWS</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={MDB} alt='MongoDB icon'/>
                        <p className='text-center'> MONGODB</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='Mongoose icon'/>
                        <p className='text-center'>Monggoose</p>
                    </div>
                </div>
            </div> 

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                <div>
                    <h1 className='text-center font-bold py-3 '> Tools </h1>
                </div >

                <div className='flex flex-wrap justify-items-center  justify-evenly grid-cols-3 gap-3 place-items-center'>
                    <div>
                        <img className='w-[2rem] mx-auto' src={GH} alt='Git Hub icon'/>
                        <p className='text-center'> GITHUB</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='AJAX icon'/>
                        <p className='text-center'>Ajax</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='Spring Tool Suite icon'/>
                        <p className='text-center'>Spring Tool Suite</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='REST API icon'/>
                        <p className='text-center'>Rest API</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='AWS AMPLI icon'/>
                        <p className='text-center'>AWS amplify</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='JSON icon'/>
                        <p className='text-center'>JSON</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='POSTman icon'/>
                        <p className='text-center'>POSTMAN</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='Socket.io icon'/>
                        <p className='text-center'>Socket.io</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='MysQL icon'/>
                        <p className='text-center'>MySql Workbench</p>
                    </div>
                    <div>
                        <img className='w-[2rem] mx-auto' src={cde} alt='GIT icon'/>
                        <p className='text-center'>GIT</p>
                    </div>
                </div>


            </div>


        </div>
    </div>
    )
}

export default Skills