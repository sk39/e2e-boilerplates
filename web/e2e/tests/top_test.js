Feature('Sample Test');

Before(async (I) => {
    I.amOnPage("/")
})

Scenario('load page', async (I) => {
    I.see("ここにAPIの結果が表示されます")
});

Scenario('click test api', async (I) => {
    I.click("API TEST");
    I.see("Test API success. \"[success] post test api\"")
});

Scenario('click test error api', async (I) => {
    I.click("API TEST ERROR");
    I.see("Test API Failed. \"Request failed with status code 403\"")
});
