// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 03 - Watch 5/layers.json.js"] = [
	{
		"id": 15,
		"name": "lines",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/lines.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 320,
				"height": 400
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "390282381"
	},
	{
		"id": 11,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 78,
				"y": 9,
				"width": 198,
				"height": 30
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "405637635"
	},
	{
		"id": 13,
		"name": "body",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 320,
			"height": 400
		},
		"maskFrame": null,
		"image": {
			"path": "images/body.png",
			"frame": {
				"x": 43,
				"y": 87,
				"width": 269,
				"height": 180
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1984615285"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Choose a Category/layers.json.js"] = [
	{
		"id": 21,
		"name": "background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "753429004"
	},
	{
		"id": 25,
		"name": "box",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/box.png",
			"frame": {
				"x": 37,
				"y": 355,
				"width": 685,
				"height": 617
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "753429010"
	},
	{
		"id": 47,
		"name": "text selected",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/text selected.png",
			"frame": {
				"x": 230,
				"y": 524,
				"width": 298,
				"height": 426
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "760455117"
	},
	{
		"id": 19,
		"name": "text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/text.png",
			"frame": {
				"x": 230,
				"y": 524,
				"width": 298,
				"height": 426
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1141226531"
	},
	{
		"id": 27,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 187,
				"y": 137,
				"width": 378,
				"height": 214
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "760668091"
	},
	{
		"id": 51,
		"name": "next button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/next button.png",
			"frame": {
				"x": 397,
				"y": 1098,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1886764086"
	},
	{
		"id": 55,
		"name": "back button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/back button.png",
			"frame": {
				"x": 54,
				"y": 1098,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1953740543"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Choose a Destination/layers.json.js"] = [
	{
		"id": 28,
		"name": "Group 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/Group 1.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1884384395"
	},
	{
		"id": 26,
		"name": "box",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/box.png",
			"frame": {
				"x": 33,
				"y": 359,
				"width": 685,
				"height": 617
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "435463074"
	},
	{
		"id": 24,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 32,
				"y": 128,
				"width": 688,
				"height": 192
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "434569376"
	},
	{
		"id": 38,
		"name": "text selected",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/text selected.png",
			"frame": {
				"x": 182,
				"y": 532,
				"width": 373,
				"height": 403
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "690953932"
	},
	{
		"id": 22,
		"name": "text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/text.png",
			"frame": {
				"x": 182,
				"y": 532,
				"width": 373,
				"height": 403
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1265250444"
	},
	{
		"id": 42,
		"name": "back button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/back button.png",
			"frame": {
				"x": 54,
				"y": 1097,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "104250745"
	},
	{
		"id": 46,
		"name": "next button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/next button.png",
			"frame": {
				"x": 395,
				"y": 1097,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "9652269"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Main/layers.json.js"] = [
	{
		"id": 21,
		"name": "background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1674563067"
	},
	{
		"id": 27,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 103,
				"y": 95,
				"width": 548,
				"height": 72
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "749305598"
	},
	{
		"id": 66,
		"name": "Friend Table",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/Friend Table.png",
			"frame": {
				"x": 0,
				"y": 255,
				"width": 750,
				"height": 749
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1770313480"
	},
	{
		"id": 111,
		"name": "stars2 selected",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars2 selected.png",
			"frame": {
				"x": 591,
				"y": 415,
				"width": 114,
				"height": 110
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "750914310"
	},
	{
		"id": 109,
		"name": "stars 2",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars 2.png",
			"frame": {
				"x": 591,
				"y": 415,
				"width": 114,
				"height": 110
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "750914312"
	},
	{
		"id": 97,
		"name": "stars selected",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars selected.png",
			"frame": {
				"x": 591,
				"y": 267,
				"width": 114,
				"height": 712
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "2119449489"
	},
	{
		"id": 76,
		"name": "stars",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars.png",
			"frame": {
				"x": 591,
				"y": 267,
				"width": 114,
				"height": 712
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "292639305"
	},
	{
		"id": 84,
		"name": "back button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/back button.png",
			"frame": {
				"x": 56,
				"y": 1120,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1272738574"
	},
	{
		"id": 88,
		"name": "next button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/next button.png",
			"frame": {
				"x": 402,
				"y": 1119,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1425155911"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Popup/layers.json.js"] = [
	{
		"id": 21,
		"name": "background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "2140535747"
	},
	{
		"id": 27,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 163,
				"y": 99,
				"width": 427,
				"height": 448
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1534582253"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Priority/layers.json.js"] = [
	{
		"id": 21,
		"name": "background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1674563067"
	},
	{
		"id": 27,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 39,
				"y": 22,
				"width": 670,
				"height": 192
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1211860065"
	},
	{
		"id": 66,
		"name": "Friend Table",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/Friend Table.png",
			"frame": {
				"x": 0,
				"y": 255,
				"width": 750,
				"height": 749
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1448823655"
	},
	{
		"id": 111,
		"name": "stars2 selected",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars2 selected.png",
			"frame": {
				"x": 591,
				"y": 415,
				"width": 114,
				"height": 110
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "750914310"
	},
	{
		"id": 109,
		"name": "stars 2",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars 2.png",
			"frame": {
				"x": 591,
				"y": 415,
				"width": 114,
				"height": 110
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "750914312"
	},
	{
		"id": 76,
		"name": "stars",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/stars.png",
			"frame": {
				"x": 591,
				"y": 267,
				"width": 114,
				"height": 712
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1961849198"
	},
	{
		"id": 126,
		"name": "group 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/group 1.png",
			"frame": {
				"x": 637,
				"y": 446,
				"width": 17,
				"height": 49
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "371034480"
	},
	{
		"id": 130,
		"name": "group 2",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/group 2.png",
			"frame": {
				"x": 631,
				"y": 301,
				"width": 32,
				"height": 50
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "73968941"
	},
	{
		"id": 133,
		"name": "group 3",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/group 3.png",
			"frame": {
				"x": 632,
				"y": 604,
				"width": 31,
				"height": 51
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "842012948"
	},
	{
		"id": 136,
		"name": "group 4",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/group 4.png",
			"frame": {
				"x": 630,
				"y": 899,
				"width": 36,
				"height": 49
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1062354602"
	},
	{
		"id": 139,
		"name": "group 5",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/group 5.png",
			"frame": {
				"x": 629,
				"y": 752,
				"width": 31,
				"height": 50
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "188049652"
	},
	{
		"id": 84,
		"name": "back button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/back button.png",
			"frame": {
				"x": 56,
				"y": 1120,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1272738574"
	},
	{
		"id": 88,
		"name": "next button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/next button.png",
			"frame": {
				"x": 402,
				"y": 1119,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1425155911"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Splash Screen 2/layers.json.js"] = [
	{
		"id": 21,
		"name": "background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1505484447"
	},
	{
		"id": 27,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 146,
				"y": 219,
				"width": 454,
				"height": 309
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "647803532"
	},
	{
		"id": 38,
		"name": "button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/button.png",
			"frame": {
				"x": 204,
				"y": 759,
				"width": 341,
				"height": 113
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "72440964"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["CS 160 - Prog 3 - Time/layers.json.js"] = [
	{
		"id": 28,
		"name": "Group 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/Group 1.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 750,
				"height": 1334
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1380370975"
	},
	{
		"id": 69,
		"name": "time next",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/time next.png",
			"frame": {
				"x": 34,
				"y": 172,
				"width": 685,
				"height": 617
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1632509347"
	},
	{
		"id": 26,
		"name": "time",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/time.png",
			"frame": {
				"x": 34,
				"y": 172,
				"width": 685,
				"height": 617
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "758819040"
	},
	{
		"id": 24,
		"name": "title text",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/title text.png",
			"frame": {
				"x": 111,
				"y": 128,
				"width": 527,
				"height": 72
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1075951338"
	},
	{
		"id": 54,
		"name": "arrows",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/arrows.png",
			"frame": {
				"x": 310,
				"y": 313,
				"width": 283,
				"height": 353
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "314341252"
	},
	{
		"id": 90,
		"name": "down arrow",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/down arrow.png",
			"frame": {
				"x": 132,
				"y": 569,
				"width": 112,
				"height": 97
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1075980844"
	},
	{
		"id": 70,
		"name": "up arrow",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/up arrow.png",
			"frame": {
				"x": 132,
				"y": 313,
				"width": 170,
				"height": 140
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1075980848"
	},
	{
		"id": 65,
		"name": "curious checked",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/curious checked.png",
			"frame": {
				"x": 243,
				"y": 740,
				"width": 263,
				"height": 246
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "529714721"
	},
	{
		"id": 60,
		"name": "curious",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/curious.png",
			"frame": {
				"x": 243,
				"y": 740,
				"width": 263,
				"height": 246
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1421672927"
	},
	{
		"id": 42,
		"name": "back button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/back button.png",
			"frame": {
				"x": 54,
				"y": 1097,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1430338235"
	},
	{
		"id": 46,
		"name": "next button",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 750,
			"height": 1334
		},
		"maskFrame": null,
		"image": {
			"path": "images/next button.png",
			"frame": {
				"x": 395,
				"y": 1097,
				"width": 303,
				"height": 100
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1731020885"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-6-silver"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();