# JWT Hacking Lab: Lab #1 - Exploiting Weak HMAC Secrets

**Link to Lab:** [1 - Secrets Under the Rug](https://github.com/mxcezl/JWT-SecLabs/tree/main/1-secrets-under-the-rug)

Welcome to the first lab of the JWT Hacking Lab! This lab focuses on exploiting weak HMAC secrets used in JWTs. 

## 🎯 What You'll Learn

In this lab, you will learn about the risks of using weak HMAC secrets and how they can be exploited. You will also learn how to use JSON Web Tokens (JWTs) for authentication and how to manipulate them to bypass authentication mechanisms.

## 🚀 How to Use

To get started with this lab, follow the steps below:

1. **Build the Docker image**: Run the following command in the terminal:

    ```bash
    docker build -t secrets-under-the-rug .
    ```

2. **Run the Docker image**: Execute the following command:

    ```bash
    docker run -p 3000:3000 secrets-under-the-rug
    ```

3. **Access the lab**: Open your web browser and navigate to http://localhost:3000.

4. **Perform the attack**: Try to bypass the authentication and become an admin! You will need to manipulate the JWT you receive when logging in.

## 🔍 Tips

Remember that a weak secret can be easily brute-forced. You may want to take a closer look at the JWT you receive when logging in, and maybe even try to decode it or brute-force the secret.

## 📚 Resources

- [Introduction to JSON Web Tokens](https://jwt.io/introduction/)
- [Brute Forcing HS256 is Possible: The Importance of Using Strong Keys in Signing JWTs](https://auth0.com/blog/brute-forcing-hs256-is-possible-the-importance-of-using-strong-keys-to-sign-jwts/)

Thanks for participating in Lab #1 of the JWT Hacking Lab! We hope you learned something valuable. On to the next challenge!
