# Lab #1 Solution: Exploiting Weak HMAC Secrets

This document provides a step-by-step guide to exploiting weak HMAC secrets in JWTs, as explored in Lab #1.

## Step 1: Login and Receive JWT 🚀

The first step is to log in by entering a username on the homepage. When you submit the form, the server generates a JWT, signs it using a secret HMAC key, and returns it in the response. This JWT is then stored as a cookie on your browser.

## Step 2: Decode the JWT 🕵️‍♀️

Once you have the JWT, decode it to examine its payload. You can use online tools such as [jwt.io](https://jwt.io/) to accomplish this.

## Step 3: Brute-Force the Secret 💥

The JWT was signed using a weak HMAC secret. You can attempt to guess it, but a more reliable method is to use a tool like [Hashcat](https://hashcat.net/hashcat/) to brute force it. Here are the steps to do that:

1. First, install Hashcat if you haven't already.

2. Download a wordlist such as [RockYou](https://www.kaggle.com/datasets/wjburns/common-password-list-rockyoutxt). This contains millions of commonly used passwords, and we'll use it to guess the secret.

3. Use the following Hashcat command to begin brute-forcing the secret:

   ```bash
   hashcat -a 0 -m 16500 jwt.txt rockyou.txt
   ```

   In this command, `-a 0` specifies dictionary attack mode, `-m 16500` specifies the JWT HS256 mode, `jwt.txt` is a file containing your JWT, and `rockyou.txt` is the wordlist.

4. Hashcat will now attempt to crack the secret by trying every word in the RockYou list. This might take some time depending on the strength of the secret and the speed of your computer.

5. Once Hashcat has successfully found the secret, it will display it in the terminal. 🎉

## Step 4: Create a New JWT 📜

Now that you have the secret, you can create a new JWT with a payload claiming that you are the admin. You can accomplish this by using online tools like [jwt.io](https://jwt.io/):

1. In the 'PAYLOAD:DATA' section, enter `{"name":"admin"}`.

2. In the 'VERIFY SIGNATURE' section, enter your secret in the 'your-256-bit-secret' field.

3. Click on the 'Share JWT' button, and it will generate your new JWT.

## Step 5: Send the New JWT to the Protected Route 🎯

Finally, send a GET request to the protected route (http://localhost:3000/protected). Include your new JWT in the 'Authorization' header in the format 'Bearer [your JWT]'. 

## Conclusion 🎓

This lab demonstrated the risks of using weak secrets when signing JWTs with HMAC. An attacker could brute-force such a secret and create valid JWTs to impersonate any user, including an admin. Always use strong, randomly generated secrets when signing JWTs! 💪

The purpose of this lab is to understand JWT vulnerabilities to create more secure applications. Please do not use this knowledge for malicious purposes. 🚫