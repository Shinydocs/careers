/*jshint esversion: 8, bitwise: false*/

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function log(message) {
    if (message.startsWith(">")) {
        console.log("%c" + message, "color:#20C20E");
    } else {
        console.log(message);
    }
    await sleep(Math.max(2000, message.length * 70));
}

async function careers() {
    await sleep(5000);
    console.clear();
    await log("> Psst...");
    await log("> over here...");
    await log("👉 *me?* 👈");
    await log("> Yes you!");
    await log("> What are you doing here? Are you a developer? 👩‍💻");
    await log("> If you are -- you've come to the right place!");
    await log("> Do you want to work with awesome 😎 people?");
    await log("> Of course you do.");
    await log("> Okay. Well, if you solve this puzzle you can skip the whole resume thing and schedule yourself an interview.");
    await log("> Let's do this! Leeeeeeeeeeeeeeroy!");
    await log("");
    await log("    Ben would like to build a square-based pyramid using cannonballs.");
    await log("    Given x number of cannonballs:");
    await log("        1. How many layers high would it be?");
    await log("        2. How many cannonballs would be used?");
    await log("        3. How many cannonballs would be remaining?");
    await log("    Implement buildCannonballPyramid(x), and return a result with numberOfLayers, numberOfCannonballsUsed, and numberOfCannonballsRemaining");
    await log("    Call testCannonballPyramid() to check your answer.");
    await log("");
    await log("Get started with:");
    await log(buildCannonballPyramid.toString());
    await log("");
    await log("> Good Luck!");
    await log("");
    await log("> This message will self-destruct in...");
    await log("> 3...........💣");
    await log("> ....2.......💣");
    await log("> ........1...💣");
    await log("> ............💥");
}

function buildCannonballPyramid(x) {
    return { numberOfLayers: 0, numberOfCannonballsUsed: 0, numberOfCannonballsRemaining: 0 };
}

function verify(cn, cl, cu, cr) {
    var r = buildCannonballPyramid(cn);
    var success = (r.numberOfLayers === cl && r.numberOfCannonballsUsed === cu && r.numberOfCannonballsRemaining === cr);
    console.log((success ? "✔️ " : "❌ ") + cn);
    return success;
}

function testCannonballPyramid() {
    var itsallgood = true;
    itsallgood = itsallgood & verify(0, 0, 0, 0);
    itsallgood = itsallgood & verify(1, 1, 1, 0);
    itsallgood = itsallgood & verify(2, 1, 1, 1);
    itsallgood = itsallgood & verify(5, 2, 5, 0);
    itsallgood = itsallgood & verify(6, 2, 5, 1);
    itsallgood = itsallgood & verify(14, 3, 14, 0);
    itsallgood = itsallgood & verify(15, 3, 14, 1);
    itsallgood = itsallgood & verify(100000, 66, 98021, 1979);
    itsallgood = itsallgood & verify(1000000, 143, 984984, 15016);

    if (itsallgood) {
        console.log("Huzzah! 🎉 Go ahead and schedule yourself an interview at https://calendly.com/shinydocs-hr-interview/screen. Don't forget to submit your solution.");
    } else {
        console.log("oops, that didn't work");
    }
}

careers();
