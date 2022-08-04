const {Builder, By, Key} = require ('selenium-webdriver') //require builder, by, and key 

const should = require('chai').should() //require chai should 

//MOCHA:
//describe block:
//pass title, function
describe('add another todo tests', function(){

    //it block: sits inside our describe block
    it('successfully add another todo to app', async function(){
        //build new instance of chrome browser
        let driver = await new Builder().forBrowser('chrome').build();

        //navigate to app
        await driver.get('https://lambdatest.github.io/sample-todo-app/') //endpoint to navigatge to

        //add a todo (part of the app's test)
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

        //assert - check if new todo was added
        let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
            return value  //return value from get text and strore it in todoText variable 
        });
        
        //assert using chai should:
        //start with value you want to validate
        //todo text should equal learn selenium
        todoText.should.equal('Learn Selenium') // should show exited with code=1 and browser won't quit and error shows the difference

        //close the browser (best practice to close it when test is finished)
        await driver.quit(); 
    })

    it('adding a new test for reporting', async function(){
        //build new instance of chrome browser
        let driver = await new Builder().forBrowser('chrome').build();

        //navigate to app
        await driver.get('https://lambdatest.github.io/sample-todo-app/') //endpoint to navigatge to

        //add a todo (part of the app's test)
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

        //assert - check if new todo was added
        let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
            return value  //return value from get text and strore it in todoText variable 
        });
        
        //assert using chai should:
        //start with value you want to validate
        //todo text should equal learn selenium
        todoText.should.equal('Learn Java') // should show exited with code=1 and browser won't quit and error shows the difference

        //close the browser (best practice to close it when test is finished)
        await driver.quit(); 
    })
})

 

