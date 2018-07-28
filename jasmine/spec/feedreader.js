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

        //Checks if Menu shows/hides with click
        it('shows/hides menu as expected', function () {
            //First Click
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //Second Click
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          })
    });



    //Entries Tests
    describe("Initial Entries", function() {

        //Call loadFeed function before Spec
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry in feed container', function() {
            const feedContents = $('.feed').children().length;
            expect(feedContents).toBeGreaterThan(0);
        })

    })


    //New Feed Tests
    describe("New Feed Selection", function(done) {

        let feedOriginal = '';
        let feedNew = ''

        beforeEach(function(done) {
            loadFeed(0, () => {
              feedOriginal = $('.feed').html();
              loadFeed(1, done);
            });
        });

        //Compare 2 contents above to see if they match
        it('updates content when new feed is loaded', function() {
            feedNew = $('.feed').html();
            expect(feedOriginal).not.toEqual(feedNew);
        })
      })

}());
