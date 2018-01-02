const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://jedwatson.github.io/react-select');

async function selectedOption() {
  const webElement = await driver.wait(until.elementLocated(By.css('.Select--single')), 10000);

  await driver.actions()
    .mouseMove(webElement)
    .click(webElement)
    .perform();

  const thirdSelectOption = await driver.wait(until.elementLocated(By.css('.Select-menu-outer .Select-option:nth-child(5)')), 10000);

  await driver.actions()
    .mouseMove(thirdSelectOption)
    .click(thirdSelectOption)
    .perform();

  const selected = await driver.wait(until.elementLocated(By.css('.Select--single .Select-value-label')), 10000)

  return await selected.getText();
}

selectedOption()
  .then(val => {
    console.log(val);
  })
  .then(() => {
    driver.quit();
  });

