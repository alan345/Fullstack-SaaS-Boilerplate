type User = {
  email: string
  name: string
  image: string
  password: string
  age: number
  createdAt: Date
  role: "user" | "admin"
}

export const messages = [
  "Hey, how's it going?",
  "Just joined the call!",
  "Sorry I’m late 😅",
  "Wrapping up something, brb.",
  "Mind if I share my screen?",
  "Quick question — do we have a deadline?",
  "I'll take care of it today.",
  "Looks like it’s working now.",
  "Let me know your thoughts.",
  "I'm free after 3 if that works.",
  "Haha wow, didn’t expect that!",
  "I’ll push a fix in a sec.",
  "Ping me when you're back.",
  "Just saw this, on it now.",
  "Everything good on your end?",
  "Let’s pair on this later.",
  "This might need a hotfix.",
  "Trying out a new library here.",
  "Will loop in the rest of the team.",
  "That UI is super clean 🔥",
  "Catch you tomorrow!",
  "Did you catch the game last night?",
  "What are you working on today?",
  "Just grabbing some coffee ☕️",
  "Can you send me the file?",
  "LOL that was hilarious 😂",
  "Any updates on the project?",
  "Let's catch up later.",
  "I'm in a meeting, ping you after!",
  "Sounds good to me.",
  "Let me know if you need help.",
  "What's the ETA on that?",
  "Working on it now!",
  "Thanks! Appreciate it.",
  "Morning! Ready for the day?",
  "I'll take a look and get back to you.",
  "This is looking great 👌",
  "Do you want to hop on a quick call?",
  "Haha yup, classic.",
  "Almost done with the changes.",
  "Pushed the latest to GitHub.",
  "Just deployed it to staging.",
  "Tests are passing now.",
  "Weird bug, trying to figure it out.",
  "Lunch break! 🍔",
  "Anyone up for a game later?",
  "Heads up, server restart at 3pm.",
  "New feature is live 🚀",
  "Who broke the build? 😅",
  "Slack is acting weird today.",
  "Need a second pair of eyes on this.",
  "Can we move the meeting to 2?",
  "Sent it over in an email.",
  "Finally fixed that bug!",
  "How’s everyone’s day going?",
  "Let’s sync up tomorrow.",
  "Good night! Catch you all later 🌙",
  "I'll be OOO tomorrow.",
  "Anyone seen the new Figma file?",
  "That’s a great idea!",
  "Agreed, let’s do that.",
  "Added a couple of comments in the doc.",
  "Merged the PR 🚢",
  "Rebased and force pushed.",
  "Haha, classic Monday.",
  "I'll check logs and get back.",
  "Let’s keep it async for now.",
  "Welcome to the team! 🎉",
  "Meeting now! Lets go!",
  "Working from a cafe today ☕️📶",
  "Almost done, just tweaking the UI.",
]
export const initUsersData: User[] = [
  {
    email: "alan@example.com",
    name: "Alan Doe",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=BlazerShirt&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 25,
    createdAt: new Date("2024-11-28T11:12:54Z"),
    role: "admin",
  },
  {
    email: "alan-admin@example.com",
    name: "Alan Admin Doe",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Prescription01&hatColor=Red&hairColor=Red&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Black&eyeType=Hearts&eyebrowType=UpDown&mouthType=ScreamOpen&skinColor=Yellow",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 30,
    createdAt: new Date("2024-01-02T12:43:21Z"),
    role: "admin",
  },
  {
    email: "john@example.com",
    name: "John Doe",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=Gray02&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Black",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-01-03T12:12:26Z"),
    role: "user",
  },
  {
    email: "user50@example.com",
    name: "User Fifty",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&hairColor=SilverGray&facialHairType=BeardMagestic&facialHairColor=BlondeGold&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Close&eyebrowType=SadConcernedNatural&mouthType=Grimace&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 35,
    createdAt: new Date("2024-01-04T12:12:26Z"),
    role: "user",
  },
  {
    email: "lisa@example.com",
    name: "Lisa Smith",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&eyeType=WinkWacky&eyebrowType=RaisedExcitedNatural&mouthType=Grimace&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 27,
    createdAt: new Date("2024-01-05T12:12:26Z"),
    role: "user",
  },
  {
    email: "mike@example.com",
    name: "Mike Johnson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardLight&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-01-06T12:12:26Z"),
    role: "user",
  },
  {
    email: "jane@example.com",
    name: "Jane Brown",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=Hoodie&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Brown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 29,
    createdAt: new Date("2024-01-07T12:12:26Z"),
    role: "user",
  },
  {
    email: "emma@example.com",
    name: "Emma White",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 26,
    createdAt: new Date("2024-01-08T12:12:26Z"),
    role: "user",
  },
  {
    email: "james@example.com",
    name: "James Green",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Round&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=Overall&eyeType=Hearts&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 31,
    createdAt: new Date("2024-01-09T12:12:26Z"),
    role: "user",
  },
  {
    email: "charlotte@example.com",
    name: "Charlotte Lee",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Close&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Black",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 24,
    createdAt: new Date("2024-01-10T12:12:26Z"),
    role: "user",
  },
  {
    email: "david@example.com",
    name: "David Harris",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Kurt&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=CollarSweater&eyeType=Hearts&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 33,
    createdAt: new Date("2024-01-11T12:12:26Z"),
    role: "user",
  },
  {
    email: "mia-w@example.com",
    name: "Mia Clark",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 22,
    createdAt: new Date("2024-01-12T12:12:26Z"),
    role: "user",
  },
  {
    email: "user1@example.com",
    name: "User One",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=PastelYellow&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 29,
    createdAt: new Date("2024-01-13T12:12:26Z"),
    role: "user",
  },
  {
    email: "user2@example.com",
    name: "User Two",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=Hat&hatColor=Blue03&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 34,
    createdAt: new Date("2024-01-14T12:12:26Z"),
    role: "user",
  },
  {
    email: "liam-s@example.com",
    name: "Liam Smith",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 23,
    createdAt: new Date("2024-01-15T12:12:26Z"),
    role: "user",
  },
  {
    email: "olivia@example.com",
    name: "Olivia Brown",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelGreen&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-01-16T12:12:26Z"),
    role: "user",
  },
  {
    email: "noah@example.com",
    name: "Noah Wilson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Default&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-01-17T12:12:26Z"),
    role: "user",
  },
  {
    email: "sophia-anderson@example.com",
    name: "Sophia Anderson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-01-18T12:12:26Z"),
    role: "user",
  },
  {
    email: "mason@example.com",
    name: "Mason Thomas",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=White&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 21,
    createdAt: new Date("2024-01-19T12:12:26Z"),
    role: "user",
  },
  {
    email: "isabella@example.com",
    name: "Isabella Jackson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairMiaWallace&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-01-20T12:12:26Z"),
    role: "user",
  },
  {
    email: "william@example.com",
    name: "William White",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-01-21T12:12:26Z"),
    role: "user",
  },

  {
    email: "james_martin@example.com",
    name: "James Martin",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-01-22T12:12:26Z"),
    role: "user",
  },
  {
    email: "charlotte_t@example.com",
    name: "Charlotte Thompson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 34,
    createdAt: new Date("2024-01-23T12:12:26Z"),
    role: "user",
  },
  {
    email: "benjamin@example.com",
    name: "Benjamin Garcia",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 36,
    createdAt: new Date("2024-01-24T12:12:26Z"),
    role: "user",
  },
  {
    email: "amelia@example.com",
    name: "Amelia Martinez",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 39,
    createdAt: new Date("2024-01-25T12:12:26Z"),
    role: "user",
  },
  {
    email: "elijah@example.com",
    name: "Elijah Robinson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue03&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 41,
    createdAt: new Date("2024-01-26T12:12:26Z"),
    role: "user",
  },
  {
    email: "harper@example.com",
    name: "Harper Clark",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-01-27T12:12:26Z"),
    role: "user",
  },
  {
    email: "lucas-r@example.com",
    name: "Lucas Rodriguez",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 30,
    createdAt: new Date("2024-01-28T11:12:26Z"),
    role: "user",
  },
  {
    email: "ava@example.com",
    name: "Ava Scott",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 27,
    createdAt: new Date("2024-01-29T12:12:26Z"),
    role: "user",
  },
  {
    email: "ethan@example.com",
    name: "Ethan Lewis",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 29,
    createdAt: new Date("2024-01-30T12:12:26Z"),
    role: "user",
  },
  {
    email: "mia@example.com",
    name: "Mia Walker",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 26,
    createdAt: new Date("2024-01-31T12:12:26Z"),
    role: "user",
  },
  {
    email: "logan@example.com",
    name: "Logan Hall",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Brown&facialHairType=BeardLight&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 31,
    createdAt: new Date("2024-02-01T12:12:26Z"),
    role: "user",
  },
  {
    email: "ella@example.com",
    name: "Ella Young",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-02-02T12:12:26Z"),
    role: "user",
  },
  {
    email: "lucas-k@example.com",
    name: "Lucas King",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 30,
    createdAt: new Date("2024-02-03T12:12:26Z"),
    role: "user",
  },
  {
    email: "sophia-w@example.com",
    name: "Sophia Wright",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 27,
    createdAt: new Date("2024-02-04T12:12:26Z"),
    role: "user",
  },
  {
    email: "jackson-h@example.com",
    name: "Jackson Harris",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Brown&facialHairType=BeardLight&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-02-05T12:12:26Z"),
    role: "user",
  },
  {
    email: "amelia-clark@example.com",
    name: "Amelia Clark",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 29,
    createdAt: new Date("2024-02-06T12:12:26Z"),
    role: "user",
  },
  {
    email: "oliver-martinez@example.com",
    name: "Oliver Martinez",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 31,
    createdAt: new Date("2024-02-07T12:12:26Z"),
    role: "user",
  },
  {
    email: "lucas-king@example.com",
    name: "Lucas King",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 30,
    createdAt: new Date("2024-02-03T12:12:26Z"),
    role: "user",
  },
  {
    email: "sophia@example.com",
    name: "Sophia Wright",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 27,
    createdAt: new Date("2024-02-04T12:12:26Z"),
    role: "user",
  },
  {
    email: "jackson@example.com",
    name: "Jackson Harris",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Brown&facialHairType=BeardLight&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 32,
    createdAt: new Date("2024-02-05T12:12:26Z"),
    role: "user",
  },
  {
    email: "amelia-c@example.com",
    name: "Amelia Clark",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 29,
    createdAt: new Date("2024-02-06T12:12:26Z"),
    role: "user",
  },
  {
    email: "oliver-m@example.com",
    name: "Oliver Martinez",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 31,
    createdAt: new Date("2024-02-07T12:12:26Z"),
    role: "user",
  },
  {
    email: "emma-d@example.com",
    name: "Emma Davis",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 26,
    createdAt: new Date("2024-02-08T12:12:26Z"),
    role: "user",
  },
  {
    email: "liam@example.com",
    name: "Liam Johnson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 23,
    createdAt: new Date("2024-02-09T12:12:26Z"),
    role: "user",
  },
  {
    email: "olivia-b@example.com",
    name: "Olivia Brown",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelGreen&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-02-10T12:12:26Z"),
    role: "user",
  },
  {
    email: "noah-w@example.com",
    name: "Noah Wilson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Default&skinColor=Light",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-02-11T12:12:26Z"),
    role: "user",
  },
  {
    email: "sophia-a@example.com",
    name: "Sophia Anderson",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Tanned",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 28,
    createdAt: new Date("2024-02-12T12:12:26Z"),
    role: "user",
  },
  {
    email: "lucas-miller@example.com",
    name: "Lucas Miller",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 30,
    createdAt: new Date("2024-02-13T12:12:26Z"),
    role: "user",
  },
  {
    email: "emma-smith@example.com",
    name: "Emma Smith",
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=DarkBrown",
    password:
      "035f373274a799f11bae5745fbeefc73:214c6c33b8dcb6ed279c35b8c8ad4ee2c5dcd0798a434616ab124f0c25ee1707b550ce0817154def9c3279bfac566d2d08c635766d41004a502ee745a644c923", // hashed version. non-hashed is "securePassword"
    age: 26,
    createdAt: new Date("2024-02-14T12:12:26Z"),
    role: "user",
  },
]
