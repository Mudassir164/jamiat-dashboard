import "./App.css";
import Header from "./components/header";
// import MainScreenBody from "./Screen/components/MainScreenBody";
import MainScreen from "./Screen/Main Screen/mainScreen";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import NotesScreen from "../component/Screen/Notes Screen/NotesScreen";
import EbookScren from "../component/Screen/EbookScreen/EbookScren";
import NotesPreviewScreen from "../component/Screen/Notes Preview Screen/NotesPreviewScreen";
import LoginScreen from "../component/Screen/LogInScreen/LoginScreen";

import DashBoardScreen from "./Screen/DashBoardScreen/DashBoardScreen";
// import MainScreen from "./Screen/mainScreen";

function App() {
  // return (
  //   <div className="he">
  //     <Header />
  //     <MainScreenBody />
  //   </div>
  // );
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/DashBoardScreen" element={<DashBoardScreen />} />
        <Route path="/MainScreen" element={<MainScreen />} />

        <Route path="/notes" element={<NotesScreen />} />
        <Route path="/E-book" element={<EbookScren />} />
        <Route path="/NotesPreviewScreen" element={<NotesPreviewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
