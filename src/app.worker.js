//worker.js

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  self.window.addEventListener('message', (e) => {
    if (!e) return;
    const { user, type } = e.data;
    if (type === 'asc') {
      user = user.sort((a, b) => a.commentCount - b.commentCount);
    } else {
      user = user.sort((a, b) => b.commentCount - a.commentCount);
    }

    postMessage(user);
  });
};
