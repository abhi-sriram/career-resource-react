import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const history = useHistory()
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const signup = async(email,password)=> {
    setError('')
    setLoading(true)
    await auth.createUserWithEmailAndPassword(email,password).then((user)=>{
      user.user.sendEmailVerification()
      setLoading(false)

      history.push('/email verification')

    }).catch((er)=>{
      setError(er.message)
      setError('')
      setLoading(false)
    })
    
  }

  const login = async(email,password)=>{
    setError('')
    setLoading(true)
    await auth.signInWithEmailAndPassword(email,password).then((user)=>{
      setLoading(false)
      if(user.emailVerified){
        history.push('/')
      }else{
        history.push('/email verification')
      }

    }).catch((er)=>{
      setError(er.message)
      setError('')
      setLoading(false)
    })

  }

  const logout = async()=>{
    await auth.signOut()
    history.push('/login')
  }

  const resetPassword = async(email)=>{
    setLoading(true)
    await auth.sendPasswordResetEmail(email).then(()=>{
      setLoading(false)
      setError('Sent Reset Password')
      setError('')
    }).catch((er)=>{
      setLoading(false)
      setError(er.message)
      setError('')
    })
  }

  const values = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    resetPassword,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user);
        if(user.emailVerified){
          history.push('/')
        }else{
          history.push('/email verification')
        }
        
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={values}>
      { children}
    </AuthContext.Provider>
  );
}
