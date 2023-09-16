<template>
    <div id="app">
    
    
    <router-view></router-view>
  
    <!-- 1a. Text Interpolation -->
    <div id="text-interpolation">
      <p>{{ message }}</p>
    </div>
  
    <!-- 1b. Raw HTML [v-html] -->

    <div v-html="rawHTMLContent">

    </div>

  
    <!-- 1c. Attribute Bindings [v-bind:id] -->
    <div id="v-bind">
      <button v-bind:id="buttonID">I'm a button</button>
    </div>
  
  
    <!-- 1d. JavaScript expressions inside syntax i.e. {{ }} -->
    <div id="JS inside syntax">
      <p>{{ message2.toUpperCase() }}</p>
    </div>
  
    <!-- 2. Methods --> <!-- 7b Method handling-->
    <div id="methods">
      <button @click="displayText">I have a method attached</button>
    </div>
  
    <!-- 3. Reactivity Fundamentals -->
    <div id="reactivity">
      <p>Times clicked: {{ count }}</p>
      <button @click="increaseCount">Add to count</button>
    </div>
  
    <!-- 4.Computed Properties -->
    <div id="Computed Properties">
      <p>Width: {{ width }}</p>
      <p>Height: {{ height }}</p>
      <p>Area: {{ area }}</p>
    </div>
  
    <!-- 5.Class and Style Bindings -->
  
  
  
    <!--5a. Binding HTML class-->
  
    <div v-bind:class="{myClass: true}">
      <button @click="toggleClass()">Click to toggle class</button>
      <p>myClass: {{ myClass }}</p>
    </div>
  
    
  
  
    <!--5b. Binding Inline Styles-->
  
    <div v-bind:style="{ backgroundColor: applyStyle ? 'lightblue' : 'white'}">
      <button @click="applyStyle = !applyStyle">Change section styles</button>
    </div>
  
  
    <!--6. List Rendering-->
  
  
    <!--6a. v-for with an object-->
  
    <div id="v-for-range">
      <h1>About me</h1>
      <ul>
        <li v-for="(value, key) in myObject" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
  
  
    <!--6b. v-for with a range-->
  
      <div v-for-range>
        <p>numbers using v-for</p>
        <ul>
          <li v-for="n in 5" :key="n">
            {{ n }}
          </li>
        </ul>
      </div>
  
  
      <!--6d. v-for with v-if-->
      <div>
        <p>Healthy items in grocery list using v-for/v-if</p>
        <ul>
          <li v-for="item in groceries" :key="item.id">
            <span v-if="item.isHealthy">{{ item.name }}</span>
          </li>
  
        </ul>
      </div>
  
  
      <!--6e. v-for with a component-->
  
  
  
      <!--7 Event handling-->
      <!--7a Inline Handling-->
  
      <div>
        <p>Counter: {{ counter }}</p>
        <button @click="counter++">Increase counter</button>
      </div>
  
  
      <!--8. Form Input Bindings-->
  
      <!--8. v-model with <input type="text">, <input type="checkbox">, <input type="radio">, <select> and <textarea>-->
  
      <div id="form">
        <form action="submit">
      
          <!-- Text Input -->
      <label for="name">Text Input:</label>
      <input type="text" id="name" v-model="name" />
      <p>Name: {{ name }}</p>
  
      <!-- Checkbox -->
      <label>
        <input type="checkbox" v-model="isChecked" />
        Checkbox
      </label>
      <p>Checkbox is checked: {{ isChecked }}</p>
  
      <!-- Radio Buttons -->
      <label>
        <input type="radio" v-model="selectedOption" value="option1" />
        Option 1
      </label>
      <label>
        <input type="radio" v-model="radioOption" value="option2" />
        Option 2
      </label>
      <p>Selected Option: {{ selectedOption }}</p>
  
      <!-- Select -->
      <label for="select">Select:</label>
      <select id="select" v-model="selectedOption">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <p>Selected Option: {{ selectedOption }}</p>
  
      <!-- Textarea -->
      <label for="textarea">Textarea:</label>
      <textarea id="textarea" v-model="textAreaValue"></textarea>
      <p>Textarea Value: {{ textAreaValue }}</p>
    </form>
  
    </div>
  
    <!--8b. v-model modifiers [.lazy , .number, .trim]-->
    <div>
    <form action="submit">
      <input type="text" v-model.lazy="lazyValue" />
      <p>Will update when cliked off: {{ lazyValue }}</p>
  
      <input type="text" v-model.number="numericValue" />
      <p>Numeric Input Value: {{ numericValue }}</p>
  
      <input type="text" v-model.trim="trimmedValue" />
      <p>Removes unneccessary whitespace: {{ trimmedValue }}</p>
  
  
    </form>
    </div>
  
    <!--9 Watchers-->
  
    <div>
      <label for="nameInput">Enter name: </label>
      <input type="text" id="nameInput" v-model="nameWatcher">
      <p>{{ greeting }}</p>
    </div>
  </div>
 
  </template>
  
  
  
  <script>

  import {ref, computed} from 'vue';

  export default {
    setup(){
      
      const count = ref(0);
  
      const increaseCount = () => {
        count.value++;
      }
  
      const width = ref(10);
      const height = ref(5);
  
      const area = computed(() => {
        return width.value * height.value;
      })
  
      return {count, increaseCount, width, 
        height, 
        area};
    },
    data (){
      return{
        message: "This is an example of text interpolation",
        message2: "i was a lowercase message",
        buttonID: 'my-button',
        myClass: false,
        applyStyle: false,
        myObject: {
          name: 'Jordan',
          age: '28',
          university: 'Deakin'
        },
        groceries: [
          {id: 1, name: 'bananas', isHealthy: true},
          {id: 2, name: 'pizza', isHealthy: false},
          {id: 3, name: 'avocado', isHealthy: true},
          {id: 4, name: 'chocolate', isHealthy: false}
        ],
        counter: 0,
        name: '',
        isChecked: false,
        selectedOption: '',
        radioOption: '',
        textAreaValue: '',
        lazyValue: '',
        numericValue: 0,
        trimmedValue: '',
        greeting: '',
        nameWatcher: '',
        items: [
          {id: 1, name: 'item 1'},
          {id: 2, name: 'item 2'},
          {id: 3, name: 'item 3'},
          {id: 4, name: 'item 4'},
          {id: 5, name: 'item 5'},
          {id: 6, name: 'item 6'},
        ],
        rawHTMLContent: '<strong>I am HTML content</strong>'
        
      };
    },
      methods: {
        displayText(){
          alert("button clicked");
        },
        toggleClass() {
          this.myClass = !this.myClass;
        },
        handleClick(message){
          alert(message);
        }
      },
      watch: {
        nameWatcher(newName, oldName) {
          if (newName !== oldName) {
            this.greeting = 'Hello' + ' ' + newName;
          } else {
            this.greeting = 'Please enter your name!';
          }
        }
      },   
    }; 
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* Reset some default browser styles */
html, body, p, ul, li, h1, h2 {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}



  </style>