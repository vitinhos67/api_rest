import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('---------------------------');
  console.log(`Listening PORT ${PORT}`);
  console.log(`click here for go to server: http://localhost:${PORT}`);

  console.log('---------------------------');
});
