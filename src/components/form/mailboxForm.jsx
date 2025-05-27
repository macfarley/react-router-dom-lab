import { useState } from "react";


const MailboxForm = (props) => {
    const { addMailbox } = props;
//this component is used to create a new mailbox
    const [formData, setFormData] = useState({ boxOwner: "", size: "Small" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addMailbox(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mailbox Owner:
                <input
                    type="text"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
            </label>
            <label>
                Size:
                <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <button type="submit">Create Mailbox</button>
        </form>
    )
}

export default MailboxForm