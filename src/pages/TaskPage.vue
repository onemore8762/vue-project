<template>
  <div class="page">
    <h2 class="title">Задание</h2>
    <div class="question">
      <strong>Есть два списка:</strong>
      [{id: 1, name: 'Иван'},<br>
      {id: 2, name: 'Олег'},<br>
      {id: 3, name: 'Михаил'},<br>
      {id: 4, name: 'Сергей'}]<br>
      [{id: 1, surname: 'Петров'},<br>
      {id: 2, surname: 'Иванов'},<br>
      {id: 5, surname: 'Ковалев'}]<br>
      <strong> Необходимо их объединить в один список, учитывая, что длинны этих списков могут отличаться. Результат
        объединения будет такой:</strong>
      [{id: 1, name: 'Иван', surname: 'Петров'},<br>
      {id: 2, name: 'Олег', surname: 'Иванов'},<br>
      {id: 3, name: 'Михаил'},<br>
      {id: 4, name: 'Сергей'},<br>
      {id: 5, surname: 'Ковалев'}]<br>
      <strong>Использовать чистый js без каких-либо библиотек.</strong>
    </div>

    <div class="process">
      <div>
        <h3 class="title">Исходные данные</h3>
        [{id: 1, name: 'Иван'},<br>
        {id: 2, name: 'Олег'},<br>
        {id: 3, name: 'Михаил'},<br>
        {id: 4, name: 'Сергей'}]<br><br>
        [{id: 1, surname: 'Петров'},<br>
        {id: 2, surname: 'Иванов'},<br>
        {id: 5, surname: 'Ковалев'}]<br>
      </div>
      <div>
        ------>
      </div>
      <base-button @click="result = mergedList(list1, list2)">Получить</base-button>
      <div>
        ------>
      </div>
      <div class="result">
        {{ JSON.stringify(result) }}
      </div>
    </div>
    <h3 class="title">Написанный код: </h3>
    <code class="code">
      mergedList(list1, list2) {<br>
      const arr1 = list1.map(item => {<br>
      const match = list2.find(innerItem => innerItem.id === item.id);<br>
      return {...item, ...match};<br>
      })<strong> // Поиск идентичных id</strong><br><br>
      const arr2 = list2.filter(item => !list1.find(innerItem => innerItem.id === item.id))<br>
      <strong> // Поиск id которых нету в первом массиве объектов</strong><br>
      return [...arr1, ...arr2]<strong> // Возвращение результата</strong><br>
      }
    </code>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list1: [{id: 1, name: 'Иван'},
        {id: 2, name: 'Олег'},
        {id: 3, name: 'Михаил'},
        {id: 4, name: 'Сергей'}],
      list2: [{id: 1, surname: 'Петров'},
        {id: 2, surname: 'Иванов'},
        {id: 5, surname: 'Ковалев'}],
      result: []
    }
  },
  methods: {
    mergedList(list1, list2) {

      const arr1 = list1.map(item => {
        const match = list2.find(innerItem => innerItem.id === item.id);
        return {...item, ...match};
      })
      const arr2 = list2.filter(item => !list1.find(innerItem => innerItem.id === item.id))
      return [...arr1, ...arr2]

    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-family: Verdana, sans-serif;

  .question {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }

  .process {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .title {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .result {
    max-width: 250px
  }

  .code {
    font-size: 18px;
  }
}
</style>
