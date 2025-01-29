import { test, expect } from '@playwright/test';

// npm init playwright@latest
// npx playwright test
// npx playwright test --headed
// npx playwright test --ui
// npx playwright test --debug
// npx playwright test example.spec.ts:10 --debug 10 is number of line
// npx playwright test example.spec.ts:10 --project=webkit --debug
// npx playwright test --trace on
// npx playwright show-report
// npm playwright test tests/example.spec.ts
// DEBUG=* npx playwright test tests/example.spec.ts
// DEBUG=pw:protocol npx playwright test tests/example.spec.ts
// DEBUG=pw:protocol DEBUG_FILE=logs.txt npx playwright test tests/example.spec.ts
// cat logs.txt | grep "method\":\"
// PWDEBUG=debug npx playwright test tests/example.spec.ts --ui https://playwright.dev/docs/debug#browser-developer-tools

// ctrl + shift + p opens command panel

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', { waitUntil: 'load' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// 🔥
// https://playwright.dev/docs/browsers
// https://playwright.dev/docs/api/class-browsercontext
// https://playwright.dev/docs/api/class-page
// https://playwright.dev/docs/writing-tests#basic-actions
// https://playwright.dev/docs/api/class-locator
// https://playwright.dev/docs/locators
// https://playwright.dev/docs/test-assertions
// https://playwright.dev/docs/test-assertions#soft-assertions
// https://playwright.dev/docs/writing-tests#using-test-hooks
// https://playwright.dev/docs/test-configuration
// https://playwright.dev/docs/test-configuration
// https://playwright.dev/docs/api/class-test
// https://playwright.dev/docs/test-parallel
// https://playwright.dev/docs/test-sharding
// https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
// https://playwright.dev/docs/getting-started-vscode
// https://playwright.dev/docs/debug
// https://playwright.dev/docs/test-ui-mode
// https://playwright.dev/docs/trace-viewer-intro
// https://playwright.dev/docs/trace-viewer
// https://playwright.dev/docs/api/class-testoptions#test-options-trace
// https://playwright.dev/docs/videos#record-video
// https://playwright.dev/docs/api/class-testoptions#test-options-video
// https://playwright.dev/docs/api/class-page#page-video
// https://playwright.dev/docs/test-fixtures
// https://playwright.dev/docs/test-cli
// https://playwright.dev/docs/test-cli#reference
// https://playwright.dev/docs/test-reporters#html-reporter
// https://playwright.dev/docs/api-testing
// https://playwright.dev/docs/mock-browser-apis
// https://playwright.dev/docs/mock
// https://playwright.dev/docs/emulation
// https://playwright.dev/docs/input
// https://playwright.dev/docs/api/class-keyboard
// https://playwright.dev/docs/api/class-mouse
// https://playwright.dev/docs/navigations
// https://playwright.dev/docs/test-annotations#tag-tests
//

// https://playwright.dev/docs/api/class-page#page-goto 🔥
// Visit a remote URL.
// Arguments:
// url (String) - URL to navigate page to.
// options (Object) optional
// referer (String) optional - Referer header value.
// timeout (Number) optional - Maximum operation time in milliseconds.
// waitUntil ("load"|"domcontentloaded"|"networkidle"|"commit") optional - When to consider operation succeeded, defaults to load.
//  await page.goto('http://localhost:3000');
//  await page.goto('http://localhost:3000', options);

// https://playwright.dev/docs/api/class-locator#locator-locator 🔥
// The method. returns an element locator that can be used to perform actions on this page / frame. Locator is resolved to the element immediately before performing an action, so a series of actions on the same locator can in fact be performed on different DOM elements. That would happen if the DOM structure between those actions has changed.
// Arguments:
// selector (String) - A selector to use when resolving DOM element.
// options (Object) optional
// has (Locator) optional - Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one.
// hasNot (Locator) optional - Matches elements that do not contain an element that matches an inner locator. Inner locator is queried against the outer one.
// hasText (String|RegExp) optional - Matches elements containing specified text somewhere inside, possibly in a child or a descendant element.
// hasNotText (String|RegExp) optional - Matches elements that do not contain specified text somewhere inside, possibly in a child or a descendant element.
// page.locator('button.login-button');
// page.locator('button.login-button', options);
// page.locator('button.login-button', { hasText: 'Login' });
// page.locator('div', { has: page.locator('span[tag="label"]') });

// https://playwright.dev/docs/api/class-locator#locator-click 🔥
// Click an element.
// Arguments:
// options (Object) optional
// button ("left"|"right"|"middle") optional - Defaults to left.
// clickCount (Number) optional - Defaults to 1.
// delay (Number) optional - Time to wait between mousedown and mouseup in milliseconds. Defaults to 0.
// force (Boolean) optional - Whether to bypass the actionability checks. Defaults to false.
// modifiers ( "Alt"|"Control"|"Meta"|"Shift"[] ) optional - Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
// noWaitAfter ( Boolean ) optional - Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to false.
// position ( {x: number, y: number } ) optional - A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
// timeout ( Number ) optional - Maximum time in milliseconds. Defaults to 0 - no timeout.
// trial ( Boolean ) optional - When set, this method only performs the actionability checks and skips the action. Defaults to false. Useful to wait until the element is ready for the action without performing it.
// await page.locator('button.login-button').click();
// await page.locator('button.login-button').click(options);
// await page.locator('button.login-button').click( {button: 'right'} );

// https://playwright.dev/docs/api/class-locator#locator-hover 🔥
// Hover over the matching element.
// Arguments:
// options (Object) optional
// force (Boolean) optional - Whether to bypass the actionability checks. Defaults to false.
// modifiers ( "Alt"|"Control"|"Meta"|"Shift"[] ) optional - Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
// noWaitAfter ( Boolean ) optional - Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to false.
// position ( {x: number, y: number } ) optional - A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
// timeout ( Number ) optional - Maximum time in milliseconds. Defaults to 0 - no timeout.
// trial ( Boolean ) optional - When set, this method only performs the actionability checks and skips the action. Defaults to false. Useful to wait until the element is ready for the action without performing it.
// await page.locator('button.login-button').hover();
// await page.locator('button.login-button').hover(options);
// await page.locator('button.login-button').hover( {timeout: 5000} );

// https://playwright.dev/docs/api/class-locator#locator-fill 🔥
// Fill the form field (fast)
// Arguments:
// value (String) - Value to set for the input, textarea or [contenteditable] element.
// options (Object) optional
// force (Boolean) optional - Whether to bypass the actionability checks. Defaults to false.
// noWaitAfter ( Boolean ) optional - Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to false.
// timeout ( Number ) optional - Maximum time in milliseconds. Defaults to 0 - no timeout.
// await page.locator('input').fill('some text');
// await page.locator('input').fill('some text', options);

// https://playwright.dev/docs/api/class-locator#locator-press-sequentially 🔥
// Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.
// Arguments:
// text (String) - A text to type into a focused element.
// options (Object) optional
// force (Boolean) optional - Whether to bypass the actionability checks. Defaults to false.
// noWaitAfter ( Boolean ) optional - Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to false.
// timeout ( Number ) optional - Maximum time in milliseconds. Defaults to 0 - no timeout.
// await locator.pressSequentially('Hello'); // Types instantly
// await locator.pressSequentially('World', { delay: 100 }); // Types slower, like a user

// https://playwright.dev/docs/api/class-locator#locator-evaluate 🔥
// Returns the value of the pageFunction invocation.
// Arguments:
// pageFunction (function | string) - Function to be evaluated in the page context.
// arg (any[]) optional - Optional argument to pass to pageFunction
// without arguments
// const href = await page.evaluate(() => document.location.href);
// with arguments
// const textContent = await page.evaluate(button => button.textContent, button);

// https://playwright.dev/docs/test-assertions#auto-retrying-assertions 🔥
// const el = page.locator('button.login-button');
// expect(await el.isVisible()).toEqual(true); //1st way response will be immediate if element dopes not exist
// await expect(el).toBeVisible(); //2nd way is better because it will wait for configuration(wait for certain conditions to be met before proceeding with further actions) time

// https://playwright.dev/docs/writing-tests#using-test-hooks 🔥
// Hooks
// test.describe(name, fn) - declares a group of test cases, pre and post requisites
// test.beforeEach(fn) - declares a sequence of steps that will be executed before each test cases inside describe block
// test.afterEach(fn) - declares a sequence of steps that will be executed after each test cases inside describe block
// test.beforeAll(fn) - declares a sequence of steps that will be executed once per worker before all test cases inside describe block
// test.afterAll(fn) - declares a sequence of steps that will be executed once per worker after all test cases inside describe block
// test(name, fn) - declares a test itself

// Navigate to https://www.epam.com/
// Check the page title
test('EPAM has title', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/EPAM | Software Engineering & Product Development Services/);
});

// Navigate to https://www.epam.com/
// Click Hamburger Menu button
// Check that Hamburger Menu is opened
test.describe('My First Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://www.epam.com/');
  });

  test('should open https://www.epam.com/ page', async ({ page }) => {
    await expect(page).toHaveTitle(/EPAM | Software Engineering & Product Development Services/);
  });

  test('should open hamburger menu', async ({ page }) => {
    await page.locator('button.hamburger-menu__button').click();
    const humburgerMenu = page.locator('div.hamburger-menu__dropdown-section');
    await expect(humburgerMenu).toBeVisible();
  });
});

// https://playwright.dev/docs/api/class-test#test-describe-configure 🔥
// Run all the tests using parallel workers.
// test.describe.configure({ mode: 'parallel' });
// test.describe('Login Test Suite', () => {
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });

// Tests will depend one each other.
// test.describe.configure({ mode: 'serial' });
// test.describe('Tasks', () => {
//   test('create a task', async ({ page }) => {...}); 
//   test('delete a task', async ({ page }) => {...}); 
// });

// Each test will be retried twice and have a timeout of 10 seconds.
// test.describe.configure({ retries: 2, timeout: 10000 });
// test.describe('Tasks', () => {
//   test('create a task', async ({ page }) => {...}); 
//   test('delete a task', async ({ page }) => {...}); 
// });

// https://playwright.dev/docs/api/class-test#test-only 🔥
// Declares a focused test. If there are some focused tests or suites, all of them will be run but nothing else. It is also applicable for a describe level: test.describe.only
// Arguments:
// title (String) - Test title.
// testFunction (Function(Fixtures, TestInfo)) - Test function that takes one or two arguments: an object with fixtures and optional TestInfo.
// Example 1: Run a test from the suite
// test.describe('Login Test Suite', () => {
// only this one will be run 
// test.only('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// Example 2: Run a test suite
// test.describe('Login Test Suite', () => {
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// Run the test suite
// test.describe.only('Logout Test Suite', () => {
//   test('should logout', async ({ page }) => {...});
// });

// https://playwright.dev/docs/api/class-test#test-skip 🔥
// Conditionally or Unconditionally skip a test. It is also applicable for a describe level: test.describe.skip
// Example 1: Skip a test from the suite
// test.describe('Login Test Suite', () => {
// this one will not be run 
//   test.skip('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// Example 2: Skip a test suite
// test.describe('Login Test Suite', () => {
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// Skip the test suite
// test.describe.skip('Logout Test Suite', () => {
//   test('should logout', async ({ page }) => {...});
// });
// Example 3: Skip a test with a condition
// test.describe('Login Test Suite', () => {
//   test('should login using valid credentials', async ({ page }) => {
//     test.skip(process.env.ENV === 'QA', 'Not applicable for QA env');
// the test will be skipped for QA env
//   }); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });

// https://playwright.dev/docs/api/class-test#test-use 🔥
// Specifies options or fixtures to use in a single test file or a test.describe() group. Most useful to set an option, for example set locale to configure context fixture
// Arguments:
// options (TestOptions) - An object with local options.
// Popular options. (You can exlore more here: TestOptions | Playwright)
// headless: whether to run browser in headless mode.
// test.describe('Login Test Suite', () => {
//   test.use( {headless: true} ); 
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// locale: Specify user locale, for example en-GB, de-DE, etc.
// test.describe('Login Test Suite', () => {
//   test.use( {locale: 'de-DE'} ); 
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// isMobile: whether the meta viewport tag is taken into account and touch events are enabled.
// test.describe('Login Test Suite', () => {
//   test.use({ isMobile: true }); 
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// viewport: emulates consistent viewport for each page. Defaults to an 1280x720 viewport.
// test.describe('Login Test Suite', () => {
//   test.use({ viewport: {width: 100, height: 100} }); 
//   test('should login using valid credentials', async ({ page }) => {...}); 
//   test('should not login using non-valid credentials', async ({ page }) => {...}); 
// });
// storageState: Populates context with given storage state.
// test.describe('Logged in user', () => {
//   test.use({ storageState: 'state.json' }); 
//   test('should open a page', async ({ page }) => {...}); 
// });

// setup.[ts|js]
// Closing cookie overlay and saving the storageState
// test.describe('My First Test Suite', () => {

//   test('should close cookie overlay', async ({ page }) => {
//     await page.goto('https://www.epam.com/');
//     await expect(page.locator('#onetrust-banner-sdk')).toBeVisible();

//     await page.locator('#onetrust-banner-sdk #onetrust-accept-btn-handler').click();
//     await expect(page.locator('#onetrust-banner-sdk')).toBeHidden();

//     await page.context().storageState({path: 'state.json'});
//   });

// })

// Writing the initial test scenario with usage of the storageState
test.describe('My First Test Suite with storageState', () => {

  // Setting previously saved storage state to open a page with already accepted cookies
  test.use({storageState: 'state.json'});

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.epam.com/');
  });

  test('should open https://www.epam.com/ page', async ({ page }) => {
    await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services  ')
  });

  test('should hamburger menu', async ({ page }) => {
    await page.locator('button.hamburger-menu__button').click();
    await expect(page.locator('div.hamburger-menu__dropdown-section')).toBeVisible();
  });
  
})

// 🔥
// Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.
// By default, test files are run in parallel. Tests in a single file are run in order, in the same worker process.
// npx playwright test --workers 4
// 1. If you need to run tests in a single file in parallel, you can configure it using test.describe.configure annotation.
// 2. If you have all the necessary infrastructure to run tests in parallel on several agents, you can use sharding feature.
// npx playwright test --shard=1/4
// A logical question after running tests using sharding is "How to merge reports?". Playwright has a special CLI for this purpose.
// npx playwright merge-reports --reporter=html,github ./blob-reports

// https://playwright.dev/docs/test-fixtures 🔥
// You can define your own fixtures to prepare environment. test function imported from playwright has extend method where you can pass your fixture definitions.
// as an example lets create fixture that opens epam.com and closes cookie banner.
// const { test: base, expect } = require('@playwright/test');
// create new instance of test with mainPage fixture
// const test = test.extend({
//   mainPage: async ({ page }, use) => {
//     await page.goto('https://www.epam.com');
//     await page.locator('#onetrust-accept-btn-handler').click();
//     await use(page);
//   },
// });
// create fixture need to be "imported" in the test
// test('open epam.com', async ({ mainPage }) => {
//   await expect(mainPage).toHaveTitle('EPAM | Software Engineering & Product Development Services')
// });

// It is also possible to redefine existing fixtures in order to apply logic to all tests.
// e.g same example but with modified page fixture
// const { test: base, expect } = require('@playwright/test');
// const test = base.extend({
//   page: async ({ page }, use) => {
//     await page.goto('https://www.epam.com');
//     await page.locator('#onetrust-accept-btn-handler').click();
//     await use(page);
//   },
// });
// test('open epam.com', async ({ page }) => {
//   await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services')
// });

// https://playwright.dev/docs/pom 🔥
// Let's describe https://www.epam.com/ home page:
// class EPAMPage {
//     // all elements of the page described in constructor
//     constructor(page) {
//         // search icon to initiate search
//         this.searchButton = page.locator('button.header-search__button');
//         // search input
//         this.searchInput = page.locator('#new_form_search');
//         // button "FIND"
//         this.findButton = page.locator('div.search-results__action-section > button');
//         // collection of search results
//         this.searchResults = page.locator('article.search-results__item');
//     }
//     // action that may be performed on the page described in form of methods
//     async search(query) {
//         await this.searchButton.click();
//         await this.searchInput.type(query);
//         await this.findButton.click();
//     }
// }
// module.exports = EPAMPage;

// Then this page can be registered as custom fixtures to be reusable between tests.
// For example let's defined epamPage as fixture:
// const base = require('@playwright/test');
// const { EPAMPage } = require('./epam.js');
// const test = base.test.extend({
//   epamPage: async ({ page }, use) => {
//     // create EPAM page and define as custom fixture via use function
//     await use(new EPAMPage(page));
//   }
// });

// To use page object inside test just access corresponding fixture. If you need to interact between multiple pages, describe all necessary pages.
// // now EPAM page is available as fixture
// test('Verify that user is to search fon EPAM main page', async ({ epamPage }) => {
//     await epamPage.search('Test Automation');
// });

// https://playwright.dev/docs/test-cli 🔥
// npx playwright test [options]
// Let's go through several examples:
// npx playwright test tests/login.spec.ts // Run a single test file
// npx playwright test --headed // Run tests in headed mode
// npx playwright test --project=chromium // Run all the tests against a specific project
// npx playwright test --workers=1 // Disable parallel execution
// npx playwright test --debug // Run test in Debug mode
// npx playwright test --ui // Run test in UI mode
// npx playwright test --grep="@smoke" // Run tests that match RegExp