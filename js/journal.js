async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export const validateUser = async () => {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    const hashedUsername = await hashString(username);
    const hashedPassword = await hashString(password);

    const validUsernameHash = '87318cc7f5b45bd2652b045925026f2a6f0abe11c5a9359a2033f4d39de62f63'; 
    const validPasswordHash = '15fd48e025d97a0e434022f1cdb65e4dd4b7020f38036bb4c1c9b43e2cb71db9';

    console.log("MASUK", username, password)
    return  (username && password && hashedUsername === validUsernameHash && hashedPassword === validPasswordHash) 
};