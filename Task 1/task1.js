//    ======Page1======
document.addEventListener('DOMContentLoaded', function () {
    var colorSelect = document.getElementById('color');
    var colorPreview = document.getElementById('colorPreview');

    colorSelect.addEventListener('change', function () {
        colorPreview.style.backgroundColor = this.value;
    });

    var form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var color = document.getElementById('color').value;

        setCookie('userName', name, 7);
        setCookie('userAge', age, 7);
        setCookie('userGender', gender, 7);
        setCookie('userColor', color, 7);

        var visitCount = getCookie('visitCount');
        if (visitCount === '') {
            setCookie('visitCount', '1', 7);
        } else {
            setCookie('visitCount', (parseInt(visitCount) + 1).toString(), 7);
        }

        window.location.href = 'task1-p2.html';
    });

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return '';
    }
});


//    ======Page2======
 document.addEventListener('DOMContentLoaded', function() {
            var name = getCookie('userName');
            var age = getCookie('userAge');
            var gender = getCookie('userGender');
            var color = getCookie('userColor');
            var visitCount = getCookie('visitCount') || 1;
            
            setCookie('visitCount', parseInt(visitCount) + 1, 7);
            
            document.getElementById('welcomeName').textContent = name;
            document.getElementById('profileName').textContent = name;
            document.getElementById('profileAge').textContent = age + ' years';
            
            var genderElement = document.getElementById('profileGender');
            if (gender === 'male') {
                genderElement.innerHTML = '<i class="fas fa-mars gender-icon male"></i> Male';
            } else {
                genderElement.innerHTML = '<i class="fas fa-venus gender-icon female"></i> Female';
            }
            
            var colorElement = document.getElementById('profileColor');
            colorElement.innerHTML = color + '<div class="color-box" style="background-color: ' + color + ';"></div>';
            
            var countElement = document.getElementById('visitCount');
            if (visitCount == 1) {
                countElement.textContent = 'This is your first visit to your profile. Welcome!';
            } else {
                countElement.textContent = 'You have visited your profile ' + visitCount + ' times.';
            }
            
            function getCookie(name) {
                var nameEQ = name + '=';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
                return '';
            }
            
            function setCookie(name, value, days) {
                var expires = '';
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toUTCString();
                }
                document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
            }
        });