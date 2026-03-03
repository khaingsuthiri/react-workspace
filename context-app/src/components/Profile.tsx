import { useUser } from "../contexts/UserContextReducer";

export default function Profile() {
  // const user = useContext(UserContext);
  const { user, dispatch } = useUser();
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <button
        onClick={() =>
          dispatch({ type: "handleName", payload: "Pont Pont Lay" })
        }
      >
        Update Name
      </button>
      <button onClick={() => dispatch({ type: "handleAge", payload: "17" })}>
        Update Age
      </button>
    </div>
  );
}
