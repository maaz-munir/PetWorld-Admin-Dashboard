import Navbar from "./Navbar"
// import VerifyBreeder from "./VerifyBreeder"
// import Dashboard from "./Dashboard"
// import { Route, Routes} from "react-router-dom"

const  HomePage = () => {
  return (
        <div className="flex h-screen w-screen">
            <Navbar /> 
            <div className="flex flex-col items-center justify-center w-full bg-yellow-100">
                <h1 className="text-center text-amber-900 font-medium text-5xl">
                    Welcome to the Home Page
                </h1>
            </div>
        </div>
        
    )
}

export default HomePage