function validatePass(rule, value, callback) {
  if (value.length < 6) {
    callback(new Error('密码不少于六位'))
  } else {
    callback()
  }
}

export { validatePass }
