# AO Front End Development Task
If you’re reading this you’ve made it through the interview stage – congratulations! 

The front end team don’t believe in interviews that put people on the spot and expect them to solve a problem or write an algorithm in the interview to prove themselves as a developer. We want candidates to display their worth in their comfort zone so here’s a task for you to complete at home in your own time.

As this is a development task, you’ll be expected to demonstrate your ability in all three pillars of the front end – HTML, CSS and JavaScript. Shocking, right? Bet you didn’t see that coming. So what do we want you to do exactly?

## Single Page Applications
Front end applications can very often boil down to pulling in data of some description from an API and displaying it to the user on the client. We do this across site at AO – pull in product data and display it to our customers – it’s pretty commonplace, no matter what industry you’re developing in. 

One page we do this on is our deals page http://ao.com/deals#/. Our deals page is what’s commonly known as a Single Page Application in that it allows the user to make changes to what data is displayed without the need for a page refresh. 

## Data
So, your mission, should you choose to accept it, is to create a simplified single page application, but with a twist. The twist is we’d like you to make something very similar to our deals page but not using our product data. Instead we want you to use Flickr to supply your data. 

Flickr have a public API that you can call which will retrieve a set of around 20 images which match a specific set of tags that you pass it. The URL to use is:
http://api.flickr.com/services/feeds/photos_public.gne

This URL needs to be the ‘src’ of a script tag in your app. How do you retrieve the data it returns? Just pop on some queries to the URL, specifically these:
?format=json&jsoncallback=nameOfYourCallback&tags=commaSeparatedListOfTags

Firstly this tells Flickr to return results in JSON format. That gets us off to a good start. Then you need to supply the name of a function (the value of ‘jsoncallback’ in the query string) that gets called upon receipt of the image data. In the above we’ve just used a placeholder ‘nameOfYourCallback’ but you’d replace this with something more meaningful. Then there’s the list of tags to pass to Flickr (the value of ‘tags’) and it’s these which will dictate the theme of your SPA.

## Task

Create an image based SPA that allows you to like / unlike photos 

So now you’ve got your data source, we can get down to business. We want you to recreate something similar to our deals page, but using images that match tags of your choice from Flickr. The tags could be anything – locations, people, sports, dancing kittens… whatever takes your fancy (keep it family friendly please!). The styling of the page should be similar to the deals page but feel free to take any artistic licence you wish– improve it, modify it, animate it… whatever you think works. 

Of course the add to basket functionality wouldn’t work on this type of page so we’d like you to modify it to an “add to favourites” option, giving the user the ability to favourite a particular image.

Instead of being able to filter products by category, as you can in our deals menu, you’ll simply allow the user to toggle the view between all images and the ones they’ve favorited.

What info you display in each image pod is up to you – each flickr image comes with some additional data to the image URL including title, description, author, date created, tags etc. How you style this additional info is up to you – follow a similar format to our deals pods or try something completely different.

Just to throw an ever so slight spanner into the works – whenever you make a call to Flickr it won’t necessarily send you the same set of images back again, so you’re probably going to need some way to store favourites locally in the browser so you don’t lose them on a page refresh. This means that when you get image data from Flickr you might have to check if it contains any of the images the user has favorited, filter those out (so they don’t display twice) and then add in the stored favourites so you can display them all together.

Here’s an example URL and callback that would return images of dogs in hats to get you started:

http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrcb&tags=dogs%20in%20hats
function flickrcb(data) {
	// start doing stuff with the data from here…
console.log(data);
}

## Tooling, libraries and frameworks

The idea of this task is that it gives a candidate plenty of opportunity to shine in whatever area of front end development they’re strong in and to demonstrate potential in others.

Feel free to use any kind of tooling or libraries (CSS or JavaScript). We love vanilla JavaScript but if you really need to use jQuery that’s ok, but be warned – we are looking for developers who don’t need to use jQuery as a crutch so if you do, make sure it’s for a good reason and it’s well written (we see a lot of messy jQuery spaghetti code – yuck!). We love React, we love ES6+, we love SASS, we love tools like Gulp and Webpack, in fact we love anything that’s reasonably modern and shows you’ve considered a tool’s suitability for the job, so use whatever you feel will help you the most.

What we’re looking for / deliverables:
- Semantic and accessible HTML
- Cleanly written, modular and re-usable CSS, using recognisable conventions
- Well thought out and architected JavaScript that shows consideration to it being testable, maintainable, extensible and re-usable
- Mobile friendly design i.e. responsive
- Either – uses some cool features only available in modern browsers (if so, your app only needs to work in latest browsers) OR a robust layout that works as far back as IE9 – you choose which!
- Imagination and fun! Be creative!
- And finally, and this is important, a README file that discusses the design and technology choices you’ve used and why, any difficulties / challenges you had and how you overcame them and anything else that helps describe your approach to this piece.

The recruiter you’re dealing with will let you know how long we’d like to give you to complete the piece. If there’s certain aspects of the task you’re struggling with don’t worry, the important thing is you have fun and let your talent shine! 

Best of luck!
 