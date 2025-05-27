import MailboxDetails from "./components/details/mailboxDetails.jsx";
import MailboxForm from "./components/form/mailboxForm.jsx";
import MailboxList from "./components/list/mailboxList.jsx";
import NavBar from "./components/navbar/navbar.jsx";


const App = () => {
  return (
    <>
      <NavBar />
      <MailboxList />
      <MailboxDetails />
      <MailboxForm />
    </>
  );
};

export default App;
