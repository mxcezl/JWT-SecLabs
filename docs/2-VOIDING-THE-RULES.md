# JWT Hacking Lab: Lab #2 - Voiding the Rules: None Algorithm Exploitation

Welcome to the second lab of the JWT Hacking Lab! This lab is all about exploiting the 'none' algorithm vulnerability in JWTs. 

## 🎯 What You'll Learn

In this lab, you will learn about a critical vulnerability associated with the 'none' algorithm in JWTs. You will understand how attackers can bypass authentication mechanisms and gain unauthorized access by manipulating the JWT algorithm.

## 🚀 How to Use

To start with this lab, follow the steps below:

1. **Build the Docker image**: Run the following command in the terminal:

    ```bash
    docker build -t voiding-the-rules .
    ```

2. **Run the Docker image**: Execute the following command:

    ```bash
    docker run -p 3000:3000 voiding-the-rules
    ```

3. **Access the lab**: Open your web browser and navigate to http://localhost:3000.

4. **Perform the attack**: Try to gain unauthorized access and become an admin! To do so, you'll need to manipulate the JWT you receive when logging in.

## 🔍 Tips

The 'none' algorithm is a peculiar feature in JWTs that can be exploited. Pay close attention to the JWT you receive when logging in, and consider what might happen if you change the algorithm to 'none'.

## 🔐 Solution

Don't look unless you're totally stuck! The purpose of this lab is to help you gain practical experience with JWT security. But, if you really need it, you can find a step-by-step solution guide in the `SOLUTION.md` file.

## 📚 Resources

- [Critical vulnerabilities in JSON Web Token libraries](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/)
- [JWT: The Complete Guide to JSON Web Tokens](https://angular-university.io/lesson/angular-jwt-the-complete-guide)

Thanks for participating in Lab #2 of the JWT Hacking Lab! We hope you gained valuable insights. Let's move on to the next challenge!