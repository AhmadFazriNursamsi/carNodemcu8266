const NODEMCU_IP = "http://10.208.133.12"; // ganti IP sesuai Serial Monitor

function send(cmd) {
  fetch(`${NODEMCU_IP}/${cmd}`).catch(err => console.log(err));
}
