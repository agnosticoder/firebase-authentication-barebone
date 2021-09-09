const firebaseConfig = {
    apiKey: "AIzaSyB_8piWWHZGPsoyl_dFfKclljdlKYorE8w",
    authDomain: "fir-ui-2141d.firebaseapp.com",
    projectId: "fir-ui-2141d",
    storageBucket: "fir-ui-2141d.appspot.com",
    messagingSenderId: "821322904499",
    appId: "1:821322904499:web:3a89b1709a8ed78542d1c6"
  };


firebase.initializeApp(firebaseConfig);


//Get Elements
const textEmail = document.querySelector("#email");
const textPassword = document.querySelector("#password");
const btnLogin = document.querySelector('.btn-login');
const btnSignup = document.querySelector('.btn-signup');
const btnLogout = document.querySelector('.btn-logout');


btnLogin.addEventListener('click', (e) => {
    const email = textEmail.value;
    const password = textPassword.value;

    console.log(email, password);
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password).
    catch(e => console.log(e));
})


btnSignup.addEventListener('click', (e) => {

    const email = textEmail.value;
    const password = textPassword.value;


    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password).
    catch(e => console.log(e));
})

btnLogout.addEventListener('click', (e) => {
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log(user);
        btnLogout.classList.remove('hide');
        btnLogin.classList.add("hide");
        btnSignup.classList.add("hide");
    }else{
        console.log('User not logged In!');
        btnLogin.classList.remove("hide");
        btnSignup.classList.remove("hide");
        btnLogout.classList.add("hide");
    }
})