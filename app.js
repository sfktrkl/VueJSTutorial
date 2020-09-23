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

        // Data & Methods
        firstTitle: 'Data & Methods',
        time: 'Night',

        // Data Binding
        link: 'https://github.com/sfktrkl',
        sfktrkl: 'SfkTRKL',
        rawHTML: '<a href="https://github.com/sfktrkl">SfkTRKL GitHub</a>',
    },
    methods: {
        // Data & Methods
        gMorning: function () {
            return 'Good Morning';
        },
        gTime: function (time) {
            return 'Good ' + time;
        },
        gNight: function () {
            // Properties can also be accessed inside the methods
            return 'Good ' + this.time;
        },
    }
})