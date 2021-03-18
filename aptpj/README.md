
To add new files like gitignore use command:  touch gitignore

proj set up::

1) Starting a new project with the Express generator is as simple as running a few commands:
npm install express-generator -g

2) This installs the Express generator as a global package, allowing you to run the express command in your terminal:
express --view=pug myapp

3) This creates a new Express project called myapp which is then placed inside of the myapp directory.
cd myapp

4) If you’re unfamiliar with terminal commands, this one puts you inside of the myapp directory
npm install

If u face powershell error execution of scripts disabled then execute the following command ::
Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "RemoteSigned"

execution of scripts disabled then execute the following command ::
Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "RemoteSigned"


Steps for cloning
==================
git clone <git path>

After cloning
==============
nmp install or npm i

Then to run
============
npm start

by default port no is 3000
it is visible in bin>www line no 15
var port = normalizePort(process.env.PORT || '3000');
