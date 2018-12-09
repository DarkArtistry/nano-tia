# TIA_NANO

> a [Kenneth Goh Zhen Hao . 振豪 . 恭一](https://www.kennethgzh.com) production.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please checkout [Available Scripts](#Available_Scripts) to run project.

[TIA_NANO](https://tianano-kkgzh.firebaseapp.com/) is hosted and available. Check out the link.

## Building the Project

### Available APIs

Checking out the structure and size of the information:

![postman](https://github.com/DarkArtistry/nano-tia/blob/develop/readmeImage/allPostMan.png "postman")

From the postman I could tell that the information were neatly packed and the size was just 200kb. I explored and thought about what are other extras that I could do with the information.

* Categorizing them and rendering according to categories
* Create a search by tag and render accordingly

### Navigation Bar and CSS library

For this project i'm making use of [React-Bootstrap](https://react-bootstrap.github.io) to create my navigation bar and style the layout in [Grid Formatting](https://react-bootstrap.github.io/layout/grid/)

Also I designed the extra wording "NANO" in my logo, to make it feel more personalized. haha.

### React & Redux

Then I went back to refresh my memory on react and redux.
There were component lifecycle changes in the react library that I to make use of and also I had a blur memory of redux's structure at that point of time. Also i would like to mention that i'm using [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for this project.

* #### React
  * [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)
  * [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)
  * [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)

These were the additional component lifecycle functions that I used in this project. and my previous understanding of [componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops) and [componentWillUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate) will be deprecated.

* #### Redux

I had to refresh my memory on the store, thankfully i remembered of a Summarized [Redux Dev Guide](http://devguides.io/redux/) that I used previously.

So basically we :
1. make use of [react-redux](https://www.npmjs.com/package/react-redux) to create the Store.
2. Pass in the reducers in the store where i also integrated a [middleware redux-thunk](https://www.npmjs.com/package/redux-thunk) (although i did not make much use of the current middleware which was supposed to normalize the api and send out fetch request).
3. create the action file that sends out the dispatch to the reducers.

### Dealing with the Load Time, SEO Audit and infinite scroll

> i must say at this point, i totally forgot i had to do the pay wall feature. so i only added that after this.

what i did was :

1. #### I saved the list of 30 post in the redux store. made use of [react-html-parser](https://www.npmjs.com/package/react-html-parser) to render the content.
2. #### Check for the availbility of the lower sized images, set the alt text.
3. #### Recheck and touch up on the CSS styling.
4. #### Run the Audit

  ![audit1](https://github.com/DarkArtistry/nano-tia/blob/develop/readmeImage/chromeAudit1.png)

  from the image which was the first audit using chrome dev tools there some missing images that did not had alt text and loading all post at once on the loading screen means the images took time to load that were loading. I had to set an infinte loop and load only 5 post per render.
5. Set the rendering to 5 news.  
6. #### Set a counter for the current rendered index of the posts.
7. #### Set the infinite loop based on rerendering from the start of the index. HAHAHAHA. i got help from stackoverflow and javascriptinfo of how to check if the page was near the bottom.
[Window sizes and scrolling](https://javascript.info/size-and-scroll-window)
[Check if a user has scrolled to the bottom](https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom)
```
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       alert("near bottom!");
   }
});
```
my code:
```
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
console.log('hi', window.scrollY, window.innerHeight, scrollHeight, newsDisplay.length)
if(window.scrollY + window.innerHeight > scrollHeight - 100) {
  // NOTE : load next 5
  if (currentCount === allNews.length) {
    let nextFive = allNews.slice(0, 5);
    this.setState({
      newsDisplay: [...newsDisplay,...nextFive],
      currentCount: 0,
    });
  } else {
    let nextFive = allNews.slice(currentCount, currentCount + 5);
    this.setState({
      newsDisplay: [...newsDisplay,...nextFive],
      currentCount: currentCount + nextFive.length,
    });
  }
}
```
8. #### Set the timing on each post with [moment.js](https://momentjs.com/docs/#/use-it/)
9. #### Back to styling the CSS and run my Audit again
  ![audit2](https://github.com/DarkArtistry/nano-tia/blob/develop/readmeImage/chrome_audit2.png)

  ![audit2reasons](https://github.com/DarkArtistry/nano-tia/blob/develop/readmeImage/chromeaudit2reason.png)

So there were images, liek the auditors image size that were quite big. I went back to check if there were any smaller sized images provided in the return value but they were not available.

10. #### Read the assignment document and realised. Oh Gosh.. Pay wall!

### Pay wall !

So the pay wall for my part was made quite simple, I basically store the view count in the redux store. and everytime they view the detail page i add a count to it, with componentdidmount.

If the count Exceeds 5, then the news detail component will have paywalled set to true, which then renders the pay walled CSS.

I basically, went to TIA's website inspect it and get the paywalled class's CSS codes. This is where i learn about the css [::after ](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

Credits :

I would like to thank [Prima](https://www.linkedin.com/in/primaulia/?originalSubdomain=sg) my GA instructor, whom thought me literally everything i need to know and gave me strong foundation to even CS.

And [Eric Lu](https://www.linkedin.com/in/ericluwj/?originalSubdomain=sg) the first person that gave me a chance to work as a software engineer and thought me many advance modules, and let me handled task that gradually built my confidence as a software engineer.


## <a name="#Available_Scripts">Available Scripts</a>

In the project directory, you can run:

### `npm install` or `yarn install`

to begin

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
