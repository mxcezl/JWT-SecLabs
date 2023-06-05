# Lab #2 Solution: Voiding the Rules: None Algorithm Exploitation

This document provides a step-by-step guide to exploiting the 'none' algorithm vulnerability in JWTs, as covered in Lab #2.

## Step 1: Login and Receive JWT 🚀

The first step is to log in by entering a username on the homepage. When you submit the form, the server generates a JWT and returns it in the response. This JWT is then stored as a cookie on your browser.

## Step 2: Decode the JWT 🕵️‍♀️

Once you have the JWT, decode it using online tools like [jwt.io](https://jwt.io/) to examine its header and payload.

## Step 3: Change the Algorithm to 'none' and Modify the Payload 💥

In the decoded JWT, change the "alg" field in the header to "none". Then, modify the payload to claim that you are the admin by changing the "name" field to "admin".

## Step 4: Re-Encode the JWT 📜

Re-encode the JWT, which now claims you're the admin and uses the 'none' algorithm. Because you've specified 'none' as the algorithm, you won't need a secret to generate a valid signature.

## Step 5: Send the New JWT to the Protected Route 🎯

Lastly, send a GET request to the protected route (http://localhost:3000/api/content). Replace the existing JWT in your browser's cookies with the newly generated JWT.

You should now have successfully exploited the 'none' algorithm vulnerability and gained unauthorized access as an admin!

## Conclusion 🎓

This lab demonstrated the risks associated with the 'none' algorithm in JWTs. If a JWT implementation fails to check the 'alg' field in a JWT header, an attacker could change it to 'none', bypass the signature verification step, and impersonate any user, including an admin.

Remember to always ensure that your JWT implementation correctly verifies the 'alg' field to avoid this vulnerability!

This lab was designed to improve understanding of JWT vulnerabilities to create more secure applications. Please do not use this knowledge for malicious purposes. 🚫