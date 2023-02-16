import { auth } from '../../api/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import * as actions from '../Store/module/user';
import { useRouter } from 'next/router';
const SignOutGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSingout = async () => {
    await signOut(auth).then(() => {
      sessionStorage.clear();

      console.log(dispatch(actions.LOGOUTCHECK()));
      router.push('/');
    });
  };
  return <button onClick={handleSingout}>logOut</button>;
};

export default SignOutGoogle;
