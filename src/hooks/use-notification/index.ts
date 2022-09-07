function hasPermission() {
  return new Promise<boolean>((resolve, reject) => {
    try {
      if (Notification.permission === 'granted') {
        resolve(true);
      } else if (Notification.permission === 'denied') {
        reject(new Error('notification permission denied'));
      } else {
        resolve(false);
      }
    } catch (error) {
      reject();
    }
  });
}

async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    return true;
  } else {
    throw new Error('notification permission denied');
  }
}

export function useNotification() {
  const notify = async () => {
    try {
      const has = await hasPermission();
      if (!has) {
        await requestPermission();
      }
      new Notification('状态更新提醒', {
        body: '你的朋友圈有3条新状态，快去查看吧',
        // tag: 'linxin',
        // icon: 'https://prd-cdn-talkdesk.talkdesk.com/cdn-assets/latest/talkdesk/brand/main_brand/icon/talkdesk_icon.svg',
        requireInteraction: true
      });
      const audio = document.createElement('audio');
      document.body.appendChild(audio);
      audio.oncanplay = audio.play;
      audio.src = '/static/notification.mp3';
      audio.onended = audio.remove;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return { notify };
}
