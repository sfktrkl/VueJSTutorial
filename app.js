// Create a Vue instance
// It is controlling the a part (or all) of the application.
// Each components in the app can be controlled by a different vue instance.
new Vue({
    // Which element of the page will be controlled by this instance
    el: '#vue-app',
    // This is where we store all data for this instance
    data: {
        // Vue Instance
        name: 'VueJS Tutorial',
    }
})