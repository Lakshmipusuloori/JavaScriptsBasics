

describe("Validate DropDown", function(){
    function result(c){
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(val){
                if(val ==c){
                    item.click();
                    console.log(val);
                }
                
            })
        })
    }
    function Calc(a, b, d) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
    
        element.all(by.tagName("option")).each(function (item) {
          item.getAttribute("value").then(function (val) {
            if (val == d) {
              item.click();
              
            }
          });
        });
        element(by.id("gobutton")).click();
      }
    
  it("Validate Amazon DropDown", function(){
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
    browser.get("https://www.amazon.com/");
    console.log("Amazon Drop Down")
    result("search-alias=alexa-skills");
    result("search-alias=warehouse-deals")
    console.log("--------------------------")
    
  }) 
  it("Validate MercuryTours", function(){
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
      browser.get("http://demo.guru99.com/test/newtours/register.php");
      console.log("--------------------------------")
      console.log("Mercury Tours Drop Down")
      console.log("-------------------------")
      result("ANGOLA");
      result("INDIA");
  }) 
  it("validate Calculator Button", function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    browser.get("https://juliemr.github.io/protractor-demo/");

    Calc(10, 20, "DIVISION");
    browser.sleep(5000);
    Calc(10, 50, "MULTIPLICATION");
    browser.sleep(5000);
    Calc(20,10, "MODULO");
    browser.sleep(5000);
    element.all(by.repeater("result in memory")).each(function (alldata) {
        alldata
          .element(by.css("td:nth-child(2)"))
          .getText()
          .then(function (ResultCol) {
            console.log(ResultCol);
          });
      });
    
   
  })
})