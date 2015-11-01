window.log = window.log || function () { };

var login = {
    demo: function () {
        window.location = "/demo";
    },
    microsoft: function () {
        log('send', 'event', 'account', 'signin', 'microsoft');
        window.location = "/auth/microsoft";
    },
    google: function () {
        log('send', 'event', 'account', 'signin', 'google');
        window.location = "/auth/google";
    },
    facebook: function () {
        log('send', 'event', 'account', 'signin', 'facebook');
        window.location = "/auth/facebook";
    },
    twitter: function () {
        log('send', 'event', 'account', 'signin', 'twitter');
        window.location = "/auth/twitter";
    },
    local: {
        signin: {
            show: function () {
                login.local.signin.email().val(login.local.signup.email().val());
                login.local.signin.password().val(login.local.signup.password().val());
                $('#signin').show();
                $('#signin input')[0] && $('#signin input')[0].focus();
            },
            hide: function () {
                $('#signin').hide();
            },
            email: function () {
                return $('#signin_email');
            },
            password: function () {
                return $('#signin_password');
            },
            submit: function () {
                var email = login.local.signin.email().val().toLocaleLowerCase();
                var password = login.local.signin.password().val();

                if (!(email && email.length > 0 && validateEmail(email))) {
                    login.local.signin.email().focus();
                    return;
                }

                if (!(password && password.length > 0)) {
                    login.local.signin.password().focus();
                    return;
                }

                log('send', 'event', 'account', 'signin', 'local');

                $.ajax({
                    type: "POST",
                    url: '/auth/local/signin',
                    async:false,
                    data: {
                        username: email,
                        password: password
                    },
                    success: function () {
                        window.location = "/app";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Incorrect username or password (use "Sign up" link to create new account)');
                    }
                });
            },
            init: function () {
                var submit = $('#signin_submit');
                submit.on('click', login.local.signin.submit);
                login.local.signin.email().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.signin.password().focus();
                    }
                });
                login.local.signin.password().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.signin.submit();
                    }
                });
            }
        },
        signup: {
            show: function () {
                login.local.signup.email().val(login.local.signin.email().val());
                login.local.signup.password().val(login.local.signin.password().val());

                $('#signup').show();
                $('#signup input')[0].focus();
            },
            hide: function () {
                $('#signup').hide();
            },
            email: function () {
                return $('#signup_email');
            },
            password: function () {
                return $('#signup_password');
            },
            passwordRepeat: function () {
                return $('#signup_passwordRepeat');
            },
            submit: function () {
                var email = login.local.signup.email().val().toLocaleLowerCase();
                var password = login.local.signup.password().val();
                var passwordRepeat = login.local.signup.passwordRepeat().val()

                if (!(email && email.length > 0 && validateEmail(email))) {
                    login.local.signup.email().focus();
                    return;
                }

                if (!(password && password.length > 0)) {
                    login.local.signup.password().focus();
                    return;
                }

                if (password !== passwordRepeat) {
                    login.local.signup.passwordRepeat().focus();
                    return;
                }

                log('send', 'event', 'account', 'signup', 'local');

                $.ajax({
                    type: "POST",
                    url: '/auth/local/signup',
                    async: false,
                    data: {
                        username: login.local.signup.email().val().toLocaleLowerCase(),
                        password: login.local.signup.password().val()
                    },
                    success: function () {
                        window.location = "/app";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Unable to signup');
                    }
                });
            },
            init: function () {
                var submit = $('#signup_submit');
                submit.on('click', login.local.signup.submit);

                login.local.signup.email().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.signup.password().focus();
                    }
                });

                login.local.signup.password().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.signup.passwordRepeat().focus();
                    }
                });

                login.local.signup.passwordRepeat().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.signup.submit();
                    }
                });
            }
        },
        reset: {
            show: function () {
                login.local.reset.email().val(login.local.signin.email().val());
                $('#reset').show();
                $('#reset input')[0].focus();
            },
            hide: function () {
                $('#reset').hide();
                $('#reset input').val('');
            },
            email: function () {
                return $('#reset_email');
            },
            submit: function () {
                var email = login.local.reset.email().val().toLocaleLowerCase();

                if (!(email && email.length > 0 && validateEmail(email))) {
                    login.local.reset.email().focus();
                    return;
                }

                log('send', 'event', 'account', 'reset', 'local');

                $.ajax({
                    type: "POST",
                    url: '/auth/local/reset',
                    async: false,
                    data: {
                        username: login.local.reset.email().val().toLocaleLowerCase()
                    },
                    success: function (response) {
                        alert('Password reset link has been sent to your e-mail');
                        window.location = "/signin";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Unable to initiate password reset');
                    }
                });
            },
            init: function () {
                var submit = $('#reset_submit');
                submit.on('click', login.local.reset.submit);

                login.local.reset.email().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.reset.submit();
                    }
                });
            }
        },
        newpassword: {
            show: function () {
                $('#newpassword').show();
                $('#newpassword input')[0].focus();
            },
            hide: function () {
                $('#newpassword').hide();
                $('#newpassword input').val('');
            },
            password: function () {
                return $('#newpassword_password');
            },
            passwordRepeat: function () {
                return $('#newpassword_passwordRepeat');
            },
            submit: function () {
                var password = login.local.newpassword.password().val();
                var passwordRepeat = login.local.newpassword.passwordRepeat().val();

                if (!(password && password.length > 0)) {
                    login.local.newpassword.password().focus();
                    return;
                }

                if (password !== passwordRepeat) {
                    login.local.newpassword.passwordRepeat().focus();
                    return;
                }

                log('send', 'event', 'account', 'restore', 'local');

                $.ajax({
                    type: "POST",
                    data: {
                        password: login.local.newpassword.password().val()
                    },
                    async: false,
                    success: function (response) {
                        window.location = "/signin";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('Unable to reset password');
                    }
                });
            },
            init: function () {
                var submit = $('#newpassword_submit');
                submit.on('click', login.local.newpassword.submit);

                login.local.newpassword.password().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.newpassword.passwordRepeat().focus();
                    }
                });

                login.local.newpassword.passwordRepeat().on('keypress', function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        login.local.newpassword.submit();
                    }
                });
            }
        },
        hide: function () {
            login.local.signin.hide();
            login.local.signup.hide();
            login.local.reset.hide();
        }
    }
}

$(document).ready(function () {
    if (isSupported()) {
        $('.showSignUp').on('click', function () {
            login.local.hide();
            login.local.signup.show();
        });

        $('.showSignIn').on('click', function () {
            login.local.hide();
            login.local.signin.show();
        });

        $('.showReset').on('click', function () {
            login.local.hide();
            login.local.reset.show();
        });

        login.local.signin.init();
        login.local.signup.init();
        login.local.reset.init();
        login.local.newpassword.init();

        login.local.hide();
        login.local.signin.show();

        $("#demo").on('click', login.demo);
        $("#microsoft").on('click', login.microsoft);
        $("#google").on('click', login.google);
        $("#facebook").on('click', login.facebook);
        $("#twitter").on('click', login.twitter);
    } else {
        $('#container').hide();
        $('.loadingdata').show();
    }
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function isSupported() {
    var myNav = navigator.userAgent.toLowerCase();
    var result = (myNav.indexOf('msie') != -1) ? !(parseInt(myNav.split('msie')[1]) <= 9) : true;
    return result;
};