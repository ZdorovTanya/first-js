
//         <script>
//           function write_list1(...args){
//             const blockWithList1 = document.querySelector('.text_form-with-list-1');
//             const list_1 = document.createElement('ul');
//             list_1.classList.add("dec_spisok");
//             blockWithList1.insertAdjacentElement("beforeend", list_1);
//             args.forEach((item) => {
//               const li = document.createElement('li');
//               li.textContent = item;
//               list_1.appendChild(li);
//             });
//             let newP = document.createElement("p");
//             newP.innerText = "Что ещё нужно блестящей игре?";
//             blockWithList1.appendChild(newP);
//           }

//           function write_list2(...args){
//             const blockWithList2 = document.querySelector('.text_form-with-list-2');
//             const list_2 = document.createElement('ul');
//             blockWithList2.insertAdjacentElement("beforeend", list_2);
//             args.forEach((item) => {
//               const li = document.createElement('li');
//               li.textContent = item;
//               list_2.appendChild(li);
//             });
//           }
//         </script>
//       </head>
// <body>
	
// <div class="wrapper">
	
//     <nav class="header">
//         <ul id="navbar">
//           <li><a href="Glavnaya.html" class="underline-one">Главная</a></li>
//           <li><a href="OboMne.html" class="underline-one">Обо мне</a></li>
//           <li><a href="Interesi.html" class="underline-one">Мои интересы</a></li>
//           <li><a href="Uchoba.html" class="underline-one">Учеба</a></li>
//           <li><a href="Album.html" class="underline-one">Фотоальбом</a></li>
//           <li><a href="Kontakt.html" class="underline-one">Контакт</a></li>
//           <li><a href="Test.html" class="underline-one">Тест</a></li>
//         </ul>
//       </nav>


//   <main class="content">

//     <ul class="anchor">
//       <li><a href="#hobbi" class="underline-one">Моё хобби</a></li>
//       <li><a href="#game" class="underline-one">Игра</a></li>
//       <li><a href="#film" class="underline-one">Фильм</a></li>
//       <li><a href="#music" class="underline-one">Музыка</a></li>
//       <li><a href="#knigga" class="underline-one">Книга</a></li>
//       <li><a href="#stick" class="underline-one">Палочка</a></li>
//     </ul>

//     <div class="right">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/skate.jpeg" alt="img not found!">
//       </div>
//       <div class="text_form">
//         <h1 id="hobbi">Моё хобби:</h1>
//         <h2>Доски на колёсиках</h2><br>
//         Люблю становится на скейт в своё свободное время и ехать<br> 
//         куда-то далеко попутно изучая всякие трюки
//       </div>
//     </div>
      
//     <div class="left">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/borda.jpeg" alt="img not found!">
//       </div>
//       <div class="text_form text_form-with-list-1">
//         <h1 id="game">Моя любимая игра:</h1>
//         <h2>Borderlands</h2>
//         <p>Шутер от первого лица в котором есть всё:</p>
//         <script>write_list1('Море оружия и врагов', 'Большие локации', 'Потрясающий сюжет','И куча разнообразных боссов')</script>
//       </div>
//     </div>
  
//     <div class="right">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/club.png" alt="img not found!">
//       </div>
//       <div class="text_form">
//         <h1 id="film">Мой любимый фильм:</h1>
//         <h2>"Бойцовский клуб"</h2><br>
//         Если меня попросят посоветовать фильм, я непременно скажу - Бойцовский клуб.<br>
//         Невероятный сюжет о дружбе совершенно разных и в тоже время одинаковых людей.
//       </div>
//     </div>
      
//     <div class="left">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/rock.png" alt="img not found!">
//       </div>
//       <div class="text_form text_form-with-list-2">
//         <h1 id="music">Моя любимая музыка:</h1>
//         <h2>ееееее рррроооокккк</h2><br>
//         Одни из любимых групп это:
//         <script>write_list2("Green Day", "Sum 41", "Three Days Grace", "Thousand Foot Krutch", "The Offspring", "Skillet")</script>
//       </div>
//     </div>

//     <div class="right">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/book.png" alt="img not found!">
//       </div>
//       <div class="text_form">
//         <h1 id="knigga">Моя любимая книга:</h1>
//         <h2>"Победи прокрастинацию"</h2><br>
//         Перечитываю ежедневно.
//       </div>
//     </div>
      
//     <div class="left">
//       <div class="img_align img_border_square img_border_margin">
//         <img src = "img/stick.png" alt="img not found!">
//       </div>
//       <div class="text_form">
//         <h1 id="stick">Моя любимая палочка твикс:</h1>
//         <h2>Правая</h2><br>
//         Почему?<br><br>
//         не знаю...
//       </div>
//     </div>

//   </main>
	
  
//   <footer class="footer">
//     <h3>Права не защищены ©<br>аче бы и нет</h3>
//   </footer>

// </div>
// </body>
// </html>