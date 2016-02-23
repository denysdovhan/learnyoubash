# Чудово!

В описі до завдання ми не розповідали про цикл `select`.

Цикл `select` допоможе Вам в організації користувацього меню. Він має такий же синтаксис як цикл `for`:

```bash
select answer in elem1 elem2 ... elemN
do
  # statements
done
```

Цикл `select` виведе усі `elem1..elemN` на екран із відповідними порядковими номерами, пічсля чого, вони будуть запропоновані користувачу. Зазвичай це виглядає як `$?` (`PS3` змінна). Відповідь буде збережена у `answer`. Якщо `answer` це номер в проміжку `1..N`, тоді `statements` буде виконано і `select` перейде до наступної ітерації — буде використана команда `break`.

Ось приклад того, як це все працює:

```bash
#!/bin/bash

PS3="Оберіть пакетний менеджер: "
select ITEM in bower npm gem pip
do
  echo -n "Введіть назву пакету: " && read PACKAGE
  case $ITEM in
    bower) bower install $PACKAGE ;;
    npm)   npm   install $PACKAGE ;;
    gem)   gem   install $PACKAGE ;;
    pip)   pip   install $PACKAGE ;;
  esac
  break # avoid infinite loop
done
```

Цей приклад запитує користувача який пакетний менеджер потрібно використовувати. Після чого запитає який пакет потрібно інсталювати і встановить його.

Після запуску ми отримаємо:

```
$ ./my_script
1) bower
2) npm
3) gem
4) pip
Choose the package manager: 2
Enter the package name: bash-handbook
<installing bash-handbook>
```

У настпному завданні ми розглянемо функції у Bash.
