function skillsMember() {
    return {
        Request: function (url, data, callback) {
            $.ajax({
                url: url,
                type: 'POST',
                data: data,
                success: function (response) {
                    callback(response);
                }
            });
        }
    }
}