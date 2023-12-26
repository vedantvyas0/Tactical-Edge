import Input from "../../UI/Input/Input";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import Styles from "./SignIn.module.css";

export default function SignIn() {
    return (
        <>
            <div className={Styles.signInForm}>
                <h1 className="my-5">Sign in</h1>
                <div className={`flex flex-col gap-y-5`}>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <label className={Styles.checkbox}>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <SubmitButton title="Login" />
                </div>
            </div>
        </>
    );
}
