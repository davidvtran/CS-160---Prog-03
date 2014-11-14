#import statements
final = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 6"

warning = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 5"

navigation = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 4"

nearby = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 3"


time = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 2"

invite = Framer.Importer.load "imported/CS 160 - Prog 03 - Watch 1"

# Welcome to Framer

Framer.Device.deviceType = "apple-watch"

#setup

#invite page
invite['accept button'].on Events.Click, ->
	for layer of invite
		invite[layer].animate
			properties:
				x: 1000		
				curve: 'spring'
	Utils.delay 2.5, ->
		for layer of time
			time[layer].animate
				properties:
					x: 1000
					curve: 'spring'
				
	

nearby['flower button'].on Events.Click, ->
	for layer of nearby
		nearby[layer].animate
			properties:
				x: 1000
				curve: 'spring'
	Utils.delay 2.5, ->
		 
				
navigation['lines'].on Events.Click, ->
	for layer of navigation
		navigation[layer].animate
			properties:
				x: 1000
				curve: 'spring'
	Utils.delay 2.5, ->
		for layer of warning
			warning[layer].animate
				properties:
					x:1000



