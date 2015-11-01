var uwa = {
    start: function () {

        Windows.UI.WebUI.WebUIApplication.addEventListener("activated", function (args) {
            if (args.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
                if (args.detail && args.detail[0]) {
                    uwa.launchPath = args.detail[0].arguments;
                }
            }
        });

        window.alert = function (message) {
            var msg = new Windows.UI.Popups.MessageDialog(message, "Beyondpad");
            msg.showAsync();
        };

        try {
            uwa.setAppBarColors('#F8F8F8', '#FFFFFF');
        } catch (ex) { }

    },
    setAppBarColors: function (brandColorHex, brandColorInactiveHex) {
        if (typeof Windows !== 'undefined' && typeof Windows.UI !== 'undefined' && typeof Windows.UI.ViewManagement !== 'undefined') {

            var brandColor = uwa.hexStrToRGBA(brandColorHex);
            var brandColorInactive = uwa.hexStrToRGBA(brandColorInactiveHex);

            var appTitleBar = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;

            var foreground = uwa.hexStrToRGBA('#555');
            var foregroundInactive = uwa.hexStrToRGBA('#999');

            appTitleBar.foregroundColor = foreground;
            appTitleBar.backgroundColor = brandColor;


            appTitleBar.buttonForegroundColor = foreground;
            appTitleBar.buttonBackgroundColor = brandColor;

            appTitleBar.buttonHoverForegroundColor = foregroundInactive;
            appTitleBar.buttonHoverBackgroundColor = brandColorInactive;


            appTitleBar.inactiveForegroundColor = foregroundInactive;
            appTitleBar.inactiveBackgroundColor = brandColorInactive;


            appTitleBar.buttonInactiveForegroundColor = foregroundInactive;
            appTitleBar.buttonInactiveBackgroundColor = brandColorInactive;

            appTitleBar.buttonInactiveHoverForegroundColor = foregroundInactive;
            appTitleBar.buttonInactiveHoverBackgroundColor = brandColorInactive;


            appTitleBar.buttonPressedForegroundColor = foregroundInactive;
            appTitleBar.buttonPressedBackgroundColor = brandColorInactive;
        }
    },
    hexStrToRGBA: function (hexStr) {
        // RGBA color object
        var colorObject = { r: 255, g: 255, b: 255, a: 255 };

        // remove hash if it exists
        hexStr = hexStr.replace('#', '');

        if (hexStr.length === 6) {
            // No Alpha
            colorObject.r = parseInt(hexStr.slice(0, 2), 16);
            colorObject.g = parseInt(hexStr.slice(2, 4), 16);
            colorObject.b = parseInt(hexStr.slice(4, 6), 16);
            colorObject.a = parseInt('0xFF', 16);
        } else if (hexStr.length === 8) {
            // Alpha
            colorObject.r = parseInt(hexStr.slice(0, 2), 16);
            colorObject.g = parseInt(hexStr.slice(2, 4), 16);
            colorObject.b = parseInt(hexStr.slice(4, 6), 16);
            colorObject.a = parseInt(hexStr.slice(6, 8), 16);
        } else if (hexStr.length === 3) {
            // Shorthand hex color
            var rVal = hexStr.slice(0, 1);
            var gVal = hexStr.slice(1, 2);
            var bVal = hexStr.slice(2, 3);
            colorObject.r = parseInt(rVal + rVal, 16);
            colorObject.g = parseInt(gVal + gVal, 16);
            colorObject.b = parseInt(bVal + bVal, 16);
        } else {
            throw new Error('Invalid HexString length. Expected either 8, 6, or 3. The actual length was ' + hexStr.length);
        }

        return colorObject;
    },
    launchPath: null,
    getLaunchPath: function () {
        return uwa.launchPath;
    },
    signin: {
        facebook: function () {
            return uwa.signin.generic("facebook");
        },
        twitter: function () {
            return uwa.signin.generic("twitter");
        },
        google: function () {
            return uwa.signin.generic("google");
        },
        generic: function (provider) {
            if (typeof Windows !== 'undefined') {
                var startURI = new Windows.Foundation.Uri('https://www.beyondpad.com/auth/' + provider);
                var endURI = new Windows.Foundation.Uri('https://www.beyondpad.com/auth/' + provider + '/callback');

                Windows.Security.Authentication.Web.WebAuthenticationBroker.authenticateAsync(Windows.Security.Authentication.Web.WebAuthenticationOptions.none, startURI, endURI).done(
                    function (result) {
                        if (result.responseStatus === Windows.Security.Authentication.Web.WebAuthenticationStatus.success) {
                            window.location.replace(result.responseData);
                        }
                    }
                );

                return true;
            } else {
                return false;
            }
        }
    },
    confirm: function () { },
    alert: function () { },
    toast: {
        test: function () {
            uwa.toast.schedule('timer', '546b50d2657f2d68a1667f65', '00000', 'title0', 'details0', 2000);
            uwa.toast.unscheduleAll();
            uwa.toast.schedule('timer', '546b50d2657f2d68a1667f66', '00000', 'title1', 'details1', 3000);
            uwa.toast.schedule('timer', '546b50d2657f2d68a1667f67', '00000', 'title2', 'details2', 5000);
            uwa.toast.schedule('timer', '546b50d2657f2d68a1667f68', '00000', 'title3', 'details3', 8000);
            uwa.toast.unschedule('timer', '546b50d2657f2d68a1667f67', '00000');
        },
        getXml: function (title, details, path) {
            var toastXml = Windows.UI.Notifications.ToastNotificationManager.getTemplateContent(Windows.UI.Notifications.ToastTemplateType.toastImageAndText02);

            var toastTextElements = toastXml.getElementsByTagName("text");
            toastTextElements[0].appendChild(toastXml.createTextNode(title));
            toastTextElements[1].appendChild(toastXml.createTextNode(details));

            var toastImageElements = toastXml.getElementsByTagName("image");
            toastImageElements[0].setAttribute("src", "ms-appx-web:///img/logo.png");
            toastImageElements[0].setAttribute("alt", "Beyondpad");

            var launchAttribute = toastXml.createAttribute("launch");
            launchAttribute.value = path;
            var toastNode = toastXml.selectSingleNode("/toast");
            toastNode.attributes.setNamedItem(launchAttribute);

            return toastXml;
        },
        id: function (toastXml, value) {
            var toastImageElements = toastXml.getElementsByTagName("toast");
            if (value) {
                toastImageElements[0].setAttribute("tag", value);
            } else {
                value = toastImageElements[0].getAttribute("tag");
            }

            return value;
        },
        show: function (title, details, path, silent) {
            if (typeof Windows !== 'undefined') {
                var toast = new Windows.UI.Notifications.ToastNotification(uwa.toast.getXml(title, details, path));

                toast.suppressPopup = !!silent;

                var toastNotifier = Windows.UI.Notifications.ToastNotificationManager.createToastNotifier();

                toastNotifier.show(toast);
            }
        },
        getQuery: function (type, id, blockId) {
            var query = 'Beyondpad';

            if (type) {
                query += '/' + type;
            } else {
                query += '/.+?';
            }

            if (id) {
                query += '/' + id;
            } else {
                query += '/.+?';
            }

            if (blockId) {
                query += '/' + blockId;
            } else {
                query += '/.+?';
            }

            return query;
        },
        schedule: function (type, id, blockId, title, details, span) {
            var currentTime = new Date();
            var startTime = new Date(currentTime.getTime() + span);

            var scheduledToast = new Windows.UI.Notifications.ScheduledToastNotification(uwa.toast.getXml(title, details, 'notes/all/id:' + id), startTime);

            uwa.toast.id(scheduledToast.content, uwa.toast.getQuery(type, id, blockId));

            scheduledToast.tag = Math.floor(Math.random() * 1000000000)

            var toastNotifier = Windows.UI.Notifications.ToastNotificationManager.createToastNotifier();

            toastNotifier.addToSchedule(scheduledToast);
        },
        unschedule: function (type, id, blockId) {
            var toastNotifier = Windows.UI.Notifications.ToastNotificationManager.createToastNotifier();
            var scheduled = toastNotifier.getScheduledToastNotifications();

            var query = uwa.toast.getQuery(type, id, blockId);
            var queryRegex = new RegExp(query, "gi");

            for (var i = 0, len = scheduled.length; i < len; i++) {
                if (queryRegex.test(uwa.toast.id(scheduled[i].content))) {
                    toastNotifier.removeFromSchedule(scheduled[i]);
                }
            }
        },
        unscheduleAll: function () {
            uwa.toast.unschedule();
        },
        removeAll: function () {
            Windows.UI.Notifications.ToastNotificationHistory().clear();
        },
        remove: function (type, id, blockId) {
            var query = uwa.toast.getQuery(type, id, blockId);
            var queryRegex = new RegExp(query, "gi");

            var tagArr = [];

            var notificationHistory = Windows.UI.Notifications.ToastNotificationHistory();
            var history = notificationHistory.getHistory();
            for (var i = 0, l = history.length; i < l; i++) {
                var toast = history.getAt(i)
                if (queryRegex.test(uwa.toast.id(toast.content))) {
                    tagArr.push(toast.tag);
                }
            }

            for (var i = 0, l = tagArr.length; i < l; i++) {
                notificationHistory.remove(tagArr[i]);
            }
        }
    }
}

uwa.start();