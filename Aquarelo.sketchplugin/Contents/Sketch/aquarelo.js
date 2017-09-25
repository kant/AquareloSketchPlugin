function firstFill(context) {
  	var doc = context.document;
  	var selected = context.selection;
  	if (selected.count() > 0) {
		if (selected.count() == 1) {
			for (var i=0; i < [selected count]; i++) {
				var layer = [selected objectAtIndex:i]
				if(layer.className() == "MSLayerGroup" || layer.className() == "MSArtboardGroup" || layer.className() == "MSSymbolInstance" || layer.className() == "MSSymbolMaster"){
					doc.showMessage("❗️ Please before ungroup or detach from symbol \"" + layer.name() + "\"");
				} else {
						if (layer.className() != "MSTextLayer") {
							var layerFill = selected[0].style().fills().firstObject().color().immutableModelObject().hexValue().toString();
							var apiURL = [NSURL URLWithString:'aquarelo://first/' + layerFill];
							if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
								doc.showMessage("✔️ Color fill #" + layerFill + " was sented for first to Aquarelo");
							} else {
								[[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
							}  
						} else {
							doc.showMessage("❗️ Please select shape layer");
						}
				}
			}
		} else {
			doc.showMessage("❗️ Please select only a layer");
		}
	} else {
		doc.showMessage("❗️ Please select a layer");
	}
};





function lastFill(context) {
	 var doc = context.document;
  	var selected = context.selection;
  	if (selected.count() > 0) {
		if (selected.count() == 1) {
			for (var i=0; i < [selected count]; i++) {
				var layer = [selected objectAtIndex:i]
				if(layer.className() == "MSLayerGroup" || layer.className() == "MSArtboardGroup" || layer.className() == "MSSymbolInstance" || layer.className() == "MSSymbolMaster"){
					doc.showMessage("❗️ Please before ungroup or detach from symbol \"" + layer.name() + "\"");
				} else {
					if (layer.className() != "MSTextLayer") {
						var layerFill = selected[0].style().fills().firstObject().color().immutableModelObject().hexValue().toString();
						var apiURL = [NSURL URLWithString:'aquarelo://last/' + layerFill];
						if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
							doc.showMessage("✔️ Color fill #" + layerFill + " was sented for last to Aquarelo");
						} else {
							[[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
						}  
					} else {
						doc.showMessage("❗️ Please select shape layer");
					}
				}
			}
		} else {
			doc.showMessage("❗️ Please select only a layer");
		}
	} else {
		doc.showMessage("❗️ Please select a layer");
	}
};





function firstBorder(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
	if (selected.count() == 1) {
		for (var i=0; i < [selected count]; i++) {
				var layer = [selected objectAtIndex:i]
				if(layer.className() == "MSLayerGroup" || layer.className() == "MSArtboardGroup" || layer.className() == "MSSymbolInstance" || layer.className() == "MSSymbolMaster"){
					doc.showMessage("❗️ Please before ungroup or detach from symbol \"" + layer.name() + "\"");
				} else {
					if (layer.className() != "MSTextLayer") {
					    var borderColor = selected[0].style().borders().firstObject().color().immutableModelObject().hexValue().toString();
					   	var apiURL = [NSURL URLWithString:'aquarelo://first/' + borderColor];
					   	if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
						   	 doc.showMessage("✔️ Border color #" + borderColor + " was sented for first to Aquarelo");
					   	} else {
						   	 [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
					   	}
					} else {
							doc.showMessage("❗️ Please select shape layer");
					}
				}
		}
	} else {
		doc.showMessage("❗️ Please select only a layer");
	}
  } else {
    doc.showMessage("❗️ Please select a layer");
  }
};





function lastBorder(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
	if (selected.count() == 1) {
		for (var i=0; i < [selected count]; i++) {
				var layer = [selected objectAtIndex:i]
				if(layer.className() == "MSLayerGroup" || layer.className() == "MSArtboardGroup" || layer.className() == "MSSymbolInstance" || layer.className() == "MSSymbolMaster"){
					doc.showMessage("❗️ Please before ungroup or detach from symbol \"" + layer.name() + "\"");
				} else {
					if (layer.className() != "MSTextLayer") {
					    var borderColor = selected[0].style().borders().firstObject().color().immutableModelObject().hexValue().toString();
					   	var apiURL = [NSURL URLWithString:'aquarelo://last/' + borderColor];
					   	if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
						   	 doc.showMessage("✔️ Border color #" + borderColor + " was sented for last to Aquarelo");
					   	} else {
						   	 [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
					   	}
			   		} else {
							doc.showMessage("❗️ Please select shape layer");
					}
				}
		}
   	} else {
		doc.showMessage("❗️ Please select only a layer");
	}
  } else {
    doc.showMessage("❗️ Please select a layer");
  }
};




function firstText(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
	  
	if (selected.count() == 1) {
		var loop = [selected objectEnumerator];
		while (layer = [loop nextObject]) {    
			if (layer.isKindOfClass(MSTextLayer)) {
			    var textFill = selected[0].textColor().immutableModelObject().hexValue().toString();
			   	var apiURL = [NSURL URLWithString:'aquarelo://first/' + textFill];
			   	 if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
				   	 doc.showMessage("✔️ Text color #" + textFill + " was sented for first to Aquarelo");
			   	 } else {
				   	 [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
			   	 }
			} else {
				doc.showMessage("❗️ Please select a text layer");
			}
		}
	} else {
		doc.showMessage("❗️ Please select only a layer");
	}
  } else {
    doc.showMessage("❗️ Please select a layer");
  }
};





function lastText(context) {
  var doc = context.document;
  var selected = context.selection;
  if (selected.count() > 0) {
	if (selected.count() == 1) {
		var loop = [selected objectEnumerator];
		while (layer = [loop nextObject]) {
			if (layer.isKindOfClass(MSTextLayer)) {
			    var textFill = selected[0].textColor().immutableModelObject().hexValue().toString();
			   	var apiURL = [NSURL URLWithString:'aquarelo://last/' + textFill];
			   	 if ([[NSWorkspace sharedWorkspace] openURL:apiURL]) {
				   	 doc.showMessage("✔️ Text color #" + textFill + " was sented for last to Aquarelo");
			   	 } else {
				   	 [[NSWorkspace sharedWorkspace] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"http://www.cusaro.it/aquarelo/index.html"]]];
			   	 }
			} else {
				doc.showMessage("❗️ Please select a text layer");
			}
		}
	} else {
		doc.showMessage("❗️ Please select only a layer");
	}
  } else {
    doc.showMessage("❗️ Please select a layer");
  }
};
