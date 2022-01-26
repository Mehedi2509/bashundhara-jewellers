import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const createNewUser = (email, password, displayName, imgUrl, history) => {
        createUserWithEmailAndPassword(auth, email, password)
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                // saveUserData(email, name, 'POST');
                setAuthError('');
                const newUser = { email, displayName: displayName, photoURl: imgUrl };
                setUser(newUser);
                updateProfile(auth.currentUser, { displayName: displayName, photoURL: imgUrl })
                    .then(() => {

                    }).catch(error => {

                    });
                // Save user data

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                // saveUserData(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        isLoading,
        authError,
        admin,
        setUser,
        createNewUser,
        loginUser,
        signInWithGoogle,
        logOut,

    };
}

export default useFirebase;