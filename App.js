Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    items: [
        {
            xtype: 'container',
            itemId: 'DashboardContainer',
            html: 'Dashboard Container',
            
            border: 5,
            margin: 10,
            style: {
                borderColor: 'green',
                borderStyle: 'solid'
            },
            items: [
                {
                    xtype: 'container',
                    itemId: 'DescriptionHeader',
                    html: 'Description Header',
                    colspan: 1,
                    border: 5,
                    margin: 10,
                    style: {
                        borderColor: 'blue',
                        borderStyle: 'solid'
                    }
                },
                {
                    xtype: 'container',
                    itemId: 'SummaryContent',
                    colspan: 1,
                    border: 5,
                    margin: 10,
                    style: {
                        borderColor: 'red',
                        borderStyle: 'solid'
                    },
                    layout: 'column',
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'HealthPanel',
                            columnWidth: .25,
                            border: 5,
                            margin: 10,
                            style: {
                                borderColor: 'orange',
                                borderStyle: 'solid'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    itemId: 'ReleaseNotes',
                                    html: 'Release Notes',
                                    colspan: 1,
                                    border: 5,
                                    margin: 10,
                                    style: {
                                        borderColor: 'pink',
                                        borderStyle: 'solid'
                                    }
                                },
                                {
                                    xtype: 'container',
                                    itemId: 'FeatureStatus',
                                    html: 'Feature Status',
                                    colspan: 1,
                                    border: 5,
                                    margin: 10,
                                    style: {
                                        borderColor: 'purple',
                                        borderStyle: 'solid'
                                    },
                                },
                                {
                                    xtype: 'container',
                                    itemId: 'BlockedWork',
                                    html: 'Blocked Work',
                                    colspan: 1,
                                    border: 5,
                                    margin: 10,
                                    style: {
                                        borderColor: 'yellow',
                                        borderStyle: 'solid'
                                    },
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'Chart',
                            html: 'Chart Displays Here',
                            columnWidth: .75,
                            border: 5,
                            margin: 10,
                            style: {
                                borderColor: 'khaki',
                                borderStyle: 'solid'
                            },
                        }
                    ]
                }

            ]
        },
    ],

    launch: function() {
        //Write app code here
        console.log('foo bar baz');
    }
});
