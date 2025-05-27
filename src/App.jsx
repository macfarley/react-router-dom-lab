import { Routes, Route } from "react-router-dom";
import MailboxDetails from "./components/details/mailboxDetails.jsx";
import MailboxForm from "./components/form/mailboxForm.jsx";
import MailboxList from "./components/list/mailboxList.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxOwner: "John Lennon",
      size: "Small",
    },
    {
      _id: 2,
      boxOwner: "Paul McCartney",
      size: "Medium",
    },
    {
      _id: 3,
      boxOwner: "George Harrison",
      size: "Large",
    },
    {
      _id: 4,
      boxOwner: "Ringo Starr",
      size: "Small",
    },
  ]);
  const navigate = useNavigate();

  const addMailbox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      size: formData.size,
    };
    setMailboxes((prev) => [...prev, newMailbox]);
    navigate("/mailboxes");
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route
          path="/mailboxes"
          element={<MailboxList 
            mailboxes={mailboxes} />}
        />
        <Route
          path="/new"
          element={<MailboxForm 
            addMailbox={addMailbox}
            mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:id"
          element={<MailboxDetails 
            mailboxes={mailboxes} />}
        />
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
