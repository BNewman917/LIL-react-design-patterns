import { ResourceLoader } from "./ResourceLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
    return (
        <>
            <ResourceLoader resourceUrl="/users/2345" resourceName="product">
                <UserInfo />
            </ResourceLoader>
        </>
    );
}

export default App;
