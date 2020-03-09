const random = () => {
  const rand = [];
  for (let i = 0; i < 8; i++) rand.push(Math.floor(Math.random() * 10));
  for (let i = 0; i < 4; i++) rand.push(i === 3 ? 1 : 0);

  return rand;
};

const validate = (rand, firstDigit) => {
  const validation = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const randClone = rand.slice(0);
  let sum = 0;

  if (firstDigit) randClone.push(firstDigit);

  for (let i = 0; i < randClone.length; i++) {
    if (firstDigit) sum = sum + randClone[i] * validation[i];
    else sum = sum + randClone[i] * validation[i + 1];
  }

  return Math.floor(sum % 11) < 2 ? 0 : 11 - Math.floor(sum % 11);
};

module.exports.templateTags = [
  {
    name: "randomCNPJ",
    displayName: "Random CNPJ",
    description: "Create a valid and random CNPJ",
    args: [
      {
        displayName: "With punctuation",
        description: "Generates a CNPJ with punctuation",
        type: "boolean",
        defaultValue: false
      }
    ],
    async run(context, punctuation) {
      const rand = random();

      const firstDigit = validate(rand);
      const secondDigit = validate(rand, firstDigit);

      let cnpj = rand.join("").concat(`${firstDigit}${secondDigit}`);
      let maskedCnpj = `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(5, 8)}/${cnpj.substring(8, 12)}-${firstDigit}${secondDigit}`;

      return punctuation ? maskedCnpj : cnpj;
    }
  }
];
