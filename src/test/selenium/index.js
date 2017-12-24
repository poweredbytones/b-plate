// Imports Selenium WebDriver
const selenium = require("selenium-webdriver");
const By = selenium.By;
const driver = new selenium.Builder()
    .forBrowser("chrome")
    .build();

const LoginPage = require('./pages/loginPage');
const loginPage = new LoginPage(driver);

const Todo = require('./pages/todo');
const todo = new Todo(driver);

const Menu = require('./pages/menu');
const menu = new Menu(driver);

const testTasks = [
    'Do something robotic',
    'Do something crazy',
    'Write a novel',
    'Go to town',
    'Happy dance'
]


//a[text() = "ADD NEW"]



///////
/////// ROLE_USER Test
///////
loginPage.open();
loginPage.login("user", "password");
testTasks.forEach(task => todo.createTask(task));
testTasks.forEach(task => todo.checkOffTask(task));
// TODO: Refresh page and look for tasks in menu
// TODO: Look for absence of admin and publisher level menu items
// TODO:
menu.logout();
// TODO: Look for absence of admin and publisher role level menu items



///////
/////// ROLE_ADMIN Test
///////

loginPage.login("user2", "password");
testTasks.forEach(task => todo.createTask(task));
testTasks.forEach(task => todo.checkOffTask(task));
menu.clickMenuItem("pages");  // TODO: check for pages menu item and click
// TODO: Go to each page and look for images and content?
menu.clickMenuItem("images");// TODO: Check for images menu item and click
// TODO: Add an set of images, edit the image fields, remove the images
menu.clickMenuItem("users");// TODO: Check for users menu item and click
// TODO: Add a set of users
// TODO: Click on each user and edit all fields and trigger password reset
// TODO: Reset logged in user password
// TODO: Delete set of users
menu.logout();



///////
/////// Registration Test
///////

// TODO: Open loginPage
// TODO: Click register link
// TODO: Register user function