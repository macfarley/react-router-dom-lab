
const MailboxList = (props) => {
  const { mailboxes } = props;
  return (
    <ul>
      {mailboxes.map(mailbox => (
        <li key={mailbox._id}
        className="mail-box">
          <strong>Owner:</strong> {mailbox.boxOwner} - <strong>Size:</strong> {mailbox.size}
        </li>
      ))}
    </ul>
  );
}
export default MailboxList