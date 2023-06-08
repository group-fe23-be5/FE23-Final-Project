import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Article from "./pages/Article"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Course  from "./pages/course/Course"
import OfflineClass from "./pages/OfflineClass/OfflineClass"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/article" element={<Article />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/offlineClass" element={<OfflineClass />}/>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
