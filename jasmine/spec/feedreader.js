/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL listed', function() {
            for (const feed of allFeeds) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe('');
            }
        });

        it('has a name', function() {
            for (const feed of allFeeds) {
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe('');
            }
        });

    });


    //MENU Tests
    describe('The menu', function() {

            const menuIcon = $('.menu-icon-link');

        //Check for menu hidden on load
        it('has a hidden menu by default', function() {
            const menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
        });

        //Checks if first 'click' shows menu
        it('shows menu when icon is clicked', function () {
            menuIcon.trigger('click');

            //Get current state of class
            const menuHidden = $('body').hasClass('menu-hidden');

            expect(menuHidden).toBe(false);
          })

          //Checks if second click hides menu again
        it('hides menu again when icon is clicked second time', function () {
            menuIcon.trigger('click');

            //Get current state of class
            const menuHidden = $('body').hasClass('menu-hidden');

            expect(menuHidden).toBe(true);
          })
    });



    //Entries Tests
    describe("Initial Entries", function() {

        //Wait for Feed to be built
        beforeEach(function(done) {
          setTimeout(function() {
            init();
            done();
          }, 500);
        });

        it('has at least one entry in feed container', function(done) {
            const feedContents = $('.feed').children().length;

            expect(feedContents).toBeGreaterThan(0);
            done();
        })

    })


    //New Feed Tests
    describe("New Feed Selection", function() {

        //Wait for Feed to load
        beforeEach(function(done) {
          setTimeout(function() {
            init();
            done();
          }, 2000);
        });

        it('updates content when new feed is loaded', function(done) {
            //Gets value of first Feed Entry BEFORE click
            const feedChildPre = $('.feed:first-child');

            const firstFeed = $('.feed-list:first-child');

            //Triggers 'click' on new Feed
            firstFeed.trigger('click');

            //Gets NEW value of first Feed Entry
            const feedChildPost = $('.feed:first-child');

            expect(feedChildPre).not.toBe(feedChildPost);

            done();
        })
      })

}());
