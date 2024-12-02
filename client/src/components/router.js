import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CreateContact from "./CreateContact";
import ViewContacts from "./ViewContacts";
import RegistrationForm from "./Register";
import LoginForm from "./Login";
import EditContact from "./EditContact";

const AppRouter = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <main className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-contact" element={<CreateContact />} />
            <Route path="/view-contacts" element={<ViewContacts />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/edit-contact/:contact-id" element={<EditContact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;
