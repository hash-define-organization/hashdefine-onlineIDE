# Contributing to Hashdefine IDE

## Table of Contents

- [Code Organization](#code-organization)
- [Setting Up the project locally](#setting-up-the-project-locally)
- [Submitting a Pull Request](#submitting-a-pull-request)


## Code Organization

The Hashdefine IDE is currently divided in to 2 parts:

- `THE BACKEND`: Not open-source, but `coming soon`
- `The frontend`: 👇👇👇
  - **public** : Edit this directory only if you want to edit the meta tags or the icons, title, etc.
  - **src** : The main code, you can work at this part easily if you have some knowlendge of [axios](https://axios-http.com/), [create-react-app](https://create-react-app.dev/) and [SCSS](https://sass-lang.com/)


**Working on your first Pull Request?** You can learn how from this _free_
series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Setting Up the project locally

1. Fork the Repository

	<img width="72" alt="image" src="https://user-images.githubusercontent.com/71627983/151713658-7e9576d0-f373-4e6a-a60a-e3d58b3b38c8.png">

2. Pull the Forked Repository to your local machine.
	```
	git pull https://github.com/<your GitHub user name>/hashdefine-onlineIDE.git.
	```

3. Change the directory to HashIDE.
	```bash
	cd HashIDE
	```

4. Add remote to the Original Repository.
	```
	git add remote https://github.com/hash-define-organization/hashdefine-onlineIDE.git
	```

5. Install the dependecies.
	```node
	npm install
	```

6. Run the application.
	```node
	npm start
	```

7. The app starts on `localhost:3000`. If not, [Click here](http://localhost:3000) to open the app in browser.

8. Make your changes

## Submitting a Pull Request

1. Check the status of the repository.
```sh
git status
```

2. If you can see some changes, you can add all the items to git.
 ```sh
git add .
```

3. Commit to github with proper name of changes made
```sh
git commit -m "CONTRIBUTING PR steps added"
```

4. Check the git status if the directory is clean now.
```sh
git status
```

5. Push the changes!
```sh
git push -u origin master
```

Our netlify bot will automatically show you the final preview of your pre-release and if the result is satisfactory, we will surely accept your request 😊
