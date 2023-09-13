import './styles/Reset.css';
import AppStyle from './styles/App.module.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";

import Home from "./pages/home/Home";
import Photos from "./pages/photos/Photos";
import PublicationsPage from "./pages/publications/PublicationsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
// import ErrorPage from "./utils/ErrorPage";
import ContactLayout from "./pages/contacts/ContactLayout";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: "/photos",
//         element: <Photos />,
//         errorElement: <ErrorPage />,
//     },
// ]);
// <Router>
//     <Navbar />
//     <main>
//         <Routes routes={routes} />
//     </main>
// </Router>
function App() {
  return (
    //<HashRouter/>
    <BrowserRouter>
        <Navbar/>
        <div className={AppStyle.App}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/publications" element={<PublicationsPage />} />
                <Route path="/photos" element={<Photos />} />

                <Route path="/contacts">
                    <Route index element={<ContactsPage/>} />
                    <Route path=":test" element={<ContactLayout/>} />
                </Route>
                {/*<Route path="*" element={<ErrorPage />}  errorElement={<ErrorPage/>} />/!*??/*!/*/}
            </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;