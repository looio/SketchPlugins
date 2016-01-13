// (command Ö)


 /**
 * Distributes the selected elements horizontally, with the same distante beetween them.
 * If only one layer is selected, the layer will be moved by the spacing that has been input.
 *
 * Florian Schulz Copyright 2014, MIT License
 */


@import '../sketchSelect.js'
@import '../inventory.js'

var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action

    var elements = [];
    var left = 0;

    if (selection.count() > 1) {
        var spacing = [[doc askForUserInput:"Horizontal Spacing" ofType:1 initialValue:"0"] integerValue];

        // convert selection to standard array
        for (var i = 0; i < selection.count(); i++) {
            elements.push(selection[i]);
        }

        // sort elements by left position
        elements.sort(sortLeft);

        // get the first position
        left = elements[0].frame().left();

        elements.each(function () {
            this.frame().setLeft(left);
            left += this.frame().width() + spacing;
        })
    } else if (selection.count() == 1) {
        var layer = selection[0];
        var parent = layer.parentGroup();

        com.getflourish.common.showMarginsOf(layer);

        var spacing = [[doc askForUserInput:"Shift by:" ofType:1 initialValue:"0"] integerValue];
        left = selection[0].frame().left() + spacing;
        selection[0].frame().setLeft(left);

        com.getflourish.common.showMarginsOf(layer);
    }
}


function sortLeft(a, b){
  return a.frame().left() - b.frame().left();
}


