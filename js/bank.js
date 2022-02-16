document.getElementById('sub-btn').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    //    user pass
    const passFeild = document.getElementById('user-pass');
    const emailPass = passFeild.value;

    if (userEmail == 'fatema@gmail.com' && emailPass == 'secret') {
        window.location.href = 'banking.html';
    }

})
