console.log(process.arch);
console.log(process.argv);
console.log(process.pid);
console.log(process.version);
console.log(process.platform);
console.log(process.cwd());

process.stdin.setEncoding('utf-8');
console.log('Enter something')
process.stdin.on('data',data => {
    console.log(`You typed ${data.toString()}`);
    process.exit();
 });

process.on('exit',() =>
{
console.log('Exiting....');
setTimeout(() => {
  console.log('this never runs');
  },2000);
});

process.on('uncaughtException', err =>
{
console.log('Error occcured');
console.log(err);
});
setTimeout(() => {
  m1();
}, 2000);
