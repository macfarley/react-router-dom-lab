import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
    const { id } = useParams();
    const mailbox = mailboxes.find((box) => box._id === parseInt(id));

    if (!mailbox) {
        return <p>Mailbox not found!</p>;
    }

    return (
        <div className="mail-box">
            <p>P.O. Box #{mailbox._id}</p>
            <p>
                <strong>Owner:</strong> {mailbox.boxOwner}
            </p>
            <p>
                <strong>Size:</strong> {mailbox.size}
            </p>
        </div>
    );
};

export default MailboxDetails;
