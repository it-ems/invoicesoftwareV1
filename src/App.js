import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, CallToAction, Home, ScrollToTop, SuggestionBox } from "./pages"
import Invoice from "./components/App"
import AuthContext from "./context/auth"
import { Header, Footer, Error } from "./pages"
import ThankYou from "./pages/ThankYou"
import Cancelled from "./pages/Cancelled"

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {user ? (
                <Invoice />
              ) : (
                <React.Fragment>
                  <Home />
                  <CallToAction />
                  <Footer />
                </React.Fragment>
              )}
            </React.Fragment>
          }
        ></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
