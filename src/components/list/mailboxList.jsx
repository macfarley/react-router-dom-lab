import { Link } from "react-router";

const MailboxList = (props) => {
  const { mailboxes } = props;
return (
    <section className="mailbox-list">
        {mailboxes.map(mailbox => (
            <div key={mailbox._id} className="mail-box">
                <p>
                    <Link to={`/mailboxes/${mailbox._id}`}>P.O. Box #{mailbox._id}</Link>
                </p>
      
            </div>
        ))}
    </section>
);
}
export default MailboxList