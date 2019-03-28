/* Challenge 6; starting console and saying hello */
console.log("App is alive");

/**
 * Challenge 6; Switcher for the channel name in the app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log channel switch
    console.log("Tuning in to channel", channelName);

    //Write new channel to right app bar
    document.getElementById('channel-name').innerHTML = channelName;

    //Challenge 6; change the location of channel
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/lump.ticking.lifters" target="_blank"><strong>lump.ticking.lifters</strong></a>';

    /* Challenge 6; liking channel on click */
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');

    /* Challenge 6; moving the highlight of selected channel*/
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

/* Challenge 6; liking channel on click, filled star */
function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

/**
 * Challenge 6; taptab selects given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // Challenge 6; taptab removes selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...Challenge 6; taptab logs the new tab on change...
    console.log('Changing to tab', tabId);

    //...Challenge 6; taptab adds selection to  given tab button; id is passed via argument tabId
    $(tabId).addClass('selected');
}

/**
 * Challenge 6; show/hide emojis menu
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
