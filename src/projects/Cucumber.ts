import Project from "../interfaces/project.interface";

const Cucumber: Project = {
  name: "Cucumber",
  year: 2024,
  month: 4,
  technologies: ["ts", "playwright", "cucumber"],
  repositoryLink: "",
  projectLink: "cucumber",
  viewLinks: [],
  icon: "fas fa-cucumber",
  images: [],
  shortDescription:
    "A design pattern for playwright/cucumber behavior driven testing",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: [{ name: "" }, { name: "" }],
    },
    {
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },
  ],
};

export default Cucumber;

/*
steps.ts;

import { expect, Page } from "@playwright/test";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import itemPageActions from "../actions/itemPageActions";

type Locator = PageLocator | ElementLocator;
type PageGetter = () => Page;

export interface ElementLocator {
  label: string;
  testId: string;
}

export interface PageLocator {
  label: string;
  url: string;
  title: string;
}

interface Table {
  hashes: () => TableRowHashed[];
}

interface TableRowHashed {
  TEST_ID: string;
  VALUE: string;
}

// Attempts to find a locator with the specified label amongst the provided list
const getLocatorByLabel = (
  locators: Locator[],
  label: string
): Locator | undefined => {
  return pipe(
    O.fromNullable(
      locators.find((locator: Locator) => locator.label === label)
    ),
    verifyLocatorExists,
    O.fold(
      () => undefined,
      (locator: Locator) => locator
    )
  );
};

// Tests the provided locator is not undefined
const verifyLocatorExists = (
  locatorOption: O.Option<Locator>
): O.Option<Locator> => {
  expect(O.isSome(locatorOption)).toBeTruthy();
  return locatorOption;
};

// Navigates a user to the matched pageLocator url
export const userIsOnPage =
  (pageLocators: PageLocator[], getPage: PageGetter) =>
  async (label: string) => {
    const locator: PageLocator = <PageLocator>(
      getLocatorByLabel(pageLocators, label)
    );
    await getPage().goto(locator.url);
  };

// Logs in as user
export const userIsLoggedIn =
  (
    elementLocators: ElementLocator[],
    pageLocators: PageLocator[],
    getPage: PageGetter
  ) =>
  async (table: Table) => {
    await userIsOnPage(pageLocators, getPage)("Login");
    await userFillsInTable(elementLocators, getPage)(table);
    await userClicksOn(elementLocators, getPage)("Login Submit Button");
  };

export const userFillsInTable =
  (elementLocators: ElementLocator[], getPage: PageGetter) =>
  async (table: any) => {
    table
      .hashes()
      .forEach(await userFillsInHashedRow(elementLocators, getPage));
  };

const userFillsInHashedRow =
  (elementLocators: ElementLocator[], getPage: PageGetter) =>
  async (hashedRow: TableRowHashed) => {
    await getPage().getByTestId(hashedRow.TEST_ID).fill(hashedRow.VALUE);
  };

// Tests the visibility of an element within the page identified by the 'testId' of the matched locator
export const userShouldSee =
  (locators: ElementLocator[], getPage: PageGetter) =>
  async (label: string) => {
    const locator: ElementLocator = <ElementLocator>(
      getLocatorByLabel(locators, label)
    );
    await expect(getPage().getByTestId(locator.testId)).toBeVisible();
  };

// Triggers a click on the element within the page identified by the 'testId' of the matched locator
export const userClicksOn =
  (locators: Locator[], getPage: PageGetter) => async (label: string) => {
    const locator: ElementLocator = <ElementLocator>(
      getLocatorByLabel(locators, label)
    );
    await getPage().getByTestId(locator.testId).click();
  };

// Tests that a user has been successfully navigated to the expected page
export const userShouldNavigateToPage =
  (locators: PageLocator[], getPage: PageGetter) => async (label: string) => {
    const locator: PageLocator = <PageLocator>(
      getLocatorByLabel(locators, label)
    );
    await getPage().waitForTimeout(3000);
    expect(await getPage().title()).toEqual(locator.title);
  };

export const userPerformsActionOnChildren =
  (
    parentTestId: string,
    getChildren: (parent: any) => any[],
    action: (child: any) => void,
    getPage: PageGetter
  ) =>
  async () => {
    pipe(await getPage().getByTestId(parentTestId), getChildren, (children) =>
      children.map(action)
    );
  };


////////////////////////////////////////////////////////////////

featurePhrases.ts;
export const USER_IS_ON_PAGE = "User is on the {string} page";
export const USER_SHOULD_SEE = "User should see the {string}";
export const USER_CLICKS_ON = "User clicks on the {string}";
export const USER_SHOULD_NAVIGATE_TO_PAGE =
  "User should navigate to the {string} page";
export const USER_IS_LOGGED_IN = "User is logged in";
export const USER_FILLS_IN = "User fills in";
export const USER_CLICKS_ON_MENU_NAV_ITEMS =
  "User clicks on the menu navigation items";


////////////////////////////////////////////////////////////////

headerSteps.ts;
import { Given, When, Then } from "@cucumber/cucumber";
import {
  USER_IS_ON_PAGE,
  USER_SHOULD_SEE,
  USER_CLICKS_ON,
  USER_SHOULD_NAVIGATE_TO_PAGE,
  USER_IS_LOGGED_IN,
} from "../utils/featurePhrases";
import {
  userIsOnPage,
  userIsLoggedIn,
  userShouldSee,
  userClicksOn,
  userShouldNavigateToPage,
} from "../utils/steps";
import headerLocators from "../locators/headerLocators.json";
import footerLocators from "../locators/footerLocators.json";
import pageLocators from "../locators/pageLocators.json";
import { getPage } from "../utils/basePage";

let elementLocators = [...headerLocators, ...footerLocators];

Given(USER_IS_LOGGED_IN, userIsLoggedIn(headerLocators, pageLocators, getPage));
Given(USER_IS_ON_PAGE, userIsOnPage(pageLocators, getPage));
Then(USER_SHOULD_SEE, userShouldSee(elementLocators, getPage));
When(USER_CLICKS_ON, userClicksOn(elementLocators, getPage));
Then(
  USER_SHOULD_NAVIGATE_TO_PAGE,
  userShouldNavigateToPage(pageLocators, getPage)
);

////////////////////////////////////////////////////////////////

elementLocators[
  ({ label: "Contact Us Link", testId: "contact-us-link" },
  { label: "Wishlist Logged In Link", testId: "wishlist-logged-in-link" },
  { label: "Wishlist Logged Out Link", testId: "wishlist-logged-out-link" },
  { label: "Cart Link", testId: "cart-link" },
  { label: "Home Mobile Link", testId: "home-mobile-link" },
  { label: "Home Desktop Link", testId: "home-desktop-link" },
  { label: "Stores Mobile Link", testId: "stores-mobile-link" },
  { label: "Stores Desktop Link", testId: "stores-desktop-link" },
  { label: "Login Link", testId: "login-link" },
  { label: "Login Submit Button", testId: "login-submit-button" },
  { label: "Login Submit Button", testId: "login-submit-button" })
];

////////////////////////////////////////////////////////////////

pageLocators[
  ({
    label: "Home",
    url: "https://karlsonline.com.local.platform2pt0site.com:4000",
    title: "Home | Karl's",
  },
  {
    label: "Contact Us",
    url: "https://karlsonline.com.local.platform2pt0site.com:4000/contact-us",
    title: "Contact Us | Karl's",
  },
  {
    label: "Login",
    url: "https://karlsonline-development.us.auth0.com/u/login",
    title: "Log in | Karl's",
  },
  {
    label: "Cart",
    url: "https://karlsonline.com.local.platform2pt0site.com:4000/cart",
    title: "Cart | Karl's",
  }
];

////////////////////////////////////////////////////////////////
header.feature

Feature: Testing header hyperlink visibility and page transitions

@test
Scenario: Clicking on the contact us hyperlink navigates to the contact us page
  Given User is on the "Home" page
  Then User should see the "Contact Us Link"
  When User clicks on the "Contact Us Link"
  Then User should navigate to the "Contact Us" page

#@login issues
#cenario: Clicking on the wishlist hyperlink while logged in navigates to the wishlist page
#  Given User is logged in
#  | TEST_ID              | VALUE      |
#  | login-username-input | email      |
#  | login-password-input | password   |
#  And User is on the "Home" page
#  Then User should see the "Wishlist Logged In Link"
#  When User clicks on the "Wishlist Logged In Link"
#  Then User should navigate to the "Wishlist" page

@test
Scenario: Clicking on the wishlist link while not logged in navigates to the login page
  Given User is on the "Home" page
  When User clicks on the "Wishlist Logged Out Link"
  Then User should navigate to the "Login" page


////////////////////////////////////////////////////////////////

import { Page, expect } from "@playwright/test"
import contactUsPageLocators from '../locators/contactUsPageLocators.json'
import checkOutPageLocators from "../locators/checkOutPageLocators.json"
import data from '../data/data.json'
import { getPage } from "../utils/basePage"


export default class contactUsPageActions {

    page: Page
 

    constructor(page: Page) {
        this.page = page
    }

    async fillContactUsForm() {
        await this.page.locator(contactUsPageLocators.name_text).fill(data.formContactUs.name)
        await this.page.locator(contactUsPageLocators.email_text).fill(data.formContactUs.email)
        await this.page.locator(contactUsPageLocators.productSku_text).fill(data.formContactUs.priductSku)
        await this.page.locator(contactUsPageLocators.phone_txt).fill(data.formContactUs.phone)
        await this.page.locator(contactUsPageLocators.city_txt).fill(data.formContactUs.city)
        await this.page.locator(contactUsPageLocators.productDetails_txt).fill(data.formContactUs.productDetails)
        await this.page.locator(contactUsPageLocators.store_lst).click()
        await this.page.locator(contactUsPageLocators.normalIl_option).click()
        await this.page.locator(contactUsPageLocators.message_txt).fill(data.formContactUs.message)
     
    }

    async selectStore(locator: string) {
        await this.page.locator(contactUsPageLocators.store_lst).click()
        await this.page.locator(locator).click()
       
    }

    async clickSubmitButton() {
        await this.page.locator(contactUsPageLocators.submit_button).click()
     
    }

    async clickCheckCopyEmail() {
        await this.page.locator(contactUsPageLocators.copyEmail_checkBox).click()
     
    }

    async validateRequestSubmitted() {
       const name = await this.page.locator(contactUsPageLocators.name_text)
       name.scrollIntoViewIfNeeded()
       await getPage().waitForTimeout(1000)
       const isVisibleMessage = await this.page.locator(contactUsPageLocators.queryReceived_message).isVisible()
       await expect(isVisibleMessage).toEqual(true)
       await getPage().waitForTimeout(1000)
    }

    async validateCopyEmail() {
        await getPage().goto("https://yopmail.com/es/")
        await this.page.waitForTimeout(1000);
        await this.page.locator(checkOutPageLocators.emailYopmail_txt).fill(data.validEmail)
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        const isVisibleInquiry = await this.page.locator(contactUsPageLocators.inquiryReceivedEmail_message).textContent()
        console.log("copy email " + isVisibleInquiry)
        await expect(isVisibleInquiry).toContain("Inquiry From Website")
     }


}

////////////////////////////////////////////////////////////////

import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import homePageActions from "../actions/homePageActions"
import contactUsPageLocators from '../locators/contactUsPageLocators.json'
import contactUsPageActions from "../actions/contactUsPageActions"
import { getPage } from "../utils/basePage"

let homeActions: homePageActions
let contactUsActions: contactUsPageActions


Given('User opens the contact us page', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openContactUsPage()
});

Given('User fills the form', async function () {
  contactUsActions = new contactUsPageActions(getPage())
  await contactUsActions.fillContactUsForm()
});

Given('User select the store', async function () {
 await contactUsActions.selectStore(contactUsPageLocators.normalIl_option)
});

Given('User click on button submit', async function () {
  await contactUsActions.clickSubmitButton()
});


Then('User should see the message We have received your query.', async function () {
  await contactUsActions.validateRequestSubmitted()
});



Given('User clik on woulk like a copy of this email', async function () {
  await contactUsActions.clickCheckCopyEmail()
});

Then('User validate the copy in the email', async function () {
  await contactUsActions.validateCopyEmail()
});
*/
