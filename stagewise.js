import('@stagewise/toolbar').then(({ initToolbar }) => {
  const stagewiseConfig = {
    plugins: [
      {
        name: 'Custom Alert',
        icon: '🔔',
        onClick: () => alert('Hello from Stagewise Toolbar!'),
      },
    ],
  };
  // Инициализируем только в режиме разработки или на localhost
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    initToolbar(stagewiseConfig);
  }
}); 