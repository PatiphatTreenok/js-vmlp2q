// Import stylesheets
import './style.css';
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');

// Button elements
//const btn = document.getElementById('btn');
const btnSend = document.getElementById('btnSend');
const btnClose = document.getElementById('btnClose');
const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnScanCode = document.getElementById('btnScanCode');
const btnOpenWindow = document.getElementById('btnOpenWindow');

// Profile elements
const email = document.getElementById('email');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendShip');

async function main() {
  //alert('Start');

  //console.log('Login');
  //liff.login();

  // Try a LIFF function
  switch (liff.getOS()) {
    case 'android':
      body.style.backgroundColor = '#d1f5d3';
      break;
    case 'ios':
      body.style.backgroundColor = '#eeeeee';
      break;
    case 'web':
      body.style.backgroundColor = '#ffffff';
      break;
  }
  //console.log(liff.getOS());
  //liff.login();
  liff.ready.then(() => {
    if (liff.isInClient()) {
      //getUserProfile()
      const profile = liff.getProfile();
      //userId.innerHTML = '<b>IsInClient:</b> ' + liff.isInClient();
      //userId.innerHTML = '<b>Line Name:</b> ' + profile.userId;
      userId.innerHTML = '<b>Profile => </b> ' + profile.userId;
      //userId.innerHTML = '<b>email:</b> ' + liff.getDecodedIDToken().email;
      displayName.innerHTML = '<b>Liff Token => </b> ' + liff.getAccessToken();
      //displayName.innerHTML = '<b>Display Name => </b>' + profile.displayName;
      statusMessage.innerHTML = '<b>Context</b> ' + liff.getContext().userId;
      //Send Message
      // liff
      //   .sendMessages([
      //     {
      //       type: 'text',
      //       text: 'Hello, World!',
      //     },
      //   ])
      //   .then(() => {
      //     window.alert('Message sent');
      //   })
      //   .catch((error) => {
      //     window.alert('Error sending message: ' + error);
      //   });
    } else {
      userId.innerHTML = '<b>Fail=>IsInClient : </b> ' + liff.isInClient();
      displayName.innerHTML =
        '<b>Fail=>Display Name : </b>' + profile.displayName;
    }
    //btnShare.style.display = 'block';
  });

  // Initialize LIFF app
  await liff.init({ liffId: '1657418595-QLr34KgD' });
}
main();

function getUserProfile() {
  //const profile = liff.getProfile();
  //alert(profile.userId);
  // pictureUrl.src = profile.pictureUrl;
  // userId.innerHTML = '<b>userId:</b> ' + profile.userId;
  // statusMessage.innerHTML = '<b>statusMessage:</b> ' + profile.statusMessage;
  // displayName.innerHTML = '<b>displayName:</b> ' + profile.displayName;
  // email.innerHTML = '<b>email:</b> ' + liff.getDecodedIDToken().email;
}
// btn.addEventListener('click', function () {
//   //document.body.style.backgroundColor = 'green';
//   //LineID = 'XXX';
//   alert('Button Click');
// });
