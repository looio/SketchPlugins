// (shift cmd option i)


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;


    var persistent = [[NSThread mainThread] threadDictionary];
    var initial = 10;
    if (persistent["com.getflourish.increments"] != NaN) initial = persistent["com.getflourish.increments"];
    var value = parseFloat([doc askForUserInput:"Increments:" initialValue:initial]);
    persistent["com.getflourish.increments"] = value;

}