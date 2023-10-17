import { Outlet } from "react-router-dom"
import Header from "../component/Header"


const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="bg-slate-300 pt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout