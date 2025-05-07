import { Outlet } from "react-router"

function App() {
  return (
    <>

      <h1 className="text-3xl font-bold underline">Navbar</h1>
      {/* PlaceHolder component */}
      <Outlet />
      <button className="btn btn-primary">Content</button>
      <h1 className="text-3xl font-bold underline">Footer</h1>
      

    </>
  )
}

export default App
