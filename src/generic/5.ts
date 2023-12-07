/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

// class kvp implements KeyValuePair<string, number> {
//   constructor(public key: string, public value: number) {}
//   show(): void {
//     console.log(this.value, this.key);
//   }
// }
// new kvp("h", 1).show();
export {};
