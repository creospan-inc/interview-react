import { UserDisplayComponent } from "./types";
import { create_user } from "./service";

const UserDisplay: UserDisplayComponent = (user) => {
    const onClick = () => {
        // imagine in a magic land this calls the server and refreshes the user session
        const id = create_user({
            name: 'John Smith',
            type: 'regular',
            email: 'john@doe.com'
        });
    };

    if (user.type === 'admin' || user.type === 'regular' && user.name && user.email) {
        return <div>Hello {user.name} ({user.email})!</div>;
    } else {
        return <div onClick={onClick}>Register Now!</div>;
    }
};

export default UserDisplay;
