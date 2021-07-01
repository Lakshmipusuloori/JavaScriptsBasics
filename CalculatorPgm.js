const { element, browser } = require("protractor");

describe("validate Calculator", function () {
  function Calc(a, b, c) {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);

    element.all(by.tagName("option")).each(function (item) {
      item.getAttribute("value").then(function (val) {
        if (val == c) {
          item.click();
        }
      });
    });

    element(by.id("gobutton")).click();
  }

  it("validate Calculator Add Button", function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("https://juliemr.github.io/protractor-demo/");

    //  element(by.model("first")).sendKeys("10");
    //  element(by.model("second")).sendKeys("10");

    //  element(by.id("gobutton"))
    //    .click()
    //    .then(function () {
    //      browser.sleep(3000);
    //    });

    Calc(10, 20, "DIVISION");
    Calc(10, 50, "MULTIPLICATION");
    Calc(20,10, "MODULO");

    element(by.repeater("result in memory"))
      .element(by.css("td:nth-child(2)"))
      .getText()
      .then(function (CalResult) {
        console.log(CalResult);
      });
    // element.all(by.repeater("result in memory")).getText().then(function(CalResult){
    //   console.log(CalResult);
    // })

    element(by.xpath("(//tr[@ng-repeat='result in memory'])[3]"))
      .getText()
      .then(function (CalResult) {
        console.log(CalResult);
      });
    element.all(by.repeater("result in memory")).each(function (alldata) {
      alldata
        .element(by.css("td:nth-child(3)"))
        .getText()
        .then(function (ResultCol) {
          console.log(ResultCol);
        });
    });

    element
      .all(by.repeater("result in memory"))
      .count()
      .then(function (CountData) {
        console.log(CountData);
      });
    element.all(by.repeater("result in memory")).each(function (alldata) {
      alldata.getText().then(function (ResultCol) {
        console.log(ResultCol);
      });
    });
  });
});
