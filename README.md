# JWT Hacking Lab 🛠️

Welcome to the JWT Hacking Lab! This project is a fantastic hands-on playground designed to help you dig deep into the world of JSON Web Token (JWT) security. 😎

## 🚀 Labs and Learning Objectives 🎯

Our labs, each focusing on a specific JWT-related vulnerability, are as follows:

1. **Secrets Under the Rug: Exploiting Weak HMAC Secrets** 🤫: This lab teaches you about HMAC weaknesses and how low-complexity secrets can lead to vulnerabilities.

2. **Voiding the Rules: None Algorithm Exploitation (CVE-2015-9235)** 🚫: In this lab, you'll practice exploiting the none algorithm vulnerability, which can lead to token verification bypass.

3. **Chameleon Hashes: Changing Hash from Asymmetric to Symmetric (CVE-2016-5431/CVE-2016-10555)** 🔀: This lab provides a deeper understanding of the potential pitfalls in hash algorithms and how to exploit them.

4. **Breaking and Entering Keys: Injecting a New Public Key in the Header (CVE-2018-0114)** 🔑: Here, you'll explore how attackers can insert a new public key into the header to manipulate token verification.

5. **Hidden Keys, Open Doors: Exploiting Embedded Public Keys (CVE-2018-0114)** 👁️: This lab is centered around learning about vulnerabilities that arise when public keys are embedded in tokens.

6. **ID Missteps: Exploring Bad JWT ID (JTI) Implementation in Backend** 🆔: In this lab, you'll discover how missteps in JTI implementation can open the door for exploitation.

## 🎓 How to Use 

To get started, check out the `docs` folder. Here, you'll find detailed guides and tutorials for each lab. Each guide includes a scenario description, step-by-step instructions, and expected results. 

## 👩‍💻 How to Contribute

We believe in the power of collaboration, and we welcome contributions from everyone! 🤗 Here's how to contribute:

1. **Fork this repository** to your account.
2. **Clone the forked repository** to your local machine.
3. **Create a new branch** for your changes: `git checkout -b my-fix-branch master`
4. **Test your changes** to ensure everything is working as it should.
5. **Commit your changes**: `git commit -a -m "Fixed some bugs"`
6. **Push your branch** to GitHub: `git push origin my-fix-branch`
7. **Open a new pull request** in the original repository from your forked GitHub repository.

## 📝 Pull Request (PR) Template

When creating a pull request, please use the template below. You can find this template in the `.github` folder of the repository, named `PULL_REQUEST_TEMPLATE.md`.

```markdown
## 📚 Description of Changes

Please provide a summary of your change and which issue is fixed. Explain your motivation and context.

Fixes # (issue)

## 🎈 Type of Change

Please delete options that are not relevant.

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] 🌟 New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 This change requires a documentation update

## ✅ How Has This Been Tested?

Please

 describe the tests you ran to verify your changes. Provide instructions so we can reproduce.

## 📝 Checklist:

- [ ] ✅ My code follows the style guidelines of this project
- [ ] 📖 I have performed a self-review of my own code
- [ ] 💬 I have commented my code, especially in hard-to-understand areas
- [ ] 📚 I have made corresponding changes to the documentation
```

Thank you for your interest in contributing to the JWT Hacking Lab! Your insights and expertise will help us create a robust and engaging learning environment. Together, we can make cybersecurity education accessible and enjoyable for everyone! 🎉