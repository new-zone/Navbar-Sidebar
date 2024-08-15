import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import MainMenu from "../pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MailMasuk, MailKeluar } from "../pages/Mail";
import { EditMasuk, EditKeluar } from "../pages/Edit";
import LoginActivity from "../pages/Login";

function SidebarDesk() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<MainMenu />} />
        <Route path="/login" element={<LoginActivity />} />
        <Route path="/mail/suratmasuk" element={<MailMasuk />} />
        <Route path="/mail/suratkeluar" element={<MailKeluar />} />
        <Route path="/edit/suratmasuk" element={<EditMasuk />} />
        <Route path="/edit/suratkeluar" element={<EditKeluar />} />
      </Routes>
    </Router>
  );
}

export default SidebarDesk;