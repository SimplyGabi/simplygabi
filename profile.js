let username = 'Gabi';
let description = 'I love the butterflys.';
let avatar = 'https://xatimg.com/image/jmH2Mnko4ST9.png';
document.getElementById('username').innerHTML = username;
document.getElementById('description').innerHTML = description;
document.getElementById('userAvatar').innerHTML = `<img src="${avatar}" class="profile-img">`;