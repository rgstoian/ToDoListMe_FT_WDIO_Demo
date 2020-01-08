
# WebDriverIO sample test suite

## About
This is a short demo of a spin-off of https://github.com/rgstoian/ToDoListMe_FT, using [WebDriverIO](https://webdriver.io/) instead of NightwatchJS

It was created in Intellij Webstorm, and uses TypeScript as an intermediary language, Mocha for defining test cases, and also ChromeDriver as the WebDriver of choice.

Only one test case is implemented:

- **Scenario** : Add multiple to do list items

>**Given** the user is on the to do list page
>
>**When** the user adds more than 1 to do list items
>
>**Then** the items shows up as a to do list items

## Why?
Due to my struggles with Nightwatch, I wanted to challenge myself to try to implement at least part of the previous test suite using another framework, as unfamiliar to me as Nightwatch

It highlights several features not present in Nightwatch:
-	Flexible element identification using JQuery-style selectors: https://webdriver.io/docs/selectors.html
-	A fully synchronous execution mode, supported by default: https://www.npmjs.com/package/wdio-sync
-	Methods that return element properties into variables: https://webdriver.io/docs/api/element/getValue.html
-	The waitUntil method, which is very flexible, allowing for all sorts of dynamic waits: https://webdriver.io/docs/api/browser/waitUntil.html
-	Full TypeScript integration, which tremendously helps with having clearer code and better code completion
-	Creator-endorsed boilerplate projects,  which run out-of-the-box (I’ve even used one of them as a base for creating my demo): https://webdriver.io/docs/boilerplate.html
