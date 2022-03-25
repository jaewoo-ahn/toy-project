import "firebase/firestore";
import "firebase/auth";
import {signInWithGoogle} from "../../fBase";
import {auth} from "../../fBase";
// import {firebase} from "../../fBase";

function GoogleSignin(props) {
  // console.log(firebase);
  auth.onAuthStateChanged((user) => {
    if (user !== null) {
      console.log("로그인되었습니다.");
    }
  });

  return (
    <div>
      <button onClick={signInWithGoogle}>로그인</button>
    </div>
  );
}

export default GoogleSignin;
