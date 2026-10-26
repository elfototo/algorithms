// ====== Two Sum (hash map) ======

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// nums = [2, 7, 11, 15]

// target = 9

// → [0, 1]

export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (const [i, value] of nums.entries()) {
    let num = target - value;

    const secondIndex = map.get(num);

    if (secondIndex !== undefined) {
      return [i, secondIndex];
    }
    map.set(value, i);
  }

  return [];
}



// примеры 

// Пример 1. Поиск пользователя по ID

// Допустим, у тебя есть список пользователей, и нужно найти пользователя с определённым ID.

const users = [
  { id: 101, name: "Anna" },
  { id: 102, name: "Max" },
  { id: 103, name: "Kate" },
];

const usersById = new Map(
  users.map((user) => [user.id, user])
);

const user = usersById.get(102);

console.log(user); // { id: 102, name: "Max" }

// Где пригодится:

// * при работе с пользователями;
// * при обработке данных, полученных с API;
// * в админ-панелях;
// * при сопоставлении пользователей с их заказами или сообщениями.

// Связь с Two Sum: в обоих случаях Map позволяет быстро найти нужные данные по ключу.

// Пример 2. Поиск повторяющихся элементов

// Представь, что ты получаешь список ID товаров из корзины и хочешь определить, какие ID повторяются.

function findDuplicates(ids: number[]): number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();

  for (const id of ids) {
    if (seen.has(id)) {
      duplicates.add(id);
    } else {
      seen.add(id);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1])); // [2, 1]

// Где пригодится:

// * проверка повторяющихся ID;
// * обработка списков товаров;
// * очистка данных от дубликатов;
// * проверка повторных записей.

// Здесь используется Set, но принцип похож: мы запоминаем уже встреченные значения, чтобы не перебирать весь список заново.

// Пример 3. Поиск недостающей связи между данными

// Допустим, сервер прислал список заказов и отдельный список пользователей. Нужно сопоставить каждый заказ с пользователем.

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Max" },
];

const orders = [
  { id: 501, userId: 2 },
  { id: 502, userId: 1 },
  { id: 503, userId: 2 },
];

const usersById = new Map(
  users.map((user) => [user.id, user])
);

const ordersWithUsers = orders.map((order) => ({
  ...order,
  user: usersById.get(order.userId),
}));

console.log(ordersWithUsers);

// Теперь у каждого заказа есть информация о пользователе.

// Где пригодится: в интернет-магазинах, CRM, личных кабинетах и других приложениях, где нужно объединять данные из разных источников.

// Без Map пришлось бы для каждого заказа заново искать пользователя в массиве. При большом количестве данных это может быть заметно медленнее.

function countOccurrences(items: string[]): Map<string, number> {
  const counts = new Map<string, number>();

  for (const item of items) {
    counts.set(item, (counts.get(item) ?? 0) + 1);
  }

  return counts;
}

const result = countOccurrences([
  "click",
  "scroll",
  "click",
  "click",
  "scroll",
]);

console.log(result.get("click")); // 3
console.log(result.get("scroll")); // 2

// Где пригодится:

// * подсчёт событий аналитики;
// * статистика по категориям;
// * подсчёт товаров каждого типа;
// * обработка результатов поиска.

// Приём - Где встречается

// Map

// Быстрый поиск данных по ключу

// Set

// Уникальные значения и поиск дубликатов

// for...of

// Перебор массивов и других коллекций

// Map.get()

// Получение значения по ключу

// Map.has()

// Проверка наличия ключа

// Map.set()

// Сохранение или обновление значения

// ??

// Значение по умолчанию, если результат null или undefined

// Поиск за O(n) вместо O(n²)

// Оптимизация обработки больших 