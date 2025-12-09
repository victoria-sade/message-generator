const subjects = [
  "A quiet conversation", "Your strongest desire", "An unexpected breakthrough",
  "Inner clarity", "Focused effort", "Subtle shifts in routine",
  "Deep reflection", "A lucky opportunity"
];

const verbs = [
  "unlocks", "requires", "illuminates", "guides",
  "inspires", "reveals", "brings", "demands"
];

const objects = [
  "a fresh perspective on work.", "decisive action from you.", "your best path forward.",
  "a surprising measure of peace.", "hidden energy and resources.", "immediate attention to finances.",
  "a long-awaited answer.", "meaningful success."
];

const pickRandomMessage = messages => {
 const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

const buildMessage = () => {
   const sub = pickRandomMessage(subjects);
   const ver = pickRandomMessage(verbs);
   const obj = pickRandomMessage(objects);

   const messageParts = [sub, ver, obj];

  return messageParts.join(' ');
}

const getMessageType = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let type = '';

  switch (randomNum) {
    case 0: 
      type = "Just a Thought:";
      break;

    case 1:
      type = "Urgent Alert:";
      break;
    
    case 2:
       type = "A Whispered Rumor:";
       break;
    
    default:
      type = "Message: ";
  }
  return type;
}

const numOfMessages = 8;
for (let i = 0; i < numOfMessages; i++) {
  const messageType = getMessageType();
  const theMessage = buildMessage();

  console.log(messageType + theMessage)
}