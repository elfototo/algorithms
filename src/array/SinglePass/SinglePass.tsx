const prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Купить за 1, продать за 6.

const prices2 = [7, 6, 4, 3, 1];
// Output: 0
// Цены только падают.

export function SinglePass(array: number[]): number {
  if (array.length === 0) return 0;

  let minPrice = array[0];
  let maxProfit = 0;

  for (let price of array) {
    let profit = price - minPrice!;

    if (minPrice !== undefined && price < minPrice) {
        minPrice = price
    }

    if (profit > maxProfit) {
        maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(SinglePass(prices));
console.log(SinglePass(prices2));

// Single Pass (один проход с отслеживанием минимума/максимума) часто используется в:

// 1. Финансах — максимальная прибыль от покупки и продажи актива.
// 2. Аналитике — поиск максимального и минимального значения в потоке данных.
// 3. Мониторинге — отслеживание пиков температуры, нагрузки сервера, потребления памяти.
// 4. Обработке данных — поиск максимального изменения между последовательными значениями.
// 5. Frontend — отслеживание максимальной/минимальной цены товаров при загрузке списка.