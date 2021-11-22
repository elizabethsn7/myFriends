const friends = document.getElementsByClassName('friends')[0];

const users = document.getElementById('users');
const allFriends = document.getElementById('allFriends');
const userInput = document.getElementById('userInput');

users.addEventListener('click', function () {
  allFriends.innerHTML = ' ';
});
userInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') addFriend();
});

function addFriend() {
  var h2 = document.createElement('h2');
  h2.innerHTML = '-' + userInput.value;
  h2.addEventListener('click', function () {
    h2.style.textDecoration = 'line-through';
  });
  allFriends.insertAdjacentElement('beforeend', h2);

  userInput.value = '';
}
