function projectInterface() {
    // declare a public run function
    this.run = run;
    function run() {
        // initialize all functions here
        doSomething();
    }

    // --------------------------------------------------
    // this does something because something
    // --------------------------------------------------
    function doSomething() {
        if(true === true) {
            console.log("truth");
        }
    }
}
// create a public object
var knowYourDinosaurs = new projectInterface();
// run functions
knowYourDinosaurs.run();
