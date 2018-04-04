const {isEmail, isISO8601} = require('validator')

exports.post = function (req, res) {
  let body
  try {
    body = req.body
  } catch (e) {
    res.status(400).send('Could not parse body as JSON.')
    return
  }
  if (!body.fullName || !body.email || !body.dateOfBirth) {
    res.status(400).send('Please provide all specified fields')
    return
  }
  if (!(isEmail(body.email) && isISO8601(body.dateOfBirth))) {
    res.status(400).send('Please email and date of birth are valid')
    return
  }
  res.status(200).send('Your information has been validated')
}
