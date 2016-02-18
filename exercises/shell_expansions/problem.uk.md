_Expansions_  цемеханізм для роботи із арифметичними обчисленнями, для збереження результатів виконання коменд і т.д.

Ви можете більш детально прочитати [про shell expansions](https://www.gnu.org/software/bash/manual/bash.html#Shell-Expansions).

### Brace expansion

Brace expansion дозволяє нам генеерувати нам довільні рядки. Схоже до _filename expansion_. Наприклад:

```bash
echo beg{i,a,u}n # begin began begun
```

Також brace expansions можеть використовуватися для створення діапазонів, як ітерації у циклах.

```bash
echo {0..5} # 0 1 2 3 4 5
echo {00..8..2} # 00 02 04 06 08
```

### Підстановка команд

Підстановка команд дозволяє нам кионувати команду після чого підставити значення яке вона повернула у іншу команду чи змінну. Підстановка команд виконується коли команда оточена у ``` `` ``` або `$()`.  Наприклад:

```bash
now=`date +%T`
# or
now=$(date +%T)

echo $now # 19:08:26
```

### Arithmetic expansion

У bash ми можемо виконувати будь-які арифметичні операції. Але вирази мають бути всередині`$(( ))`. Наприклад:

```bash
result=$(( ((10 + 5*3) - 7) / 2 ))
echo $result # 9
```

## Завдання

Створіть файл із назвою `expansions.bash`.

Ваш скрипт повинен перемножити перший позиційний аргумент на суму другого та третього викристовуючи arithmetic expansion.Зберегти результат у змінну, наприклад `$RESULT`.

Потім, використовуючи brace expansions, відтворити наступну файлову структуру:

```
project-<RESULT>
├── dest
│   ├── index.js
│   └── util.js
├── src
│   ├── index.js
│   └── util.js
└── test
    ├── index.js
    └── util.js
```

Не створюйте директорій! Просто виведіть результат використовуючи команду `echo`. Наприклад:

    ./expansions.bash 1 5 6

Результат:

    project-11/src/index.js
    project-11/src/util.js
    project-11/dest/index.js
    project-11/dest/util.js
    project-11/test/index.js
    project-11/test/util.js

---
