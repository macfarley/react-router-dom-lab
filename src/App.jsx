import { Route } from "react-router";
import MailboxDetails from "./components/details/mailboxDetails.jsx";
import MailboxForm from "./components/form/mailboxForm.jsx";
import MailboxList from "./components/list/mailboxList.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import { useState } from "react";

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

const App = () => {


  const addMailbox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      size: formData.size,
    };
    setMailboxes((prev) => [...prev, newMailbox]);
    
  }

  return (
    <>
      <NavBar /> //always shown
      <Route path="/" element={<h1>Post Office</h1>} /> //landing page
      <Route path="/mailboxes" //list of mailboxes
        element={<MailboxList 
          mailboxes={mailboxes}
           />} />
      <Route path="/new" //form to create a new mailbox
        element={<MailboxForm
          mailboxes={mailboxes}
          onAddMailbox={addMailbox}
      />} />     
      <Route 
        path="/details" //view one mailbox
        element={<MailboxDetails />} />

    </>
  );
};

export default App;
