const {Builder, By, Key} = require ('selenium-webdriver') //require builder, by, and key 
const assert = require ('assert') //require assertion package that is built into node 

const should = require('chai').should() //require chai should 


///////////
// changed test scripts to mocha in package.json so this one won't work?
//////////

//function to execute test code:
async function exampleTest(){
    //test application here:
    //launch browser
    //use builder command that we required
    //build new instance of chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    //navigate to app
    await driver.get('https://lambdatest.github.io/sample-todo-app/') //endpoint to navigatge to

    //add a todo (part of the app's test)
    //locate input field: here we used the element's id &
    //submit new to do with enter key with Key.Return
    await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

    //assert - check if new todo was added
    //last entry in list
    //this variable holds text we want to validate
    //  //li[last()] = last item in list element
    let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
        return value  //return value from get text and strore it in todoText variable 
    });
    
    //assert using node assertion:
    //strict equal checks if two strings match
    //actual value and then expected value  
    assert.strictEqual(todoText, 'Learn Selenium') //should exit with code=0

    //assert using chai should:
    //start with value you want to validate
    //todo text should equal learn selenium
    todoText.should.equal('Learn Java') // should show exited with code=1 and browser won't quit and error shows the difference
    

    //close the browser (best practice to close it when test is finished)
    await driver.quit(); 
}

//exampleTest()