export function hey(message: string): string {
  const formattedMessage = message.trim()

  if (isSilence(formattedMessage)) {
    return 'Fine. Be that way!'
  } else if (isQuestion(formattedMessage)) {
    if (isYell(formattedMessage)) {
      return "Calm down, I know what I'm doing!"
    }

    return "Sure."
  } else if (isYell(formattedMessage)) {
    return "Whoa, chill out!"
  } else {
    return "Whatever."
  }
}

const isQuestion = (message: string) => {
  return message[message.length - 1] === "?"
}

const isYell = (message: string) => {
  const allUpperCase = message;

  return message === allUpperCase.toUpperCase() && /[a-zA-Z]/.test(message)
}

const isSilence = (message: string) => {
  return message.replace(/ /g, '').replace(/\t/g, '').replace(/\n/g, '').replace(/\r/g, '') === ""
}