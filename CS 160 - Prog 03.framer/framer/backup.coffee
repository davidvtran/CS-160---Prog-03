# This imports all the layers for "CS 160 - Prog 3 - Priority" into cs160Prog3PriorityLayers


#import statements
sent = Framer.Importer.load "imported/CS 160 - Prog 3 - Popup"
friends = Framer.Importer.load "imported/CS 160 - Prog 3 - Main"
time = Framer.Importer.load "imported/CS 160 - Prog 3 - Time"
preference = Framer.Importer.load "imported/CS 160 - Prog 3 - Priority"
destination = Framer.Importer.load "imported/CS 160 - Prog 3 - Choose a Destination"
category = Framer.Importer.load "imported/CS 160 - Prog 3 - Choose a Category"
splash = Framer.Importer.load "imported/CS 160 - Prog 3 - Splash Screen 2"

#setup
category['next button'].opacity = 0
destination['next button'].opacity = 0
preference['next button'].opacity = 0
preference['group 1'].opacity = 0
preference['group 2'].opacity = 0
preference['group 3'].opacity = 0
preference['group 4'].opacity = 0
preference['group 5'].opacity = 0

#splash page
splash['button'].on Events.Click, ->
	for layer of splash
		splash[layer].animate
			properties:
				x: 1000

#category page
category['text'].on Events.Click, ->
	category['text'].opacity = 0
	category['next button'].opacity = 1
	
category['next button'].on Events.Click, ->
	for layer of category
		category[layer].animate
			properties:
				x: 1000

#destination page
destination['text'].on Events.Click, ->
	destination['text'].opacity = 0
	destination['next button'].opacity = 1
				
destination['next button'].on Events.Click, ->
	for layer of destination
		destination[layer].animate
			properties:
				x: 1000

preference['group 1'].on Events.Click, ->
	preference['group 1'].opacity = 1

preference['group 2'].on Events.Click, ->
	preference['group 2'].opacity = 1
	
preference['group 3'].on Events.Click, ->
	preference['group 3'].opacity = 1
	
preference['group 4'].on Events.Click, ->
	preference['group 4'].opacity = 1
	
preference['group 5'].on Events.Click, ->
	preference['group 5'].opacity = 1
	preference['next button'].opacity = 1
	
preference['next button'].on Events.Click, ->
	for layer of preference
		preference[layer].animate
			properties:
				x: 1000
	
			
#time page	
time['up arrow'].on Events.Click, ->
	time['time'].opacity = 0
	
time['down arrow'].on Events.Click, ->
	time['time'].opacity = 1
	
time['curious'].on Events.Click, ->
	time['curious'].opacity = (1 + time['curious'].opacity) % 2
	
# time['curious checked'].on Events.Click, ->
# 	time['curious'].opacity = 1
	
time['next button'].on Events.Click, ->
	for layer of time
		time[layer].animate
			properties:
				x: 1000

#friends page
friends['stars 2'].on Events.Click, ->
	friends['stars 2'].opacity = 0
	
friends['next button'].on Events.Click, ->
	for layer of friends
		friends[layer].animate
			properties:
				x: 1000
	Utils.delay 2.5, ->
		for layer of sent
			sent[layer].animate
				properties:
					x: 1000
		

# sent['background'].on Events.Click, ->
# 	for layer of sent
# 		sent[layer].animate
# 			properties:
# 				x: 1000


				

	
	
