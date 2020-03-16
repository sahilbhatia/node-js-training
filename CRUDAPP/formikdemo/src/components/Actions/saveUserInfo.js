const saveUserInfo = async ({ url, userInfo }) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInfo),
    mode: "no-cors"
  });
  return await response.json();
};

export default saveUserInfo;
