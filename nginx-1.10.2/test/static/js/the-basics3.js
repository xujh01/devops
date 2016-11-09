        /*** 3.Ajax及时获取数据示例 ***/
        //远程数据源

        $('#ajax-remote-example .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'cities',
            displayKey: 'CityName',
            source: function(query, syncResults, asyncResults) {
                $.get('/getcities?key=' + query, function (data) {
                    asyncResults(data);
                })
            }
        });