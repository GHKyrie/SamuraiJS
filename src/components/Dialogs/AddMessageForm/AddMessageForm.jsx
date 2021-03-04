import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLen = 50;
const maxLength = maxLengthCreator(maxLen);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength]}
                       name="newMessageBody"
                       placeholder='Enter your message' />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);