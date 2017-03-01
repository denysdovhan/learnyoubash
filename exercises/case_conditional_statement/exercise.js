module.exports = require('../../utils/problem')(__dirname, () => {
  const extensions = [
    'js', 'png', 'jpeg', 'jpg', 'gif', 'bmp', 'bash', 'sh', 'zsh', 'rb', 'py',
  ];

  const random = () => Math.ceil(Math.random() * 10);

  return [
    extensions[random()],
  ];
});
