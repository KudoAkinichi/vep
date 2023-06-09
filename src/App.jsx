import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login/Login.jsx";
import Signup1 from "./components/Login/Signup1/Signup1.jsx";
import Signup2 from "./components/Login/Signup2/Signup2.jsx";
import Signup3 from "./components/Login/Signup3/Signup3.jsx";
import Signup4 from "./components/Login/Signup4/Signup4.jsx";
import Signup5 from "./components/Login/Signup5/Signup5.jsx";
import Successful from "./components/Login/Successful/Successful.jsx";
import Dashboard from "./components/Login/Dashboard/Dashboard.jsx";
import Activity from "./components/Login/Activity/Activity.jsx";
import Activity1 from "./components/Login/Activity1/Activity1.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren([
    <Route key="/" path="/" element={<Login />} />,
    <Route  path="/auth" element={<Signup1 />}/>,
    <Route  path="/auth/1" element={<Signup2 />}/>,
    <Route  path="/auth/2" element={<Signup3 />}/>,
    <Route  path="/auth/3" element={<Signup4 />}/>,
    <Route  path="/auth/4" element={<Signup5 />}/>,
    <Route  path="/auth/5" element={<Successful />}/>,
    <Route  path="/Home" element={<Dashboard />}/>,
    <Route  path="/activity" element={<Activity />}/>,
    <Route  path="/Status" element={<Activity1 />}/>
  ])
);

// Possible method:
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={ <Home/> } />
//         <Route path="about" element={ <About/> } />
//         <Route path="contact" element={ <Contact/> } />
//       </Routes>
//     </div>
//   )
// }


function App() {
  return <RouterProvider router={router} />;
}

export default App;

