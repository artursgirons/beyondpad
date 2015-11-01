app.dataadapter.remote = {
    load: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    save: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    update: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    remove: function (url, req) {
        app.lib.cursorLoading();
        return this.request(url, req, 'DELETE').done(this.onSuccess).fail(this.onError);
    },

    request: function (url, req, method) {
        var promise = app.lib.retry(function () {
            return $.ajax({
                url: url,
                contentType: 'application/json',
                type: method || 'POST',
                dataType: 'json',
                data: JSON.stringify(req),
                cache: false
            });
        });

        app.dataadapter.remote.requestCount++;

        if (app.dataadapter.remote.requestCount >= 5) {
            app.dataadapter.remote.requestCount = 0;
            alert('You are making quite a lot requests to server per second');
        }

        if (app.dataadapter.remote.timeout === null) {
            app.dataadapter.remote.timeout = setTimeout(function () {
                app.dataadapter.remote.requestCount = 0;
                app.dataadapter.remote.timeout = null;
            }, 1000);
        }

        return promise;
    },

    requestCount: 0,
    timeout: null,

    onSuccess: function (res) {
        app.lib.cursorDefault();
    },

    onError: function (jqXHR, textStatus, errorThrown) {
        jqXHR = jqXHR || {};

        app.lib.cursorDefault();

        logException('dataadapter remote error', jqXHR.statusText + ';' + jqXHR.readyState + ';' + jqXHR.status + ';' + jqXHR.responseText);

        if (jqXHR.status == 403) {
            window.location = '/app';
            return;
        }

        alert('Unable to complete request to server try again or try to reload page');
    }
}