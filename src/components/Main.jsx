import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-center" src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-grey-800">Hi I&#39;m Heber</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-grey-800">
                        I&#39;m a<TypeAnimation
                            sequence={
                                [
                                    'Full Stack Developer',
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Front End Enthusiast',
                                    2000,
                                    'Eternal Student',
                                    2000
                                ]
                            }
                            cursor="true"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: "5px" }}
                        />
                    </h2>
                    <div className="flex justify-evenly  pt-6 max-w-[200px] w-full">
                        <a href="https://github.com/HeberMartinezLopez"><FaGithub className="cursor-pointer" size={20} /></a>
                        <a href=""><FaLinkedin className="cursor-pointer" size={20}/></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;